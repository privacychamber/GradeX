import React from 'react';
import { IndustrialMaterials } from '../materials/IndustrialMaterials';
// import { useGLTF } from '@react-three/drei';
// import { ASSET_PATHS } from '../AssetRegistry';

export const ExhaustCanopy = (props: any) => {
  // const { scene } = useGLTF(ASSET_PATHS.models.exhaustCanopy);

  return (
    <group {...props}>
      {/* Placeholder primitive for the commercial canopy */}
      <mesh castShadow receiveShadow position={[0, 2, 0]}>
        <boxGeometry args={[4, 1, 3]} />
        <primitive object={IndustrialMaterials.brushedMetal} attach="material" />
      </mesh>
    </group>
  );
};
