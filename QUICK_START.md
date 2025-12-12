# Quick Start Guide - Podut Community Website

## 🚀 Getting Started in 5 Minutes

### 1. View the Website

The website is currently running at: **http://localhost:3001**

Open your browser and navigate through:

- **Home** (/)
- **Community** (/community)
- **Church** (/church)
- **School** (/school)
- **Contact** (/contact)

### 2. Stop/Start Development Server

**To stop the server:**

- Press `Ctrl + C` in the terminal

**To start again:**

```bash
cd "D:/Poduti Community/poduti_website"
npm run dev
```

### 3. Make Your First Edit

#### Example: Update Church Name

1. Open `pages/church/index.vue`
2. Find line with "St. Luke Poduti Church of Uganda"
3. Change to your actual church name
4. Save - changes appear automatically!

#### Example: Add Your Photo

1. Put your photo in `/public/images/` folder
2. Open any page file (e.g., `pages/index.vue`)
3. Find: `src="https://images.unsplash.com/..."`
4. Replace with: `src="/images/your-photo.jpg"`
5. Save and refresh browser

### 4. Update Contact Information

Open `layouts/default.vue` and find the footer section:

```vue
<p class="footer-text">
  <v-icon size="small" class="mr-2">mdi-phone</v-icon>
  +256 XXX XXX XXX  ← Change this
</p>
```

## 📋 Common Edits Checklist

### ✏️ Content to Replace

**Contact Details:**

- [ ] Phone number (in footer and contact page)
- [ ] Email address (in footer and contact page)
- [ ] Office hours (in contact page)

**Images:**

- [ ] Home page hero image
- [ ] Community page photos (3)
- [ ] Church page photos (6 gallery images)
- [ ] School page photos (6 gallery images)
- [ ] Story/achievement card images

**Text Content:**

- [ ] Community history details
- [ ] Church service times
- [ ] School staff names
- [ ] Headteacher's message
- [ ] Achievement stories

**Statistics:**

- [ ] School pass rate percentage
- [ ] Number of pupils
- [ ] Number of teachers

### 🎨 Optional Customizations

**Colors:**
Edit `plugins/vuetify.ts` to change theme colors

**Logo:**
Add a logo image to replace the icon + text in header

**Additional Pages:**
Create new files in `/pages/` folder:

- `pages/news.vue` for news/blog
- `pages/events.vue` for event calendar
- `pages/gallery.vue` for full photo gallery

## 🔧 Troubleshooting

### "Port already in use" error

The server will automatically use the next available port (3001, 3002, etc.)

### Changes not showing

1. Save the file
2. Wait 2-3 seconds
3. Refresh browser
4. Clear browser cache if needed

### Build errors

```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

## 📱 Testing Responsiveness

### Desktop View

- Open in Chrome/Firefox/Safari
- Press F12 for developer tools
- View at full width

### Mobile View

- Press F12 in browser
- Click device toggle icon
- Select iPhone, iPad, or Android device
- Test all pages

### Check These:

- [ ] Navigation menu works on mobile
- [ ] Images fit screen
- [ ] Text is readable
- [ ] Buttons are tappable
- [ ] Cards stack properly

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Free)

1. Create account at netlify.com
2. "New site from Git"
3. Connect GitHub repository
4. Build command: `npm run generate`
5. Publish directory: `dist`
6. Deploy!

### Option 2: Vercel (Free)

1. Create account at vercel.com
2. "Import Project"
3. Select Nuxt.js preset
4. Deploy automatically

### Option 3: Traditional Hosting

1. Run `npm run generate`
2. Upload `dist/` folder contents
3. Point domain to files

## 📚 Resources

### Learn More:

- **Nuxt 3 Docs**: https://nuxt.com/docs
- **Vuetify Docs**: https://vuetifyjs.com
- **Material Icons**: https://pictogrammers.com/library/mdi/

### Get Help:

- Check README.md for detailed guide
- Review IMPLEMENTATION_SUMMARY.md
- Search Nuxt/Vuetify documentation

## ⚡ Quick Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate

# Install dependencies
npm install

# Update dependencies
npm update
```

## 🎯 Your First Hour Goals

**Minute 0-10:** Browse the site, understand structure
**Minute 10-20:** Update contact information
**Minute 20-30:** Replace one placeholder image
**Minute 30-40:** Edit one page's text content
**Minute 40-50:** Test on mobile view
**Minute 50-60:** Make a backup of your changes!

## 💾 Backup Your Work

### Before Making Changes:

```bash
# Create a backup
git init
git add .
git commit -m "Initial backup"
```

### After Making Changes:

```bash
# Save changes
git add .
git commit -m "Updated contact info and images"
```

## 🎉 You're Ready!

The website is fully functional and ready for customization. Take it step by step, and don't hesitate to experiment. You can always undo changes or restore from backup.

**Happy editing! 🚀**

---

_For detailed information, see README.md and IMPLEMENTATION_SUMMARY.md_
