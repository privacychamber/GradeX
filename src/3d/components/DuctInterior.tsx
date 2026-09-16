import React from 'react';
import { IndustrialMaterials } from '../materials/IndustrialMaterials';
import * as THREE from 'three';

export const DuctInterior = (props: any) => {
  return (
    <group {...props}>
      {/* Placeholder primitive for inside the duct with grease buildup */}
      <mesh receiveShadow>
        {/* Render inside out for interior view */}
        <cylinderGeometry args={[0.95, 0.95, 10, 32]} />
        <primitive object={IndustrialMaterials.greaseBuildup} attach="material" side={THREE.BackSide} />
      </mesh>
    </group>
  );
};
