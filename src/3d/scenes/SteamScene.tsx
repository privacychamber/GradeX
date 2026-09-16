import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PerformanceWrapper } from '../utils/PerformanceWrapper';
import { LightingRig } from './LightingRig';
import { DuctInterior } from '../components/DuctInterior';
import { SteamEffect } from '../components/SteamEffect';

export const SteamScene = () => {
  useFrame((state) => {
    // A very slow, continuous forward drift to give a cinematic feel
    // independent of scroll position
    state.camera.position.z = Math.sin(state.clock.elapsedTime * 0.1) * 2;
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    state.camera.lookAt(0, 0, -5);
  });

  return (
    <PerformanceWrapper>
      <LightingRig />
      
      {/* The environment we are cleaning */}
      <DuctInterior position={[0, 0, 0]} />
      
      {/* The technical steam purging through the duct */}
      <SteamEffect position={[0, 0, -2]} />
      
      {/* Heavy fog to obscure the far end and blend the steam */}
      <fog attach="fog" args={['#0A0D14', 1, 8]} />
    </PerformanceWrapper>
  );
};
