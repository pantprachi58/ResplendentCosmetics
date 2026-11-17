/*
 * Lists (and with --delete, removes) uploaded images that no blog post uses: images uploaded in the editor
 * but never saved with a post. Images a post stops using are already deleted when the post is saved.
 *
 *   npm run media:prune              dry run: list unused uploads
 *   npm run media:prune -- --delete  delete them
 *
 * Files changed in the last 24 hours are skipped (an editor may be about to save a post that uses them).
 */
import "./env";
import { parseArgs } from "node:util";
import { closeDb, getDb } from "../lib/mongodb";
import { referencedImages } from "../lib/blog/store";
import { deleteUploads, listUploads, uploadDir } from "../lib/media";

const GRACE_MS = 24 * 60 * 60 * 1000;

async function main() {
  const { values } = parseArgs({ options: { delete: { type: "boolean", default: false } } });
  const used = await referencedImages(await getDb());
  const uploads = await listUploads();
  const unused = uploads.filter((u) => !used.has(u.src) && Date.now() - u.modified.getTime() > GRACE_MS).map((u) => u.src);

  console.log(`${uploads.length} upload(s) in ${uploadDir()}, ${unused.length} unused`);
  for (const src of unused) console.log(`  ${src}`);
  if (!unused.length) return;
  if (values.delete) {
    await deleteUploads(unused);
    console.log(`Deleted ${unused.length} file(s)`);
  } else console.log("Dry run; add --delete to remove them");
}

main()
  .catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exitCode = 1;
  })
  .finally(closeDb);
