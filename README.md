# Angel Delaney — Portfolio Site
 
**Stack:** Vite + React + Tailwind CSS + Framer Motion + React Router

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview  # preview the production build locally
```

## Deploy to GitHub Pages

### Automatic (recommended)
Push to `main` — GitHub Actions builds and deploys automatically via `.github/workflows/deploy.yml`.

**One-time setup:**
1. Go to your repo → Settings → Pages
2. Set Source to **GitHub Actions**
3. Push to `main` — done ✓

### Custom Domain (angeld.design)
1. Add a `CNAME` file to `/public/` with your domain: `angeld.design`
2. In your DNS provider, add a CNAME record pointing to `<username>.github.io`
3. In repo Settings → Pages → Custom domain, enter `angeld.design`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav with scroll effect + mobile menu
│   ├── Footer.jsx        # Site footer
│   └── CaseStudyCard.jsx # Reusable case study card
├── pages/
│   ├── Home.jsx          # Homepage with hero, skills, case studies, marquee
│   ├── About.jsx         # About page
│   ├── CaseStudies.jsx   # Full case study listing
│   └── Contact.jsx       # Contact page
├── data/
│   └── site.js           # All content — edit this to update site copy
└── index.css             # Tailwind + Google Fonts + global styles
```

## Customization

- **Content:** Edit `src/data/site.js`
- **Colors/fonts:** Edit `tailwind.config.js`
- **Animations:** Framer Motion props on each component
