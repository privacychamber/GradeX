/**
 * AssetRegistry.ts
 * 
 * Central registry for all 3D assets to ensure they are easily swappable
 * when final client assets are provided. Handles lazy loading paths.
 */

export const ASSET_PATHS = {
  // Replace these with actual GLB paths once client provides them
  models: {
    robot: '/models/placeholder/robot.glb',
    exhaustCanopy: '/models/placeholder/canopy.glb',
    ductStraight: '/models/placeholder/duct.glb',
    ductInterior: '/models/placeholder/duct-interior.glb',
    cameraModule: '/models/placeholder/camera.glb'
  },
  textures: {
    greaseMap: '/textures/grease_bump.jpg',
    metalRoughness: '/textures/metal_roughness.jpg',
    brushedNormal: '/textures/brushed_normal.jpg'
  }
};

export const PRELOAD_ASSETS = () => {
  // Utility function that can be called to preload critical models
  // using useGLTF.preload(ASSET_PATHS.models.robot)
};
