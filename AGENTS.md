# AGENTS.md

## Dev Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to GitHub Pages

## Critical Config

**vite.config.ts:6** - `base: '/Portfolio/'` is REQUIRED for GitHub Pages. Without this, assets fail to load on the deployed site. Do not change this unless deploying elsewhere.

## Project Structure

- Entry: `src/main.tsx` / `src/App.tsx`
- Styles: `src/index.css` (includes Tailwind)
- Icons: Uses `lucide-react`
- Deployed to: `https://JVP555.github.io/Portfolio`