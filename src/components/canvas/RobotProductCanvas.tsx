"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import RobotPlaceholder from "./RobotPlaceholder";

export default function RobotProductCanvas() {
  return (
    <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing pb-[10%]">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }} gl={{ antialias: true }}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* Main Robot Model */}
        <group position={[0, -0.5, 0]}>
          <RobotPlaceholder />
        </group>

        {/* Soft shadow under the robot */}
        <ContactShadows position={[0, -0.6, 0]} opacity={0.4} scale={5} blur={2} far={2} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
