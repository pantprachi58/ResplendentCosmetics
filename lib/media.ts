import "server-only";
import { GridFSBucket, ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

/*
 * Uploaded images live in MongoDB GridFS (bucket "media") and are served by app/media/[id]/route.ts.
 * Writing into public/ at runtime doesn't work: `next start` only serves files that existed at build
 * time, and serverless hosts have a read-only filesystem.
 */

export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

type ImageType = "image/jpeg" | "image/png" | "image/webp" | "image/gif" | "image/avif";

/** Identifies the image from its first bytes; the browser-supplied type and extension are ignored. SVG is refused (it can carry script). */
export function sniffImageType(bytes: Uint8Array): ImageType | null {
  const ascii = (start: number, end: number) => String.fromCharCode(...bytes.subarray(start, end));
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "image/jpeg";
  if (bytes[0] === 0x89 && ascii(1, 4) === "PNG") return "image/png";
  if (ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "image/webp";
  if (ascii(0, 4) === "GIF8") return "image/gif";
  if (ascii(4, 8) === "ftyp" && ["avif", "avis"].includes(ascii(8, 12))) return "image/avif";
  return null;
}

async function bucket() {
  return new GridFSBucket(await getDb(), { bucketName: "media" });
}

export async function saveImage(bytes: Uint8Array, contentType: ImageType, originalName: string, uploadedBy: string) {
  const id = new ObjectId();
  const upload = (await bucket()).openUploadStreamWithId(id, originalName.slice(0, 200), {
    metadata: { contentType, uploadedBy },
  });
  await new Promise<void>((resolve, reject) => {
    upload.once("finish", () => resolve());
    upload.once("error", reject);
    upload.end(Buffer.from(bytes));
  });
  return `/media/${id.toString()}`;
}

/** The stored file's bytes and type, or null if it doesn't exist. */
export async function readImage(id: string) {
  if (!ObjectId.isValid(id)) return null;
  const b = await bucket();
  const _id = new ObjectId(id);
  const file = await b.find({ _id }).next();
  if (!file) return null;

  const chunks: Buffer[] = [];
  for await (const chunk of b.openDownloadStream(_id)) chunks.push(chunk as Buffer);
  return { body: Buffer.concat(chunks), contentType: String(file.metadata?.contentType ?? "application/octet-stream") };
}
