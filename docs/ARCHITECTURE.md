# Phase 00: Architecture Document

## Current State
* **Framework**: Next.js 14+ (App Router).
* **Styling**: Tailwind CSS, `src/app/globals.css`.
* **3D/WebGL**: `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`.
* **Animations**: GSAP, Framer Motion, Lottie.
* **Components**: 12 components in `src/components/`.
* **Assets**: Stored in `public/` and referenced in `src/config/assets.ts`.

## Target Architecture (Phase 01+)
* **Framework**: React + Vite + TypeScript (No Next.js, no SSR needed).
* **Styling**: Vanilla CSS (No generic Tailwind).
* **3D/WebGL**: Three.js (raw or R3F, depending on constraints, but fully local).
* **Animations**: GSAP & GSAP ScrollTrigger.
* **Bundling**: All npm dependencies bundled into the production build.
* **Assets**: Fully locally hosted images, videos, and 3D models. No CDNs.
* **Hosting**: Static build for deployment.

## Reset Plan
1. Delete Next.js specific files (`next.config.ts`, `src/app`, `.next`, `.vercel`).
2. Wipe existing components and hooks.
3. Install Vite and initialize standard React + Vite template.
4. Move verified Grade X business logic (text, copy, service lists) into a new content manifest.
5. Wipe existing CSS and start from a clean `index.css`.
