/*
 * Imports the 37 articles from the old website (scripts/seed-data/legacy-blog-posts.json) into MongoDB.
 *
 *   npm run blog:seed                   insert the old-site posts whose slugs are missing (safe to re-run;
 *                                       existing posts, including admin edits, are never changed)
 *   npm run blog:seed -- --reset        delete EVERY blog post first (and the old GridFS image store),
 *                                       then insert all 37; asks you to type "reset" to confirm
 *   npm run blog:seed -- --reset --yes  same, without the prompt (CI / non-interactive)
 *
 * Featured and inline images are committed under public/images/blog/<slug>/; only their paths go into
 * the database. A running site picks the posts up within 5 minutes (the blog's ISR interval), or at once
 * when any post is saved in /admin.
 */
import "./env";
import { createInterface } from "node:readline/promises";
import { parseArgs } from "node:util";
import { closeDb, getDb } from "../lib/mongodb";
import { seedLegacyPosts } from "../lib/blog/seed";

async function confirmReset(db: string) {
  if (!process.stdin.isTTY) throw new Error("--reset needs confirmation; add --yes to run it without a terminal");
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question(`This deletes every blog post in the "${db}" database, including posts written in /admin. Type "reset" to continue: `);
  rl.close();
  if (answer.trim().toLowerCase() !== "reset") throw new Error("Cancelled; nothing was changed");
}

async function main() {
  const { values } = parseArgs({ options: { reset: { type: "boolean", default: false }, yes: { type: "boolean", default: false } } });
  const db = await getDb();
  if (values.reset && !values.yes) await confirmReset(db.databaseName);

  const { removed, inserted, skipped } = await seedLegacyPosts(db, { reset: values.reset });
  if (values.reset) console.log(`Removed ${removed} existing post(s)`);
  console.log(`Inserted ${inserted.length} post(s)${inserted.length ? `:\n  ${inserted.join("\n  ")}` : ""}`);
  if (skipped.length) console.log(`Left ${skipped.length} existing post(s) untouched (same slug already in the database)`);
}

main()
  .catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exitCode = 1;
  })
  .finally(closeDb);
