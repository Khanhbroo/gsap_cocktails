# 🍸 Mojito — 3D Interactive Beverage Showcase & GSAP Scroll Choreography

<div align="center">

![Mojito Banner](https://img.shields.io/badge/Mojito-GSAP_ScrollTrigger_Showcase-88CE02?style=for-the-badge&logo=greensock&logoColor=black)

**A high-craft interactive beverage experience demonstrating multi-layer parallax scroll choreography, fluid typography, and timeline animations built with React, TypeScript, and GSAP.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel_Deployment-10b981?style=flat-square&logo=vercel)](https://gsap-cocktails-five-gamma.vercel.app/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger_&_Timeline-88CE02?style=flat-square&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![React](https://img.shields.io/badge/React-19_/_TypeScript-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Lightning_Fast_HMR-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4_Alpha-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![60 FPS](https://img.shields.io/badge/Performance-60_FPS_Guaranteed-brightgreen?style=flat-square)](https://web.dev/rendering-performance/)

</div>

---

## 📖 Overview

**Mojito** is a flagship creative frontend project built to explore the boundaries of web storytelling and browser motion design. Moving far beyond static e-commerce product grids, it crafts an immersive, sensorial journey through artisan cocktails using scroll-driven timeline animations, depth-layered parallax, and fluid interactive transitions.

Powered by the **GreenSock Animation Platform (GSAP)**, `@gsap/react`, and **ScrollTrigger**, the project translates user scroll velocity into physics-based leaf deflections, floating ice rotations, and multi-perspective product morphs while preserving strict 60 FPS rendering performance.

---

## 🎨 Motion Architecture & Timeline Choreography

```mermaid
flowchart TD
    Scroll["User Scroll Event / Wheel Action"] -->|"ScrollTrigger Proxy"| ST["GSAP ScrollTrigger Engine"]
    
    subgraph Timeline Choreography
        direction TB
        L1["Layer 1: Background & Editorial Title Parallax"]
        L2["Layer 2: Floating Mint Leaves (Dynamic Vector Deflection)"]
        L3["Layer 3: Hero Cocktail Cup (3D Rotation & Scale)"]
        L4["Layer 4: Recipe & Flavor Card Stagger Reveal"]
    end
    
    ST --> TimelineChoreography
    TimelineChoreography -->|"requestAnimationFrame Batch"| GPU["GPU Accelerated DOM Paint (transform: translate3d)"]
```

- **GPU Compositing**: All animations operate strictly on `transform` (`translate3d`, `rotateZ`, `scale`) and `opacity` properties, completely bypassing browser layout recalculations and repaints.
- **ScrollTrigger Pinning & Scrubbing**: Sections pin dynamically during inspection phases, allowing users to control drink assembly scrubbing backwards and forwards with absolute precision.
- **Responsive Layout Adaptation**: Utilizes `react-responsive` to dynamically recalculate coordinate offsets and timeline durations across mobile, tablet, and ultra-wide desktop viewports.
- **Bespoke Display Typography**: Integrated custom font loading (`Modern Negra`) to deliver an editorial luxury magazine aesthetic.

---

## ✨ Key Features

- 🌿 **Multi-Layer Depth Parallax**: Foreground mint leaves, background citrus slices, and central beverage cups translate at staggered velocity rates to create organic 3D depth.
- 🍹 **Interactive Drink Carousel**: Switch between signature cocktail profiles with synchronized background atmosphere shifts and recipe breakdown transitions.
- ⚡ **Zero-Jank 60 FPS Performance**: Optimized asset decoding and memory management ensuring buttery-smooth execution on both high-refresh desktop monitors and mobile devices.
- 📱 **Mobile Touch Optimization**: Smooth touch gesture handling with inertia scroll smoothing.

---

## 📂 Project Structure

```text
├── public/
│   ├── fonts/
│   │   └── Modern Negra Demo.ttf # Custom editorial display font
│   └── images/
│       ├── cup-2.png             # Transparent cut-out cocktail glass
│       ├── cocktail-left-leaf.png# Parallax leaf layer
│       ├── cocktail-right-leaf.png
│       ├── drink1.png            # Citrus Mojito variant
│       ├── drink2.png            # Berry Fusion variant
│       └── drink3.png            # Tropical Mint variant
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Entrance animation & headline reveal
│   │   ├── CocktailScroll.tsx    # ScrollTrigger pinned animation canvas
│   │   ├── DrinkMenu.tsx         # Interactive beverage selector
│   │   └── StorySection.tsx      # Artisan story & craftsmanship cards
│   ├── hooks/
│   │   └── useGsapTimeline.ts    # Reusable timeline cleanup & trigger hook
│   ├── index.css                 # Custom font-face declarations & utilities
│   ├── App.tsx                   # Main layout container
│   └── main.tsx                  # React DOM root
├── tailwind.config.ts
└── package.json
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Khanhbroo/gsap_cocktails.git
   cd gsap_cocktails
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to experience the interactive motion design.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author

**Nguyen Quoc Khanh (KhanhBro)**  
- GitHub: [@Khanhbroo](https://github.com/Khanhbroo)  
- Email: [khanhmathias532211@gmail.com](mailto:khanhmathias532211@gmail.com)
