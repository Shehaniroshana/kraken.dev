"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshDistortMaterial, Float, Environment, Sparkles } from '@react-three/drei';

export function CyberCore() {
  const innerCore = useRef<THREE.Mesh>(null);
  const outerRing1 = useRef<THREE.Mesh>(null);
  const outerRing2 = useRef<THREE.Mesh>(null);
  const outerRing3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (innerCore.current) {
      innerCore.current.rotation.y = time * 0.2;
      innerCore.current.rotation.z = time * 0.1;
    }
    
    if (outerRing1.current) {
      outerRing1.current.rotation.x = time * 0.3;
      outerRing1.current.rotation.y = time * 0.1;
    }
    
    if (outerRing2.current) {
      outerRing2.current.rotation.y = time * 0.2;
      outerRing2.current.rotation.z = time * 0.4;
    }

    if (outerRing3.current) {
      outerRing3.current.rotation.x = time * -0.15;
      outerRing3.current.rotation.y = time * 0.3;
      outerRing3.current.rotation.z = Math.sin(time * 0.5) * 0.5;
    }
  });

  return (
    <group>
      {/* Ambient and directional lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={10} color="#DC2626" distance={50} />
      <pointLight position={[0, 0, 0]} intensity={5} color="#DC2626" distance={20} />

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        {/* Inner Quantum Core */}
        <mesh ref={innerCore}>
          <octahedronGeometry args={[1.5, 0]} />
          <MeshDistortMaterial 
            color="#0a0a0a"
            emissive="#DC2626"
            emissiveIntensity={0.8}
            metalness={1}
            roughness={0.1}
            distort={0.3}
            speed={2}
          />
        </mesh>

        {/* Cyber Rings */}
        <mesh ref={outerRing1} scale={[2.5, 2.5, 2.5]}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} emissive="#DC2626" emissiveIntensity={0.2} />
        </mesh>

        <mesh ref={outerRing2} scale={[3, 3, 3]}>
          <torusGeometry args={[1, 0.01, 16, 100]} />
          <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.2} />
        </mesh>
        
        <mesh ref={outerRing3} scale={[3.5, 3.5, 3.5]}>
          <torusGeometry args={[1, 0.03, 3, 100]} />
          <meshStandardMaterial color="#000000" metalness={1} roughness={0.4} emissive="#ff0000" emissiveIntensity={0.5} wireframe={true} />
        </mesh>
      </Float>

      {/* Floating Particles */}
      <Sparkles count={200} scale={12} size={4} speed={0.4} color="#DC2626" opacity={0.8} />
      <Sparkles count={100} scale={15} size={2} speed={0.2} color="#ffffff" opacity={0.4} />
      
      {/* Environment for reflections */}
      <Environment preset="city" />
    </group>
  );
}
