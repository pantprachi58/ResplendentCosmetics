/**
 * Verification script to check blog data migration
 * Run with: npx tsx scripts/verify-migration.ts
 */

import { getMigratedBlogPosts } from "../lib/migrate-blog-data";
import { blogPosts as originalPosts } from "../data/blog";

console.log("🔍 Blog Data Migration Verification\n");
console.log("=" .repeat(50));

// Get migrated posts
const migratedPosts = getMigratedBlogPosts();

console.log(`\n✅ Original posts: ${originalPosts.length}`);
console.log(`✅ Migrated posts: ${migratedPosts.length}`);

if (originalPosts.length === migratedPosts.length) {
  console.log("✅ Count matches!");
} else {
  console.log("❌ Count mismatch!");
}

console.log("\n" + "=".repeat(50));
console.log("\n📋 Migrated Posts:\n");

migratedPosts.forEach((post, index) => {
  console.log(`${index + 1}. ${post.title}`);
  console.log(`   Slug: ${post.slug}`);
  console.log(`   Category: ${post.category}`);
  console.log(`   Tags: ${post.tags.join(", ")}`);
  console.log(`   Status: ${post.status}`);
  console.log(`   Reading Time: ${post.readingTime}`);
  console.log(`   Content Length: ${post.content.length} characters`);
  console.log();
});

console.log("=".repeat(50));
console.log("\n📊 Category Breakdown:\n");

const categoryCounts: Record<string, number> = {};
migratedPosts.forEach((post) => {
  categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
});

Object.entries(categoryCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([category, count]) => {
    console.log(`  ${category}: ${count} posts`);
  });

console.log("\n" + "=".repeat(50));
console.log("\n✅ Migration verification complete!");
console.log("\nNext steps:");
console.log("1. Start server: npm run dev");
console.log("2. Login: http://localhost:3000/admin/login");
console.log("3. View posts in dashboard");
console.log("4. Check public blog: http://localhost:3000/blog");
