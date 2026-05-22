"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Environment, Sphere, MeshDistortMaterial } from '@react-three/drei';

function Synapse({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y += Math.sin(time + position[0]) * 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color="#DC2626" 
          emissive="#DC2626" 
          emissiveIntensity={2} 
        />
      </mesh>
    </Float>
  );
}

export function ManifestoNeural() {
  const synapses = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number]
    }));
  }, []);

  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#DC2626" />
      
      {/* Central Core */}
      <Sphere args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#111"
          speed={4}
          distort={0.4}
          radius={1}
          emissive="#DC2626"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {synapses.map((s, i) => (
        <Synapse key={i} {...s} />
      ))}

      <Environment preset="night" />
    </group>
  );
}
