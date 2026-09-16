# Phase 00: Asset Plan Document

## Current Assets
* `public/models/robot-placeholder.glb`
* External Lottie animations (referenced via URL).
* External Unsplash images (referenced via URL).
* Basic Next.js/Vercel SVGs.

## Strategy for New Assets
1. **Local First**: All assets MUST be hosted locally. External URLs for images, videos, or Lottie JSONs are prohibited.
2. **3D Assets**: Move any valid 3D models (like the robot) into the new Vite `public/` directory. Optimize for web delivery.
3. **Images/Videos**: Source high-quality, industrial-themed images (or real Grade X provided imagery) and place them in the local `public/assets/` directory.
4. **Animations**: Transition away from Lottie if it relies on CDNs. Rely primarily on GSAP for DOM/SVG manipulation and Three.js for 3D interactions.
