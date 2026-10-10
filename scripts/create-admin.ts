/*
 * Creates an admin user, or resets the password of an existing one (which also signs it out everywhere).
 *
 *   npm run admin:create -- --email doctor@example.com --name "Dr. Sukhbir Singh"
 *
 * The password is prompted for (hidden). For non-interactive use (CI), set NEW_ADMIN_PASSWORD in the
 * command's environment; it is never read from .env files, and there is no flag (shell history).
 */
import { shellEnv } from "./env";
import { parseArgs } from "node:util";
import { closeDb, getDb } from "../lib/mongodb";
import { passwordProblem, upsertAdmin } from "../lib/auth/users";

function promptHidden(question: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const { stdin, stdout } = process;
    if (!stdin.isTTY) return reject(new Error("No terminal to prompt on; set NEW_ADMIN_PASSWORD instead"));
    stdout.write(question);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    let value = "";
    const onData = (char: string) => {
      if (char === "\r" || char === "\n" || char === "\u0004") {
        stdin.setRawMode(false);
        stdin.pause();
        stdin.off("data", onData);
        stdout.write("\n");
        resolve(value);
      } else if (char === "\u0003") {
        stdout.write("\n");
        process.exit(130);
      } else if (char === "\u007f" || char === "\b") {
        value = value.slice(0, -1);
      } else {
        value += char;
      }
    };
    stdin.on("data", onData);
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
