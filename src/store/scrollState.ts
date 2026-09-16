/**
 * scrollState.ts
 * 
 * A simple mutable object to hold scroll progress from GSAP.
 * We use this instead of React state to avoid re-rendering the entire 
 * DOM tree 60 times a second. The Three.js useFrame loop reads this directly.
 */

export const scrollState = {
  progress: 0,
  techProgress: 0,
};
