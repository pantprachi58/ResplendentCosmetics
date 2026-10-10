/**
 * Migration utility to convert existing blog data from data/blog.ts
 * to the new MongoDB-compatible format
 */

import { blogPosts as oldBlogPosts, BlogPost as OldBlogPost } from "@/data/blog";
import { BlogPost as NewBlogPost, DEFAULT_AUTHOR } from "@/lib/blog-types";

// Map old categories to new categories
const categoryMap: Record<string, string> = {
  face: "Facial Aesthetics",
  body: "Body Contouring",
  women: "Women's Health",
  men: "Men's Health",
};

// Convert old blog post structure to new format
function convertBlogPost(oldPost: OldBlogPost): NewBlogPost {
  // Convert sections to HTML content
  let htmlContent = "";

  oldPost.sections.forEach((section) => {
    htmlContent += `<h2 id="${section.id}">${section.heading}</h2>\n`;

    section.paragraphs.forEach((para) => {
      htmlContent += `<p>${para}</p>\n\n`;
    });

    if (section.bullets && section.bullets.length > 0) {
      htmlContent += `<ul>\n`;
      section.bullets.forEach((bullet) => {
        htmlContent += `  <li>${bullet}</li>\n`;
      });
      htmlContent += `</ul>\n\n`;
    }
  });

  // Add questions section if present
  if (oldPost.questions && oldPost.questions.length > 0) {
    htmlContent += `<h2>Questions to Ask at Your Consultation</h2>\n`;
    htmlContent += `<ul>\n`;
    oldPost.questions.forEach((question) => {
      htmlContent += `  <li>${question}</li>\n`;
    });
    htmlContent += `</ul>\n`;
  }

  // Generate tags from topic and category
  const tags = [
    oldPost.topic.replace(" guide", ""),
    categoryMap[oldPost.category] || oldPost.category,
    oldPost.treatment.label,
  ];

  // Create new format post
  const newPost: NewBlogPost = {
    _id: `migrated-${oldPost.slug}`,
    title: oldPost.title,
    slug: oldPost.slug,
    excerpt: oldPost.excerpt,
    content: htmlContent.trim(),
    category: categoryMap[oldPost.category] || "Facial Aesthetics",
    tags: tags,
    coverImage: oldPost.image.src,
    author: DEFAULT_AUTHOR,
    readingTime: calculateReadingTime(htmlContent),
    status: "published",
    publishedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return newPost;
}

// Calculate reading time
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${Math.max(1, minutes)} min read`;
}

// Convert all old blog posts
export function getMigratedBlogPosts(): NewBlogPost[] {
  return oldBlogPosts.map(convertBlogPost);
}

// Export individual converter for use in other places
export { convertBlogPost };
