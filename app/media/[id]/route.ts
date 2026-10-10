import { readImage } from "@/lib/media";

type Context = { params: Promise<{ id: string }> };

/** Serves an uploaded image from GridFS. Ids are immutable, so responses cache for a year. */
export async function GET(_request: Request, { params }: Context) {
  try {
    const image = await readImage((await params).id);
    if (!image || !image.contentType.startsWith("image/")) return new Response("Not found", { status: 404 });
    return new Response(new Uint8Array(image.body), {
      headers: {
        "Content-Type": image.contentType,
        "Content-Length": String(image.body.length),
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "default-src 'none'; sandbox",
      },
    });
  } catch (err) {
    console.error("[media] read failed:", err);
    return new Response("Unavailable", { status: 503 });
  }
}
