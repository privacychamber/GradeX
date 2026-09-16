import React from 'react';
import { IndustrialMaterials } from '../materials/IndustrialMaterials';
import * as THREE from 'three';

export const Duct = (props: any) => {
  return (
    <group {...props}>
      {/* Placeholder primitive for external ductwork */}
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[1, 1, 5, 32]} />
        <primitive object={IndustrialMaterials.stainlessSteel} attach="material" />
      </mesh>
    </group>
  );
};
