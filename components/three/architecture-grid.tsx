"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Environment, Sparkles } from '@react-three/drei';

function BoxGrid() {
  const count = 40;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xAngle = Math.random() * Math.PI;
      const yAngle = Math.random() * Math.PI;
      const zAngle = Math.random() * Math.PI;
      temp.push({ t, factor, speed, xAngle, yAngle, zAngle });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    particles.forEach((particle, i) => {
      let { t, factor, speed, xAngle, yAngle, zAngle } = particle;
      t = particle.t = t + speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.xAngle + Math.cos(t / 10) * factor) / 10,
        (particle.yAngle + Math.sin(t / 10) * factor) / 10,
        (particle.zAngle + Math.cos(t / 10) * factor) / 10
      );
      
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial 
        color="#ffffff" 
        wireframe 
        transparent 
        opacity={0.1} 
        emissive="#DC2626"
        emissiveIntensity={0.5}
      />
    </instancedMesh>
  );
}

export function ArchitectureGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={gridRef}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#DC2626" />
      
      <BoxGrid />
      
      {/* Structural lines */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <gridHelper args={[40, 40, "#DC2626", "#111111"]} />
      </mesh>

      <Sparkles count={50} scale={20} size={2} speed={0.2} color="#DC2626" />
      <Environment preset="night" />
    </group>
  );
}
