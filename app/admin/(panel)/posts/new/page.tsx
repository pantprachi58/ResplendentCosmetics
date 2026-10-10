import type { Metadata } from "next";
import { requireAdminPage } from "@/lib/auth/session";
import PostEditor from "@/components/admin/PostEditor";

export const metadata: Metadata = { title: "New post" };

export default async function NewPostPage() {
  await requireAdminPage();
  return <PostEditor />;
}
