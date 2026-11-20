# GSAP Cocktails Showcase

An interactive landing page showcasing scroll-triggered animations and micro-interactions built with **React 19**, **TypeScript**, **Vite**, **GSAP**, and **Tailwind CSS v4**.

**Live Demo:** [https://gsap-cocktails-five-gamma.vercel.app/](https://gsap-cocktails-five-gamma.vercel.app/)

---

## Tech Stack

- **Core:** React 19, TypeScript, Vite 7
- **Animations:** GSAP (`gsap`, `@gsap/react`)
- **Styling & Responsiveness:** Tailwind CSS v4, `react-responsive`

---

## Project Structure

```text
gsap_cocktails/
├── src/
│   ├── components/        # Hero, Navbar, About, Art, Cocktails, Menu, Contact
│   ├── constants/         # Cocktail menu & showcase data
│   ├── App.tsx            # Root layout & section composition
│   ├── index.css          # Tailwind CSS v4 entry
│   └── main.tsx           # Client entry point
├── public/                # Visual assets
└── vite.config.ts
```

---

## Local Development

```bash
npm install
npm run dev
```

Available scripts:

- `npm run dev` — Start Vite development server
- `npm run lint` — Run ESLint checks
- `npm run build` — Type-check and build for production
