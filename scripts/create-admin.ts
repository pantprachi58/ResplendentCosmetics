/*
 * Creates an admin user, or resets the password of an existing one (which also signs it out everywhere).
 *
 *   npm run admin:create -- --email doctor@example.com --name "Dr. Sukhbir Singh"
 *
 * The password is prompted for (hidden). For non-interactive use (CI), set NEW_ADMIN_PASSWORD in the
 * command's environment; it is never read from .env files, and there is no flag (shell history).
 */
import { shellEnv } from "./env";
import { createInterface } from "node:readline";
import { Writable } from "node:stream";
import { parseArgs } from "node:util";
import { closeDb, getDb } from "../lib/mongodb";
import { passwordProblem, upsertAdmin } from "../lib/auth/users";

/** Prompts without echoing the answer. readline handles pasted text, backspace and terminal escape codes. */
function promptHidden(question: string): Promise<string> {
  if (!process.stdin.isTTY) return Promise.reject(new Error("No terminal to prompt on; set NEW_ADMIN_PASSWORD instead"));
  let muted = false;
  // Pass the prompt through, swallow the echoed keystrokes
  const output = new Writable({
    write(chunk, _encoding, done) {
      if (!muted) process.stdout.write(chunk);
      done();
    },
  });
  const rl = createInterface({ input: process.stdin, output, terminal: true });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      process.stdout.write("\n");
      resolve(answer);
    });
    muted = true;
  });
}

async function main() {
  const { values } = parseArgs({ options: { email: { type: "string" }, name: { type: "string" } } });
  const email = values.email?.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Usage: npm run admin:create -- --email you@example.com [--name "Your Name"]');
  }

  // Only from the shell, never from a .env file
  let password = shellEnv.NEW_ADMIN_PASSWORD ?? "";
  if (!password) {
    password = await promptHidden("Password: ");
    if ((await promptHidden("Repeat password: ")) !== password) throw new Error("Passwords don't match");
  }
  if (password !== password.trim()) {
    throw new Error("The password starts or ends with a space or line break; that's almost always a paste accident. Try again.");
  }
  const problem = passwordProblem(password);
  if (problem) throw new Error(`Password rejected: ${problem}`);

  const { user, created } = await upsertAdmin(await getDb(), { email, name: values.name?.trim() || email, password });
  console.log(created ? `Created admin ${user.email}` : `Reset the password for ${user.email} and signed out its sessions`);
}

main()
  .catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exitCode = 1;
  })
  .finally(closeDb);
