"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Environment, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';

function ScanningBeams() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} rotation={[0, (i * Math.PI) / 3, 0]}>
          <boxGeometry args={[0.02, 20, 0.02]} />
          <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={5} transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export function SecurityCore() {
  const coreRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      coreRef.current.rotation.z = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#DC2626" />
      
      <ScanningBeams />

      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <group ref={coreRef}>
          {/* Inner Shield */}
          <mesh>
            <octahedronGeometry args={[2, 0]} />
            <meshStandardMaterial color="#111" metalness={1} roughness={0} emissive="#DC2626" emissiveIntensity={0.2} />
          </mesh>

          {/* Outer Protection Layer */}
          <mesh scale={1.2}>
            <dodecahedronGeometry args={[2, 0]} />
            <meshStandardMaterial 
                color="#ffffff" 
                wireframe 
                transparent 
                opacity={0.1} 
                emissive="#DC2626" 
                emissiveIntensity={0.5} 
            />
          </mesh>

          {/* Energy Distortion */}
          <mesh scale={0.8}>
            <sphereGeometry args={[2, 64, 64]} />
            <MeshWobbleMaterial factor={0.5} speed={2} color="#DC2626" emissive="#DC2626" emissiveIntensity={1} transparent opacity={0.2} />
          </mesh>
        </group>
      </Float>

      <Environment preset="night" />
    </group>
  );
}
