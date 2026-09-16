import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraRigProps {
  targetPosition?: THREE.Vector3;
}

/**
 * CameraRig
 * Smoothly interpolates camera position and rotation towards a target.
 * Represents "Precision in Motion".
 */
export const CameraRig = ({ targetPosition = new THREE.Vector3(0, 0, 5) }: CameraRigProps) => {
  useFrame((state) => {
    // Smoothly ease the camera position
    state.camera.position.lerp(targetPosition, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};
