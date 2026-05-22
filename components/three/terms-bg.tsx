"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Environment } from '@react-three/drei';

function DocumentPlane({ position, delay }: { position: [number, number, number], delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay;
      meshRef.current.position.y += Math.sin(time) * 0.005;
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[4, 6]} />
      <meshStandardMaterial color="#050505" transparent opacity={0.4} />
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[3.8, 5.8]} />
        <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.05} />
      </mesh>
    </mesh>
  );
}

export function TermsBackground() {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#DC2626" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group rotation={[0, -Math.PI / 6, 0]}>
          <DocumentPlane position={[0, 0, 0]} delay={0} />
          <DocumentPlane position={[2, 1, -2]} delay={1} />
          <DocumentPlane position={[-2, -1, -4]} delay={2} />
        </group>
      </Float>

      {/* Scanning light streak */}
      <mesh position={[0, 0, 5]}>
        <boxGeometry args={[20, 0.05, 0.05]} />
        <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={5} />
      </mesh>

      <Environment preset="night" />
    </group>
  );
}
