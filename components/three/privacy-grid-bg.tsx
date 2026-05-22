"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Environment, Sparkles } from '@react-three/drei';

function DataPackets() {
  const count = 20;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10;
      const speed = 0.05 + Math.random() * 0.1;
      temp.push({ x, y, z, speed });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      p.y -= p.speed;
      if (p.y < -10) p.y = 10;
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.set(0.05, 0.2, 0.05);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry />
      <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={2} />
    </instancedMesh>
  );
}

export function PrivacyGridBG() {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 10]} intensity={1} color="#DC2626" />
      
      {/* Background Plane Grid */}
      <mesh rotation={[-Math.PI / 4, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[50, 50, 50, 50]} />
        <meshStandardMaterial color="#111" wireframe transparent opacity={0.2} emissive="#DC2626" emissiveIntensity={0.1} />
      </mesh>

      <DataPackets />
      <Sparkles count={100} scale={20} size={1} speed={0.5} color="#ffffff" opacity={0.3} />
      <Environment preset="night" />
    </group>
  );
}
