# Editing Guide - Marina Portfolio

## Quick Links
- **Live Site**: https://rxbo22rno4htc.ok.kimi.link
- **Project Location**: `/mnt/okcomputer/output/app/`

---

## How to Edit Projects

Projects are stored in `/mnt/okcomputer/output/app/src/content/projects.json`

### Project Structure
```json
{
  "id": "unique-id",
  "slug": "url-friendly-name",
  "title": "Project Title",
  "year": 2024,
  "summary": "Short description for cards",
  "problem": "The challenge faced",
  "approach": "How you solved it",
  "impact": "Measurable results",
  "tools": ["Python", "SQL", "React"],
  "tags": ["Machine Learning", "Healthcare"],
  "role": "Your role",
  "featured": true,
  "impactLevel": "high",
  "technicalLevel": "high",
  "links": {
    "github": "https://github.com/...",
    "demo": "https://demo.com",
    "caseStudy": null
  },
  "images": []
}
```

### Adding a New Project
1. Open `/mnt/okcomputer/output/app/src/content/projects.json`
2. Add a new project object to the `projects` array
3. Ensure the `slug` is unique and URL-friendly (lowercase, hyphens)
4. Set `featured: true` to show on homepage
5. Use `impactLevel` and `technicalLevel` values: `"low"`, `"medium"`, or `"high"`

### Editing Existing Projects
Simply modify the values in the JSON file. The changes will reflect after rebuilding.

---

## How to Edit Content

### Home Page Sections
- **Hero**: Edit in `/mnt/okcomputer/output/app/src/sections/Hero.tsx`
- **Pillars**: Edit in `/mnt/okcomputer/output/app/src/sections/Pillars.tsx`
- **Featured Projects**: Automatically pulled from projects.json
- **Proof/Metrics**: Edit in `/mnt/okcomputer/output/app/src/sections/Proof.tsx`
- **About Teaser**: Edit in `/mnt/okcomputer/output/app/src/sections/AboutTeaser.tsx`
- **CTA Banner**: Edit in `/mnt/okcomputer/output/app/src/sections/CTABanner.tsx`

### About Page
Edit in `/mnt/okcomputer/output/app/src/pages/About.tsx`

### CV Page
- Content: Edit in `/mnt/okcomputer/output/app/src/pages/CV.tsx`
- CV Files: Replace PDFs in `/mnt/okcomputer/output/app/public/cv/`

### Contact Page
Edit in `/mnt/okcomputer/output/app/src/pages/Contact.tsx`

---

## Design System

### Colors
Located in `/mnt/okcomputer/output/app/src/index.css` and `tailwind.config.js`

**Primary Colors:**
- `--background`: Warm off-white `#FDFBF7`
- `--foreground`: Near-black `#1A1A1A`
- `--primary`: Warm sand/amber (for CTAs)
- `--secondary`: Sage green (for health/pharma context)

**Custom Colors:**
- `sand-500`: `#D4B896` - Primary accent
- `sage-500`: `#8B9A7C` - Health/pharma accent
- `teal-500`: `#368A8A` - Technical accent

### Typography
- **Headlines**: Sora (font-display)
- **Body**: Inter (font-body)
- **Code/Labels**: JetBrains Mono (font-mono)

### Spacing
- Base unit: 4px
- Sections: py-20 (80px) to py-32 (128px)
- Cards: p-6 (24px) to p-8 (32px)
- Gap: gap-4 (16px) to gap-8 (32px)

---

## How to Deploy

### After Making Changes

1. **Navigate to project directory:**
   ```bash
   cd /mnt/okcomputer/output/app
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Copy any new assets to dist:**
   ```bash
   cp -r public/cv dist/
   ```

4. **Deploy:**
   The deployment is automatic when you use the deploy tool, or you can redeploy using:
   ```bash
   # The dist folder is deployed
   ```

---

## File Structure

```
/mnt/okcomputer/output/app/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Layout
│   │   ├── ui/              # shadcn/ui components
│   │   └── ui-custom/       # Custom components (ProjectCard, etc.)
│   ├── content/
│   │   └── projects.json    # EDIT THIS for projects
│   ├── contexts/
│   │   └── ThemeContext.tsx # Dark/light mode
│   ├── lib/
│   │   ├── router.tsx       # Custom router
│   │   └── projects.ts      # Project utilities
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── About.tsx
│   │   ├── CV.tsx
│   │   └── Contact.tsx
│   ├── sections/            # Home page sections
│   ├── types/
│   │   └── project.ts       # TypeScript types
│   ├── App.tsx              # Main app
│   └── index.css            # Global styles + design tokens
├── public/
│   └── cv/                  # CV PDF files
├── dist/                    # Build output (deploy this)
└── package.json
```

---

## Tips

1. **Always rebuild after editing** - Run `npm run build` before deploying
2. **Test locally** - Use `npm run dev` to preview changes
3. **Keep backups** - Copy important changes before major edits
4. **Use consistent slugs** - URL-friendly, lowercase, hyphens
5. **Images** - Add to `public/` folder and reference with `/filename.jpg`

---

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify JSON syntax in projects.json
3. Ensure all required fields are present in projects
4. Rebuild and check for TypeScript errors
