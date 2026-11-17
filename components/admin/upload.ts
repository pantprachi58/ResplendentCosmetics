export const UPLOAD_MAX_MB = 10;

export type UploadedImage = { url: string; width: number; height: number };

/** Uploads an image through the admin API. The server resizes it, converts it to WebP and stores it under /uploads/. */
export async function uploadImage(file: File): Promise<UploadedImage> {
  if (file.size > UPLOAD_MAX_MB * 1024 * 1024) throw new Error(`Images must be ${UPLOAD_MAX_MB} MB or smaller`);
  const body = new FormData();
  body.append("file", file);
  const res = await fetch("/api/admin/media", { method: "POST", body });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401) throw new Error("Your session has expired. Sign in again in another tab, then retry.");
  if (!res.ok) throw new Error(data.error || "Upload failed");
  return { url: data.url as string, width: Number(data.width), height: Number(data.height) };
}
