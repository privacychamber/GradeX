import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

interface MeasurementProps {
  position: [number, number, number];
  value: string;
  label: string;
}

/**
 * MeasurementIndicator
 * Projects 3D space measurements into 2D DOM elements (HUD).
 */
export const MeasurementIndicator = ({ position, value, label }: MeasurementProps) => {
  const lineRef = useRef<any>(null);

  useFrame((state) => {
    if (lineRef.current) {
      // Animate line scale or opacity if needed
      lineRef.current.material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* 3D Line/Marker */}
      <mesh ref={lineRef}>
        <cylinderGeometry args={[0.01, 0.01, 0.5]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.8} />
      </mesh>

      {/* HTML Overlay */}
      <Html position={[0.1, 0.3, 0]} center className="pointer-events-none">
        <div className="flex flex-col items-start px-2 py-1 bg-black/80 border border-[#00e5ff]/50 rounded-sm font-mono whitespace-nowrap">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">{label}</span>
          <span className="text-sm font-bold text-[#00e5ff]">{value}</span>
        </div>
      </Html>
    </group>
  );
};
