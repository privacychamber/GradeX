/**
 * Asset Registry
 * 
 * Centralised configuration for all external 3D models and Lottie animations.
 * Swap these URLs when final Grade X production assets are supplied.
 */

export const ASSETS = {
  // 3D Models (GLB/GLTF)
  models: {
    heroRobot: "/models/robot-placeholder.glb",
    technologyRobot: "/models/robot-placeholder.glb",
  },
  
  // Lottie Micro-Animations
  lottie: {
    scanLine: "https://lottie.host/8b5dc431-7b00-4786-905c-e58f0007e94e/sSOTV6o9yD.json", // Example thin scan line
    verification: "https://lottie.host/74704381-e28a-4db5-9e63-4bbf5204439c/Fw5j43tG9t.json" // Example verification check
  },

  // Imagery Fallbacks (if 3D fails to load)
  images: {
    heroIndustrial: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
  }
};
