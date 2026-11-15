import { NextResponse } from "next/server";
import { jsonError, requireAdminApi } from "@/lib/auth/session";
import { MAX_UPLOAD_BYTES, saveImage, sniffImageType } from "@/lib/media";

const LIMIT_MB = MAX_UPLOAD_BYTES / 1024 / 1024;

/** Upload an image (cover or inline). Stored on disk; returns its public path and pixel size. */
export async function POST(request: Request) {
  const admin = await requireAdminApi();
  if (admin instanceof NextResponse) return admin;

  // Reject obviously oversized bodies before buffering them
  if (Number(request.headers.get("content-length") ?? 0) > MAX_UPLOAD_BYTES + 64 * 1024)
    return jsonError(413, `Images must be ${LIMIT_MB} MB or smaller`);

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File) || file.size === 0) return jsonError(400, "Choose an image to upload");
  if (file.size > MAX_UPLOAD_BYTES) return jsonError(413, `Images must be ${LIMIT_MB} MB or smaller`);

  const bytes = new Uint8Array(await file.arrayBuffer());
  const type = sniffImageType(bytes);
  if (!type) return jsonError(415, "Upload a JPEG, PNG, WebP, AVIF or GIF image");

  try {
    const image = await saveImage(bytes, type, file.name);
    return NextResponse.json({ url: image.src, width: image.width, height: image.height }, { status: 201 });
  } catch (err) {
    console.error(`[admin] upload by ${admin.email} failed:`, err);
    const unreadable = err instanceof Error && /unsupported|corrupt|premature|bad seek|Input/i.test(err.message);
    return jsonError(unreadable ? 415 : 500, unreadable ? "That image file couldn't be read. Try exporting it again as JPEG or PNG." : "The image couldn't be saved. Try again.");
  }
}
