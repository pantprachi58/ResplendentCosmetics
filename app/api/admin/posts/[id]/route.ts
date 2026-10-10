import { NextResponse } from "next/server";
import { jsonError, requireAdminApi } from "@/lib/auth/session";
import { deletePost, SlugTakenError, updatePost } from "@/lib/blog/repository";
import { revalidateBlog } from "@/lib/blog/revalidate";
import { parsePostInput } from "@/lib/blog/validation";

type Context = { params: Promise<{ id: string }> };

/** Update a post (full replace of the editable fields) */
export async function PUT(request: Request, { params }: Context) {
  const admin = await requireAdminApi();
  if (admin instanceof NextResponse) return admin;

  const parsed = parsePostInput(await request.json().catch(() => null));
  if ("errors" in parsed) return jsonError(400, "Check the highlighted fields", { fields: parsed.errors });

  try {
    const result = await updatePost((await params).id, parsed.data);
    if (!result) return jsonError(404, "This post no longer exists");
    revalidateBlog(result.post.slug, result.previousSlug);
    return NextResponse.json({ post: { id: result.post.id, slug: result.post.slug } });
  } catch (err) {
    if (err instanceof SlugTakenError) return jsonError(409, err.message, { fields: { slug: err.message } });
    console.error("[admin] update post failed:", err);
    return jsonError(500, "The post couldn't be saved. Try again.");
  }
}

/** Delete a post */
export async function DELETE(_request: Request, { params }: Context) {
  const admin = await requireAdminApi();
  if (admin instanceof NextResponse) return admin;

  try {
    const slug = await deletePost((await params).id);
    if (!slug) return jsonError(404, "This post no longer exists");
    revalidateBlog(slug);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin] delete post failed:", err);
    return jsonError(500, "The post couldn't be deleted. Try again.");
  }
}
