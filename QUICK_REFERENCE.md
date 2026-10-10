# 🚀 Quick Reference Card

## Access Information

| What | URL | Credentials |
|------|-----|-------------|
| **Admin Login** | http://localhost:3000/admin/login | Password: `resplendent@2026` |
| **Admin Dashboard** | http://localhost:3000/admin | (after login) |
| **Public Blog** | http://localhost:3000/blog | (no login needed) |

## Common Tasks

### ✍️ Create New Blog Post
1. Login → http://localhost:3000/admin/login
2. Click **"Write New Article"**
3. Fill form (title, excerpt, content, category)
4. Upload cover image
5. Choose status: "Published Live" or "Draft"
6. Click **"Publish Article"**

### ✏️ Edit Existing Post
1. Dashboard → Find post in table
2. Click **"Edit"** button
3. Make changes
4. Click **"Update Article"**

### 🗑️ Delete Post
1. Dashboard → Find post
2. Click **"Delete"** button
3. Confirm deletion

### 👀 View Published Post
1. Dashboard → Find published post
2. Click **"View"** button (opens in new tab)
3. Or visit: http://localhost:3000/blog/post-slug

### 🔍 Search Posts
1. Dashboard → Use search bar at top
2. Type: title, slug, or category
3. Results filter automatically

### 🏷️ Filter by Category
1. Dashboard → Use category dropdown
2. Select category or "All"
3. Table updates instantly

### 🚪 Logout
1. Click user icon or logout button
2. Redirects to login page

## Server Commands

```bash
# Start development server
npm run dev

# Stop server
Ctrl + C

# Build for production
npm run build

# Start production server
npm start
```

## File Locations

| File | Purpose |
|------|---------|
| `.env.local` | Configuration (passwords, MongoDB URI) |
| `data/posts.json` | Blog posts (JSON fallback) |
| `public/images/blog/` | Uploaded images |
| `app/admin/` | Admin panel pages |
| `app/api/` | API endpoints |

## API Endpoints

```
GET    /api/blog              # Get all published posts
GET    /api/blog?mode=admin   # Get all posts (admin)
GET    /api/blog/[id]         # Get single post
POST   /api/blog              # Create post
PUT    /api/blog/[id]         # Update post
DELETE /api/blog/[id]         # Delete post

POST   /api/admin/auth        # Login
GET    /api/admin/auth        # Check auth
DELETE /api/admin/auth        # Logout

POST   /api/upload            # Upload image
```

## Categories

- Rhinoplasty & Nose
- Hair Restoration
- Facial Aesthetics
- Body Contouring
- Skin Rejuvenation & Lasers
- Anti-Aging & Injectables

## Environment Variables

```env
# In .env.local file
MONGODB_URI=mongodb://localhost:27017/resplendent_blog
ADMIN_PASSWORD=resplendent@2026
```

## Formatting Toolbar

| Button | HTML Output | Use For |
|--------|-------------|---------|
| **H2** | `<h2>Text</h2>` | Main headings |
| **H3** | `<h3>Text</h3>` | Subheadings |
| **B** | `<strong>Text</strong>` | Bold text |
| **I** | `<em>Text</em>` | Italic text |
| **List** | `<ul><li>Item</li></ul>` | Bullet lists |
| **Quote** | `<blockquote>...</blockquote>` | Quotes |

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't login | Check password in `.env.local`, restart server |
| Posts not showing | Check status is "published", not "draft" |
| Image won't upload | Use direct URL or check file size < 10MB |
| MongoDB error | System automatically uses JSON fallback |
| Server won't start | Run `npm install` then `npm run dev` |

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Save form | Ctrl + Enter (in most browsers) |
| Stop server | Ctrl + C (in terminal) |
| Reload page | Ctrl + R or F5 |
| Open console | F12 |

## Status Indicators

| Status | Meaning | Color |
|--------|---------|-------|
| **Published** | Live on public blog | 🟢 Green |
| **Draft** | Saved but not public | 🟡 Yellow |

## Important Notes

⚠️ **Change password before production!**
```env
ADMIN_PASSWORD=your-secure-password
```

💾 **Data is automatically saved**
- MongoDB (if connected)
- JSON file (fallback)
- Both stay synchronized

🔒 **Session lasts 7 days**
- Auto-logout after 7 days
- Or click logout manually

📝 **Content is HTML/Markdown**
- Use toolbar for quick formatting
- Or write raw HTML for full control

🖼️ **Images**
- Upload directly OR
- Paste external URL
- Saved to `/public/images/blog/`

## Support Documentation

| Guide | When to Read |
|-------|--------------|
| `ADMIN_QUICK_START.md` | First time using admin panel |
| `BLOG_SETUP_GUIDE.md` | Setting up MongoDB |
| `SYSTEM_ARCHITECTURE.md` | Understanding how it works |
| `README_ADMIN_BLOG.md` | Overview and checklist |

## Quick Checks

### Is Server Running?
Terminal shows: `✓ Ready in X.Xs`  
URL works: http://localhost:3000

### Is Login Working?
Can access: http://localhost:3000/admin/login  
Password accepts: `resplendent@2026`

### Are Posts Showing?
Dashboard shows posts ✓  
Blog index shows posts ✓  
Individual posts load ✓

### Is Database Connected?
Check terminal for: "MongoDB connection unavailable"
- If shown → Using JSON fallback ✓
- If not shown → Using MongoDB ✓

## Emergency Recovery

### Lost Admin Password
1. Open `.env.local`
2. Find or add: `ADMIN_PASSWORD=newpassword`
3. Save file
4. Restart server
5. Login with new password

### Deleted Post by Mistake
1. Check `data/posts.json` backup
2. Or restore from MongoDB
3. Or use version control (git)

### Server Won't Start
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Can't Find Posts
1. Check status: published vs draft
2. Check category filter: set to "All"
3. Clear search bar
4. Refresh page

## Quick Links

- [Admin Login](http://localhost:3000/admin/login)
- [Dashboard](http://localhost:3000/admin)
- [Create Post](http://localhost:3000/admin/blog/new)
- [Public Blog](http://localhost:3000/blog)

## Version Info

- **System**: Blog Admin Panel v1.0
- **Framework**: Next.js 16.3.8
- **Database**: MongoDB + JSON Fallback
- **Status**: Production Ready ✅

---

**Print this page for quick reference! 📋**
