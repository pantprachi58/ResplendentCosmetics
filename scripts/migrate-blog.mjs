import { blogPosts } from '../data/blog.ts';
import fs from 'fs';
import path from 'path';

// Map old categories to new categories
const categoryMap = {
  face: "Facial Aesthetics",
  body: "Body Contouring", 
  women: "Women's Health",
  men: "Men's Health",
};

const DEFAULT_AUTHOR = {
  name: "Dr. Sukhbir Singh",
  role: "Senior Consultant Plastic & Cosmetic Surgeon, MS, M.Ch",
  avatar: "/svg/Resplendent Logo Color.png"
};

// Calculate reading time
function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${Math.max(1, minutes)} min read`;
}

// Convert sections to HTML
function convertBlogPost(oldPost) {
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

  // Add questions section
  if (oldPost.questions && oldPost.questions.length > 0) {
    htmlContent += `<h2>Questions to Ask at Your Consultation</h2>\n`;
    htmlContent += `<ul>\n`;
    oldPost.questions.forEach((question) => {
      htmlContent += `  <li>${question}</li>\n`;
    });
    htmlContent += `</ul>\n`;
  }

  const tags = [
    oldPost.topic.replace(" guide", ""),
    categoryMap[oldPost.category] || oldPost.category,
    oldPost.treatment.label,
  ];

  return {
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
    // Keep legacy fields for compatibility
    topic: oldPost.topic,
    image: oldPost.image,
    treatment: oldPost.treatment,
    sections: oldPost.sections,
    questions: oldPost.questions,
  };
}

// Convert all posts
const migratedPosts = blogPosts.map(convertBlogPost);

// Write to posts.json
const outputPath = path.join(process.cwd(), 'data', 'posts.json');
fs.writeFileSync(outputPath, JSON.stringify(migratedPosts, null, 2), 'utf-8');

console.log(`✅ Successfully migrated ${migratedPosts.length} blog posts to ${outputPath}`);
