"use client";

import { Sparkles } from '@react-three/drei';

export function CyberCore() {
  return (
    <group>
      {/* Floating Particles (Ashes Animation) */}
      <Sparkles count={200} scale={12} size={4} speed={0.4} color="#DC2626" opacity={0.8} />
      <Sparkles count={100} scale={15} size={2} speed={0.2} color="#ffffff" opacity={0.4} />
    </group>
  );
}
