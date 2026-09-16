import React, { Suspense } from 'react';
import { Bvh, Preload } from '@react-three/drei';

interface PerformanceWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * PerformanceWrapper
 * 
 * Wraps Three.js scenes to ensure optimal performance.
 * Incorporates BVH for raycasting speed, Preload for assets,
 * and Suspense for lazy loading.
 * 
 * Note: AdaptiveDpr or intersection observers can be added here
 * to pause rendering when out of view.
 */
export const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({ children, fallback = null }) => {
  return (
    <Suspense fallback={fallback}>
      <Bvh firstHitOnly>
        {children}
      </Bvh>
      <Preload all />
    </Suspense>
  );
};
