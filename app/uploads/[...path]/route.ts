import { openUpload } from "@/lib/media";

type Context = { params: Promise<{ path: string[] }> };

/**
 * Serves admin-uploaded images from the uploads/ folder in the project root (see lib/media.ts). Every upload
 * gets a new timestamped file name and files are never overwritten, so responses are cached for a year.
 */
export async function GET(_request: Request, { params }: Context) {
  try {
    const file = await openUpload((await params).path);
    if (!file) return new Response("Not found", { status: 404, headers: { "Cache-Control": "no-store" } });
    return new Response(file.body, {
      headers: {
        "Content-Type": file.contentType,
        "Content-Length": String(file.size),
        "Last-Modified": file.modified.toUTCString(),
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "default-src 'none'; sandbox",
      },
    });
  } catch (err) {
    console.error("[uploads] read failed:", err);
    return new Response("Unavailable", { status: 503 });
  }
}
