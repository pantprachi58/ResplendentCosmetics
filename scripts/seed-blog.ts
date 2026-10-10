/*
 * Inserts the original static articles (data/blog.ts) into MongoDB.
 *
 *   npm run blog:seed
 *
 * Safe to run any time: only slugs missing from the database are inserted. Existing posts,
 * including ones created or edited in the admin panel, are never changed or removed.
 * (The app also runs this automatically once, the first time it connects to a new database.)
 */
import "./env";
import { closeDb, getDb } from "../lib/mongodb";
import { seedStaticPosts } from "../lib/blog/seed";

async function main() {
  const { inserted, skipped } = await seedStaticPosts(await getDb());
  console.log(`Inserted ${inserted.length} post(s)${inserted.length ? `: ${inserted.join(", ")}` : ""}`);
  console.log(`Left ${skipped.length} existing post(s) untouched`);
}

main()
  .catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exitCode = 1;
  })
  .finally(closeDb);
