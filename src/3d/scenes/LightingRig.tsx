import React from 'react';
import { Environment } from '@react-three/drei';

/**
 * LightingRig
 * Establishes the high-contrast, dark industrial look.
 * Combines a subtle environment map with harsh spot lighting.
 */
export const LightingRig = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      
      {/* Primary key light (cool/industrial) */}
      <spotLight 
        position={[5, 5, 5]} 
        angle={0.4} 
        penumbra={0.5} 
        intensity={2} 
        castShadow 
        color="#e0f0ff"
        shadow-mapSize={[1024, 1024]}
      />

      {/* Secondary accent light (brand cyan/blue) */}
      <pointLight 
        position={[-5, 2, -2]} 
        intensity={1} 
        color="#00e5ff" 
        distance={10} 
      />

      {/* Optional environment map for PBR metal reflections */}
      <Environment preset="city" environmentIntensity={0.2} />
    </>
  );
};
