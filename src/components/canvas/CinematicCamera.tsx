"use client";

import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CinematicCamera() {
  const scroll = useScroll();
  const { camera } = useThree();
  const cameraGroup = useRef<THREE.Group>(null);
  
  // Create a spline curve for the camera to follow
  // Starts just outside the duct, goes in, sweeps around to the robot, then exits to the dashboard
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 5),     // Page 0: Hero outside
    new THREE.Vector3(0, 0, -5),    // Page 1: Entering Duct
    new THREE.Vector3(0, -1, -15),  // Page 2: Approaching Grease
    new THREE.Vector3(3, -1, -30),  // Page 3: Seeing Robot
    new THREE.Vector3(0, 4, -40),   // Page 4: Above Robot
    new THREE.Vector3(-10, 0, -60), // Page 5: Exiting to Evidence/Report
    new THREE.Vector3(-10, 0, -80), // Page 6: Services
    new THREE.Vector3(-10, 0, -100) // End of scroll
  ]);

  useFrame((state, delta) => {
    if (!cameraGroup.current) return;
    
    // scroll.offset goes from 0 to 1 over the entire scroll height
    const t = scroll.offset;
    
    // Get position on curve
    const position = curve.getPointAt(t);
    
    // Lerp camera position to smooth it out (adds inertia/damping)
    cameraGroup.current.position.lerp(position, 4 * delta);
    
    // Get tangent to look forward along the path
    const tangent = curve.getTangentAt(t);
    const lookAtPosition = position.clone().add(tangent);
    
    // Subtle mouse parallax added to the lookAt
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    
    // Create a target quaternion
    const dummy = new THREE.Object3D();
    dummy.position.copy(cameraGroup.current.position);
    dummy.lookAt(lookAtPosition.x + targetX, lookAtPosition.y + targetY, lookAtPosition.z);
    
    // Slerp rotation
    cameraGroup.current.quaternion.slerp(dummy.quaternion, 4 * delta);
  });

  return (
    <group ref={cameraGroup}>
      <primitive object={camera} />
    </group>
  );
}
