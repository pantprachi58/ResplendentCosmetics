import { randomBytes } from "node:crypto";
import { createReadStream } from "node:fs";
import { mkdir, readdir, rename, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import sharp from "sharp";
import { UPLOADS_URL_PREFIX } from "@/lib/blog/content";

export { UPLOADS_URL_PREFIX };

/*
 * Admin image uploads are saved as files in the `uploads/` folder at the project root (created on the first
 * upload), e.g. uploads/1763150000000-rhinoplasty-a1b2.webp, and only their public path
 * (/uploads/1763150000000-rhinoplasty-a1b2.webp) is saved in MongoDB. app/uploads/[...path]/route.ts serves
 * them, like `app.use("/uploads", express.static("uploads"))` in an Express server.
 *
 * They are not written into public/: `next start` only serves files that were in public/ at build time.
 * uploads/ is gitignored, so `git pull` deploys leave it alone; keep it when redeploying.
 *
 * Node-only (fs, sharp). Also used by scripts/prune-uploads.ts, so no Next-only imports here.
 */

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

/** Longest edge an upload is stored at. Larger photos are scaled down; the site never shows them bigger. */
const MAX_EDGE = 2400;

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

/** Always <project root>/uploads, locally and on the server. turbopackIgnore: runtime data, not part of the build output. */
export function uploadDir() {
  return path.join(/*turbopackIgnore: true*/ process.cwd(), "uploads");
}

const CONTENT_TYPES: Record<string, string> = { ".webp": "image/webp", ".gif": "image/gif", ".jpg": "image/jpeg", ".png": "image/png", ".avif": "image/avif" };
const SEGMENT = /^[a-z0-9][a-z0-9._-]{0,150}$/i;

/** Absolute file path for an /uploads/… URL path (or its segments), or null if it isn't a safe upload path. */
function resolveUpload(segments: string[]) {
  if (!segments.length || segments.some((s) => !SEGMENT.test(s) || s.includes(".."))) return null;
  const root = uploadDir();
  const file = path.resolve(/*turbopackIgnore: true*/ root, ...segments);
  return file.startsWith(root + path.sep) ? file : null;
}

const baseName = (name: string) =>
  name
    .replace(/\.[^.]*$/, "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "image";

export type SavedImage = { src: string; width: number; height: number };

/**
 * Stores an uploaded image: applies the camera rotation, strips metadata (EXIF can carry GPS location and
 * device details), scales it down to MAX_EDGE and re-encodes it as WebP (animated GIFs stay animated).
 * Returns its public path and pixel size.
 */
export async function saveImage(bytes: Uint8Array, type: ImageType, originalName: string): Promise<SavedImage> {
  const animated = type === "image/gif" || type === "image/webp";
  const image = sharp(bytes, { animated, limitInputPixels: 80_000_000 })
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true });
  const { data, info } = await image.webp({ quality: 82, effort: 4 }).toBuffer({ resolveWithObject: true });

  // Unique name: upload time in ms + the original name + a short random suffix (two uploads in the same ms)
  const name = `${Date.now()}-${baseName(originalName)}-${randomBytes(2).toString("hex")}.webp`;
  const file = resolveUpload([name]);
  if (!file) throw new Error("Invalid upload path");

  // Created on the first upload if it doesn't exist yet
  await mkdir(uploadDir(), { recursive: true });
  // Write to a temp file first so a crash never leaves a half-written image at the public path
  const temp = `${file}.${process.pid}.tmp`;
  await writeFile(temp, data);
  await rename(temp, file);

  // For animated images sharp reports the height of all frames stacked; pageHeight is one frame
  const height = info.pageHeight ?? info.height;
  return { src: `${UPLOADS_URL_PREFIX}${name}`, width: info.width, height };
}

/** Opens a stored upload for streaming, or null if the path is invalid or missing. */
export async function openUpload(segments: string[]) {
  const file = resolveUpload(segments);
  const contentType = file ? CONTENT_TYPES[path.extname(file).toLowerCase()] : undefined;
  if (!file || !contentType) return null;
  try {
    const info = await stat(/*turbopackIgnore: true*/ file);
    if (!info.isFile()) return null;
    const body = Readable.toWeb(createReadStream(/*turbopackIgnore: true*/ file)) as ReadableStream<Uint8Array>;
    return { body, contentType, size: info.size, modified: info.mtime };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

/** Deletes upload files by their /uploads/… paths. Paths outside the upload folder are ignored. */
export async function deleteUploads(srcs: string[]) {
  for (const src of srcs) {
    if (!src.startsWith(UPLOADS_URL_PREFIX)) continue;
    const file = resolveUpload(src.slice(UPLOADS_URL_PREFIX.length).split("/"));
    if (!file) continue;
    try {
      await unlink(file);
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") console.error("[media] couldn't delete", src, err);
    }
  }
}

/** Every stored upload as { src, modified }, for the prune script. */
export async function listUploads() {
  const root = uploadDir();
  const out: { src: string; modified: Date }[] = [];
  const walk = async (dir: string) => {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") return;
      throw err;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.isFile() && CONTENT_TYPES[path.extname(entry.name).toLowerCase()])
        out.push({ src: UPLOADS_URL_PREFIX + path.relative(root, full).split(path.sep).join("/"), modified: (await stat(full)).mtime });
    }
  };
  await walk(root);
  return out;
}
