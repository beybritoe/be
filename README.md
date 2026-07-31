# Jack — 3D Creator

A single-page 3D creator portfolio landing page built with React, TypeScript,
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run preview  # serve the production build
```

## Structure

```
src/
  App.tsx                    section order: hero → marquee → about → services → projects
  index.css                  global reset, #0C0C0C base, .hero-heading gradient
  components/
    AnimatedText.tsx         character-by-character scroll-reveal paragraph
    ContactButton.tsx        gradient pill CTA
    FadeIn.tsx               whileInView fade/translate wrapper (motion.create)
    LiveProjectButton.tsx    ghost outline pill
    Magnet.tsx               mouse-following magnetic transform
  sections/
    HeroSection.tsx          navbar, oversized gradient heading, magnetic portrait
    MarqueeSection.tsx       two scroll-driven image rows moving in opposite directions
    AboutSection.tsx         corner 3D decorations + animated bio
    ServicesSection.tsx      white panel with five numbered services
    ProjectsSection.tsx      sticky card stack that scales down on scroll
```

Typography is Kanit (Google Fonts, weights 300–900), loaded from `index.html`.
Fluid sizing uses `clamp()` throughout, on top of Tailwind's default
mobile-first breakpoints.
