# Quick Guide: Admin & Blog Connection

## How They're Connected

The admin panel and blog are now fully integrated! Here's what you can do:

## 🎯 Admin Dashboard Features

### Access: `/admin/blog`

**Dashboard Overview:**
- 📊 Stats cards showing post counts by category
- 🔍 Search posts by title or content
- 🏷️ Filter by category (Face, Body, Women, Men)
- 📝 Table view of all posts

**Actions Available:**
- 👁️ **View** - See how the post looks on the public blog
- ✏️ **Edit** - Modify post content, sections, questions
- 🗑️ **Delete** - Remove posts (with confirmation)
- ➕ **Create** - Add new blog posts

## 🔗 Navigation Links

### From Admin → Blog
```
Admin Dashboard
  └─ "View Blog" button → /blog (All posts)
  └─ "View" icon → /blog/[slug] (Single post)
  └─ "Preview" button → /blog/[slug] (While editing)
```

### From Blog → Admin
```
Direct access to: /admin/blog
```

## 📋 Quick Actions

### 1️⃣ Create a New Post
1. Go to `/admin/blog`
2. Click "Create New Post"
3. Fill in the form:
   - Title (auto-generates slug)
   - Excerpt
   - Category
   - Topic label
   - Featured image
   - Related treatment
4. Click "Create Post"
5. Edit to add content sections

### 2️⃣ Edit an Existing Post
1. Go to `/admin/blog`
2. Find the post in the table
3. Click the pencil ✏️ icon
4. Update any field
5. Add/remove sections
6. Add/remove questions
7. Click "Save Changes"

### 3️⃣ View Post on Blog
1. From admin dashboard
2. Click the eye 👁️ icon
3. Opens `/blog/[slug]` in same tab

### 4️⃣ Delete a Post
1. Go to `/admin/blog`
2. Find the post in the table
3. Click the trash 🗑️ icon
4. Confirm deletion
5. Page refreshes with updated list

## 🎨 What's Displayed Where

### Admin Panel Shows:
- Title & excerpt
- Thumbnail image
- Category badge
- Topic label
- Treatment link
- Edit controls

### Public Blog Shows:
- Title & full article
- Hero image
- Category & topic
- Reading time
- Content sections
- Table of contents
- Consultation questions
- Related posts
- Treatment CTA

## 🚀 API Endpoints

The connection works through REST APIs:

```
GET    /api/blog          → Fetch all posts
POST   /api/blog          → Create new post
GET    /api/blog/[slug]   → Fetch single post
PUT    /api/blog/[slug]   → Update post
DELETE /api/blog/[slug]   → Delete post
```

## ⚠️ Important Notes

### Current Limitations
- Changes are **not persisted** to the file system
- Updates exist only in memory (page refresh resets)
- API routes show success but don't modify `data/blog.ts`

### Why?
This is a static TypeScript data file. For full persistence, you need:
- Database (PostgreSQL, MongoDB)
- Server-side processing
- File system write access

### What Works Now?
✅ Navigation between admin and blog  
✅ Viewing posts from admin  
✅ Form validation  
✅ UI/UX flow  
✅ API structure  

❌ Persistent CRUD operations  
❌ Database storage  
❌ Image uploads  

## 🔧 For Production

To make this production-ready, implement:

1. **Database Integration**
   ```typescript
   // Example with Prisma
   const post = await prisma.blogPost.create({
     data: newPost
   });
   ```

2. **Authentication**
   ```typescript
   // Protect admin routes
   import { getServerSession } from "next-auth";
   ```

3. **Image Upload**
   ```typescript
   // Use cloud storage
   import { uploadToS3 } from "@/lib/storage";
   ```

## 📱 Responsive Design

Both admin and blog are fully responsive:
- Desktop: Full sidebar + content
- Tablet: Collapsible sidebar
- Mobile: Bottom navigation

## 🎓 Best Practices

1. **Always preview** posts before publishing
2. **Use descriptive slugs** for SEO
3. **Optimize images** before uploading
4. **Write clear excerpts** (160 chars max)
5. **Link to treatments** for better navigation
6. **Add consultation questions** for engagement

## 🆘 Troubleshooting

**Post not showing on blog?**
- Check if slug is unique
- Verify category is set
- Ensure all required fields are filled

**Edit not saving?**
- Check browser console for errors
- Verify API endpoint is accessible
- Check network tab for responses

**Delete not working?**
- Confirm the delete prompt appears
- Check if slug exists
- Look for API errors

## 📞 Need Help?

Check the full documentation: `ADMIN_BLOG_CONNECTION.md`
