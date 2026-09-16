import * as THREE from 'three';

/**
 * IndustrialMaterials
 * 
 * Reusable PBR materials for the Grade X industrial environment.
 * Ensures visual consistency.
 */
export const IndustrialMaterials = {
  stainlessSteel: new THREE.MeshStandardMaterial({
    color: 0xcccccc,
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 1.0,
  }),
  
  brushedMetal: new THREE.MeshStandardMaterial({
    color: 0xa0a0a0,
    metalness: 0.9,
    roughness: 0.5,
    envMapIntensity: 0.8,
  }),

  darkRubber: new THREE.MeshStandardMaterial({
    color: 0x111111,
    metalness: 0.1,
    roughness: 0.9,
  }),

  greaseBuildup: new THREE.MeshStandardMaterial({
    color: 0x2a1e12,
    metalness: 0.1,
    roughness: 0.9,
    bumpScale: 0.05,
  }),

  cleanMetal: new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 1.0,
    roughness: 0.1,
    envMapIntensity: 1.5,
  }),

  glassLens: new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.9,
    thickness: 0.1,
  }),
};
