import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdminPage } from "@/lib/auth/session";
import { getPostById } from "@/lib/blog/repository";
import PostEditor from "@/components/admin/PostEditor";

export const metadata: Metadata = { title: "Edit post" };

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ created?: string }>;
};

export default async function EditPostPage({ params, searchParams }: Props) {
  await requireAdminPage();
  const post = await getPostById((await params).id);
  if (!post) notFound();

  const { created } = await searchParams;
  const notice = created === "published" ? "Post published." : created === "draft" ? "Draft created." : undefined;

  // key: remount the editor if another post is opened from this page
  return <PostEditor key={post.id} post={post} notice={notice} />;
}
