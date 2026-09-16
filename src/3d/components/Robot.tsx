import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { ASSET_PATHS } from '../AssetRegistry';
// import { useGLTF } from '@react-three/drei';

/**
 * Robot Component
 * Placeholder logic for the Grade X inspection/cleaning robot.
 * Designed to load actual GLB models when available.
 */
export const Robot = (props: any) => {
  const group = useRef<THREE.Group>(null);
  
  // NOTE: Uncomment when actual GLB exists
  // const { scene } = useGLTF(ASSET_PATHS.models.robot);

  // Subtle floating/idle animation
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group ref={group} {...props}>
      {/* Fallback primitive structure until GLB is loaded */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 0.5, 1]} />
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Front camera lens indicator */}
      <mesh position={[0, 0, 0.51]} castShadow>
        <circleGeometry args={[0.15, 32]} />
        <meshBasicMaterial color="#0ff" />
      </mesh>
    </group>
  );
};

// useGLTF.preload(ASSET_PATHS.models.robot);
