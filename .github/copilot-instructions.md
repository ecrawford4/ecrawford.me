# Copilot Instructions for ecrawford.me

## Project Overview

**ecrawford.me** is a personal professional portfolio website built with **Astro** (static site generator) and deployed on **Netlify**. The site showcases Ethan Crawford's resume, employment history, and links to various projects and profiles.

## Architecture & Key Patterns

### Framework: Astro
- **Technology**: Astro 5.x with Netlify adapter (static output)
- **Project Structure**: Single-page-app-like with three main pages (Home, Resume, Sitemap)
- **Key Files**:
  - [astro.config.mjs](web/astro.config.mjs) – Static adapter config + Netlify integration
  - [web/src/layouts/Layout.astro](web/src/layouts/Layout.astro) – Master layout with header, nav, theme switcher, sidebar
  - [web/src/pages/](web/src/pages/) – Routable pages (Home.astro, Resume.astro, Sitemap.astro)

### Layout & Theming
- **Master Layout** ([Layout.astro](web/src/layouts/Layout.astro)):
  - Header with logo, title, mobile menu toggle, and **theme selector dropdown**
  - Two-column layout: mobile nav (left) + main content (right) + about sidebar (right)
  - Navigation uses `isActive()` helper to detect current page
  - Theme switching via JavaScript (not CSS-in-JS)
  
- **Theme System** ([global.css](web/src/global.css)):
  - 7+ themes defined via CSS custom properties: `[data-theme="theme-name"]`
  - Includes: Dark, Light, Nord, Sepia, Frosty, High Contrast variants
  - Theme persistence likely handled by JS in Layout.astro
  - Custom `<info>` HTML tag used for styling supplementary text (dates, locations)

### Content Pages
All page files import and wrap content in `<Layout>`:
- [Home.astro](web/src/pages/Home.astro) – Minimal intro; points to GitHub
- [Resume.astro](web/src/pages/Resume.astro) – Education, Employment, Leadership sections with nested content structure
- Sitemap.astro – Site structure reference

## Critical Workflows

### Build & Deploy
```bash
npm run dev       # Local dev at localhost:4321
npm run build     # Static output to ./dist/
npm run preview   # Preview built site locally
```
- **Deployment**: Netlify (configured in [netlify.toml](web/netlify.toml))
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Node 18 enforced
  - SPA-like routing redirect: `/*` → `/Home` (status 200)

### File Organization
- All source code in `web/src/` (Astro convention)
- CSS is global (`global.css`); CSS files co-located with pages/layouts as needed
- Assets in `public/assets/` (favicons, logos, images)
- `package.json` is in `web/` directory (run npm commands from `web/`)

## Development Conventions

### Styling
- **Global styles first**: Check [global.css](web/src/global.css) before adding new styles
- **Theme-aware colors**: Use CSS custom properties (`--text-color`, `--link-color`, etc.) instead of hardcoded colors
- **Semantic HTML tags**: Custom `<info>` element used for supplementary text styling (e.g., employment dates)

### Page Content
- All pages are static `.astro` files (no dynamic data fetching visible)
- Resume sections follow pattern: `<section class="card">` → `<h2>` title → nested `<div class="section">` → content
- Use semantic heading hierarchy (`<h1>` → `<h2>` → `<h3>`, etc.)

### Navigation
- Page links use hrefs like `/Home`, `/Resume` (not relative paths)
- `isActive()` in Layout.astro checks `Astro.url.pathname.startsWith(href)` for highlighting
- External links use `target="_blank"` and full URLs

## Common Tasks

### Adding a New Page
1. Create `.astro` file in `web/src/pages/`
2. Import and wrap content in `<Layout>`
3. Use `<section class="card">` for card-style containers
4. Navigation auto-updates via Layout.astro nav lists (must manually add link)

### Styling Changes
- Modify [global.css](web/src/global.css) for site-wide changes
- Use `--theme-variable` references for colors (respects theme system)
- Mobile-first: responsive breakpoints visible in global.css

### Theme Addition
1. Add new theme CSS class in [global.css](web/src/global.css) with `[data-theme="new-theme"]` selector
2. Add `<option>` in Layout.astro theme selector dropdown
3. Define all 6 CSS custom properties (bg-primary/secondary/tertiary, text-color, text-secondary, link-color, border-color, active-color)

## Integration & Dependencies

- **@astrojs/netlify** (^6.6.4) – Netlify-specific adapter for static builds
- **astro** (^5.16.11) – Core framework
- No frontend framework (React, Vue, etc.) – pure Astro + static HTML
- No build tooling beyond Astro (no Webpack, Vite config needed)

## Important Notes

- Project is **production-ready and regularly maintained** – updates are frequent
- **No environment variables or secrets** visible in config
- **Static site** – no server-side logic; all content pre-rendered at build time
- Mobile navigation toggle in header; responsive design handled via CSS media queries
