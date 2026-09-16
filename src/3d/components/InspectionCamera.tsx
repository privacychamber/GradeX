import React from 'react';
import { IndustrialMaterials } from '../materials/IndustrialMaterials';

export const InspectionCamera = (props: any) => {
  return (
    <group {...props}>
      {/* Small robotic camera head placeholder */}
      <mesh castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <primitive object={IndustrialMaterials.darkRubber} attach="material" />
      </mesh>
      <mesh position={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
        <primitive object={IndustrialMaterials.glassLens} attach="material" />
      </mesh>
      {/* Camera LED Ring */}
      <pointLight position={[0, 0, 0.2]} intensity={0.5} distance={2} color="#fff" />
    </group>
  );
};
