# Marina Batlló Rius Portfolio - Summary

## Live Website
**URL**: https://rxbo22rno4htc.ok.kimi.link

---

## What Was Built

A premium, multi-page personal portfolio website with:

### Pages (5 total)
1. **Home (/)** - Hero, Pillars, Featured Projects, Proof Metrics, About Teaser, CTA
2. **Projects (/projects)** - Filterable, searchable project grid with 8 projects
3. **Project Detail (/projects/:slug)** - Individual case study pages
4. **About (/about)** - Story, values, process framework
5. **CV (/cv)** - Timeline, skills, downloadable CV versions
6. **Contact (/contact)** - Form with validation + social links

### Key Features
- **Dark/Light Theme Toggle** - Full theme switching with persisted preference
- **Project System** - JSON-based, easy to edit, with filters, search, and sort
- **Smooth Animations** - Scroll reveals, hover effects, animated hero background
- **Responsive Design** - Mobile-first, works on all devices
- **Premium Design** - "Lumina" brand direction with warm, professional aesthetic

---

## Brand Direction: "Lumina"

### Design Philosophy
Warm, approachable, sophisticated—like morning light in a modern lab. Balances human-centered approach with pharma/health credibility.

### Color Palette
- **Background**: Warm off-white `#FDFBF7`
- **Primary Accent**: Warm sand `#D4A574` (amber)
- **Secondary Accent**: Sage green `#8B9A7C` (health/pharma nod)
- **Tertiary Accent**: Teal `#368A8A` (technical)
- **Text**: Near-black `#1A1A1A`

### Typography
- **Headlines**: Sora (geometric, modern, warm)
- **Body**: Inter (highly readable, professional)
- **Labels**: JetBrains Mono (technical credibility)

---

## Content Structure

### Positioning Statement
"Data & AI for Human Impact"

### Four Pillars
1. **Data & Analytics** - Insights, experimentation, dashboards
2. **AI & Automation** - LLMs, pipelines, RAG, workflow automation
3. **Business & Strategy** - Growth, operations, decision support
4. **Health & Human-Centered** - Healthcare context, UX research, HCI

### Projects (8 total)
1. VITALA Data Management Platform
2. NMR/MRI Analysis Pipeline Automation
3. ML for Carcinogenic Biomarker Detection
4. AI Pain Detection in Rodent Models
5. Electronic Nose for Health & Food
6. Experimental Throughput Optimization
7. Internal Data Analysis Software
8. Enterprise Analytics & BI Transformation

### Key Metrics
- 4x faster analysis pipelines
- 90%+ model accuracy
- 8x throughput increase
- 5+ publications

---

## Technical Stack

- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui (40+ components)
- **Animations**: CSS keyframes + Intersection Observer
- **Routing**: Custom hash-based router
- **Icons**: Lucide React

---

## How to Edit

### Projects
Edit `/mnt/okcomputer/output/app/src/content/projects.json`

### Content
- Home sections: `/mnt/okcomputer/output/app/src/sections/`
- Pages: `/mnt/okcomputer/output/app/src/pages/`
- Styles: `/mnt/okcomputer/output/app/src/index.css`

### CV Downloads
Replace PDFs in `/mnt/okcomputer/output/app/public/cv/`

### Rebuild & Deploy
```bash
cd /mnt/okcomputer/output/app
npm run build
cp -r public/cv dist/
# Deploy dist/ folder
```

---

## File Locations

- **Project Code**: `/mnt/okcomputer/output/app/`
- **Editing Guide**: `/mnt/okcomputer/output/EDITING-GUIDE.md`
- **This Summary**: `/mnt/okcomputer/output/PORTFOLIO-SUMMARY.md`
- **Built Output**: `/mnt/okcomputer/output/app/dist/`

---

## Next Steps

1. **Review the live site** at https://rxbo22rno4htc.ok.kimi.link
2. **Edit projects** in `src/content/projects.json`
3. **Customize content** in the pages and sections
4. **Add your CV PDFs** to `public/cv/`
5. **Update social links** in Footer and Contact page
6. **Rebuild and redeploy** after changes

---

## Design Decisions

### Why "Lumina" Direction?
- Differentiates from blue-tech portfolios
- Communicates human-centered approach
- Subtly nods to health/life sciences
- Feels intentional and premium
- Balances warmth with professionalism

### Why Hash-Based Routing?
- Simpler deployment (no server config needed)
- Works on static hosting
- Faster initial load
- Better for GitHub Pages/Netlify

### Why Custom Router?
- Avoided npm install issues
- Smaller bundle size
- Full control over behavior
- No external dependencies

---

## Accessibility

- WCAG 2.1 AA compliant color contrast
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- Semantic HTML structure
- Screen reader friendly

---

## Performance

- Optimized build with Vite
- Tree-shaking enabled
- Lazy loading for routes
- CSS animations (GPU accelerated)
- Minimal JavaScript footprint
