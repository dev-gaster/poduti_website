# Podut Community Website

A comprehensive community website for Podut Village in Poyameri Parish, Magola Sub-county, West Budama Constituency, Tororo District, Uganda.

## About

This website showcases the vibrant Podut community, featuring:

- **Home**: Community overview with hero section, about summary, navigation cards, featured stories, and call-to-action
- **Community**: History, culture & traditions, people (elders, youth, families), development opportunities, and location with market information
- **Church**: St. Luke Poduti Church of Uganda - ministries, service schedule, gallery, and support options
- **School**: Poduti Primary School - academics, staff, activities, achievements, and gallery
- **Contact**: Contact information, message form, specific inquiry contacts, and location map

## Features

✨ **Design Highlights:**

- Mobile-first responsive design
- Earth tone color scheme (greens, warm yellows, browns)
- Clean, simple typography for rural accessibility
- Rich photography and visual storytelling
- SEO-optimized with meta tags
- Shared header navigation and footer across all pages

🎨 **Color Theme:**

- Primary: Green (#2e7d32) - representing growth and agriculture
- Secondary: Orange (#E64A19) - warmth and community
- Accent: Amber (#FFA726) - sunshine and optimism
- Background tones: Earth browns and light greens

## Technology Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) - Vue.js framework for server-side rendering
- **UI Library**: [Vuetify 3](https://vuetifyjs.com/) - Material Design component framework
- **Icons**: Material Design Icons (@mdi/font)
- **Language**: TypeScript
- **Styling**: Scoped CSS with Vuetify utilities

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

The site will be available at http://localhost:3000

## Production

Build the application for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Generate static site:

```bash
npm run generate
```

## Project Structure

```
poduti_website/
├── layouts/
│   └── default.vue          # Shared layout with header & footer
├── pages/
│   ├── index.vue            # Home page
│   ├── community/
│   │   └── index.vue        # Community page
│   ├── church/
│   │   └── index.vue        # Church page
│   ├── school/
│   │   └── index.vue        # School page
│   └── contact.vue          # Contact page
├── plugins/
│   └── vuetify.ts           # Vuetify configuration
├── public/
│   └── robots.txt           # SEO robots file
├── nuxt.config.ts           # Nuxt configuration
└── package.json             # Dependencies
```

## Customization Guide

### 1. Update Images

Replace placeholder Unsplash images with actual community photos:

- Edit the `src` attributes in v-img components
- Place images in the `/public` folder
- Reference them as `/your-image.jpg`

### 2. Update Contact Information

Edit the following files to update contact details:

- **Footer**: `layouts/default.vue` (lines with phone, email, address)
- **Contact Page**: `pages/contact.vue` (contact information section)

### 3. Update Content Text

All dummy text is clearly marked and ready to be replaced:

- **Home page**: Edit story titles, descriptions in `pages/index.vue`
- **Community page**: Update history timeline, culture descriptions in `pages/community/index.vue`
- **Church page**: Modify ministry descriptions, service times in `pages/church/index.vue`
- **School page**: Update academic info, staff details in `pages/school/index.vue`

### 4. Add Google Maps Integration

To add an interactive map:

1. Get a Google Maps API key
2. Replace the map placeholder sections with actual Google Maps embed
3. Locations are in:
   - `pages/community/index.vue` (Location Map Section)
   - `pages/contact.vue` (Map Section)

### 5. Customize Colors

Edit `plugins/vuetify.ts` to change the theme colors:

```typescript
colors: {
  primary: '#2e7d32',    // Main green
  secondary: '#E64A19',  // Orange
  accent: '#FFA726',     // Amber
  // Add more custom colors
}
```

### 6. Add More Pages

Create new pages by adding `.vue` files in the `pages/` directory:

- File-based routing: `pages/about.vue` → `/about`
- Nested routes: `pages/news/index.vue` → `/news`

### 7. SEO Optimization

Each page includes SEO meta tags via `useHead()`:

- Update title and description for each page
- Add keywords relevant to your community
- Add Open Graph tags for social media sharing

## Features to Implement

Here are suggestions for future enhancements:

- [ ] Connect contact form to email service (EmailJS, SendGrid, etc.)
- [ ] Add photo gallery with lightbox functionality
- [ ] Implement blog/news section for community updates
- [ ] Add event calendar for church and school events
- [ ] Create donation/payment integration
- [ ] Add multilingual support (English/Luganda)
- [ ] Implement search functionality
- [ ] Add testimonials section
- [ ] Create admin panel for content management
- [ ] Integrate social media feeds

## Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run generate`
4. Publish directory: `dist`

### Deploy to Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Framework preset: Nuxt.js
4. Deploy automatically

### Deploy to Traditional Hosting

1. Run `npm run generate`
2. Upload contents of `dist/` folder to your hosting
3. Point domain to the uploaded files

## Support & Contribution

This website was created to showcase and support the Podut Community.

For questions or suggestions, please contact the community leadership.

## Credits

**Created by**: A proud alumnus of Poduti Primary School
**For**: The Podut Community, Tororo District, Uganda
**Year**: 2025

## License

This project is created for the Podut Community. All rights reserved

# yarn

yarn preview

# bun

bun run preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
```
