"use client";

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { Vector2 } from 'three';

function InnerCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
       // Spin fast in opposite direction
       meshRef.current.rotation.x -= 0.01;
       meshRef.current.rotation.y += 0.02;
       meshRef.current.rotation.z -= 0.015;
    }
  });

  return (
    <mesh ref={meshRef} scale={0.4}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial 
        color="#ffffff" 
        emissive="#ffffff" 
        emissiveIntensity={2} 
        wireframe={true} 
        transparent 
        opacity={0.8}
      />
    </mesh>
  );
}

function DataRings() {
  const ringsRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (ringsRef.current) {
      const scrollY = window.scrollY;
      const speedMultiplier = 1 + (scrollY * 0.005);
      
      // Opposite rotation for rings to create a complex orbital mechanic look
      ringsRef.current.children.forEach((ring, index) => {
         ring.rotation.z += delta * (index % 2 === 0 ? 0.5 : -0.5) * speedMultiplier;
         ring.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2;
         ring.rotation.y = Math.cos(state.clock.elapsedTime * 0.5 + index) * 0.2;
      });
      
      // Scale out based on scroll
      const scale = 1 + scrollY * 0.002;
      ringsRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });
  
  return (
    <group ref={ringsRef}>
      {[2.5, 3.2, 4.0].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.01, 64, 100]} />
          <meshStandardMaterial 
             color="#DC2626" 
             emissive="#DC2626" 
             emissiveIntensity={2.0 - (i * 0.4)} 
             transparent 
             opacity={0.6 - (i * 0.15)} 
             blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function Core() {
  const wireframeRef = useRef<THREE.Mesh>(null);
  const solidRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    const scrollY = window.scrollY;
    const time = state.clock.elapsedTime;
    
    if (wireframeRef.current && solidRef.current) {
      // Base rotation + Scroll rotation
      wireframeRef.current.rotation.x = time * 0.2 + scrollY * 0.001;
      wireframeRef.current.rotation.y = time * 0.3 + scrollY * 0.0015;
      
      solidRef.current.rotation.x = -time * 0.1 - scrollY * 0.0005;
      solidRef.current.rotation.y = -time * 0.2 - scrollY * 0.001;

      // Scroll-driven Exploding / Separation Effect
      const separationX = THREE.MathUtils.lerp(0, 3, Math.min(scrollY / 1500, 1));
      const separationY = THREE.MathUtils.lerp(0, 2, Math.min(scrollY / 1500, 1));
      const separationZ = THREE.MathUtils.lerp(0, 5, Math.min(scrollY / 1500, 1));
      
      wireframeRef.current.position.set(
        THREE.MathUtils.lerp(wireframeRef.current.position.x, separationX, 0.1),
        THREE.MathUtils.lerp(wireframeRef.current.position.y, separationY, 0.1),
        THREE.MathUtils.lerp(wireframeRef.current.position.z, separationZ, 0.1)
      );
      
      solidRef.current.position.set(
        THREE.MathUtils.lerp(solidRef.current.position.x, -separationX, 0.1),
        THREE.MathUtils.lerp(solidRef.current.position.y, -separationY, 0.1),
        THREE.MathUtils.lerp(solidRef.current.position.z, -separationZ * 0.5, 0.1)
      );

      // Heartbeat pulse effect
      const pulse = 1 + Math.sin(time * 3) * 0.05 + Math.sin(time * 4.5) * 0.02;
      const baseScale = THREE.MathUtils.lerp(1, 1.8, Math.min(scrollY / 2000, 1));
      wireframeRef.current.scale.setScalar(baseScale * pulse);
      solidRef.current.scale.setScalar(baseScale * 0.9);
    }
    
    if (materialRef.current) {
      // Core gets extremely bright / energized on scroll
      materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        0.5, 
        4.0, 
        Math.min(scrollY / 1500, 1)
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <DataRings />
        
        <mesh ref={wireframeRef} position={[0, 0, 0]}>
            <octahedronGeometry args={[2, 0]} />
            <meshStandardMaterial 
                ref={materialRef}
                color="#000000" 
                roughness={0.1}
                metalness={1}
                envMapIntensity={2}
                wireframe={true}
                emissive="#DC2626"
                emissiveIntensity={0.5}
            />
            <InnerCore />
        </mesh>
        
        <mesh ref={solidRef} position={[0, 0, 0]}>
            <octahedronGeometry args={[2, 0]} />
            <meshStandardMaterial 
                color="#050505" 
                roughness={0.6}
                metalness={0.8}
            />
        </mesh>
    </Float>
  );
}

function Particles() {
    const particlesCount = 1200;
    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount; i++) {
            // Create a cylindrical/spherical field covering wider area
            const r = 3 + Math.random() * 30;
            const theta = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 50;
            positions[i * 3] = r * Math.cos(theta);
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = r * Math.sin(theta) - 15;
        }
        return positions;
    }, [particlesCount]);

    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            const scrollY = window.scrollY;
            
            // Warp speed effect on scroll
            const speedMultiplier = 1 + (scrollY * 0.015);
            
            pointsRef.current.rotation.y += delta * 0.08 * speedMultiplier;
            pointsRef.current.rotation.z = THREE.MathUtils.lerp(
              pointsRef.current.rotation.z,
              scrollY * 0.0005,
              0.1
            );
            
            // Pull particles aggressively towards the viewer
            pointsRef.current.position.z = THREE.MathUtils.lerp(
              pointsRef.current.position.z,
              scrollY * 0.015,
              0.1
            );
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.06} color="#DC2626" transparent opacity={0.8} sizeAttenuation={true} blending={THREE.AdditiveBlending} />
        </points>
    );
}

function SceneControls() {
  const { camera, pointer } = useThree();
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  
  useFrame(() => {
    const scrollY = window.scrollY;
    
    // Smoothly track mouse for cinematic parallax
    mouseRef.current.lerp(pointer, 0.05);
    
    // Calculate target positions based on both Scroll and Mouse
    const targetY = -scrollY * 0.002 + (mouseRef.current.y * 1.5);
    const targetX = (mouseRef.current.x * 1.5);
    
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.1);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.1);
    
    // Subtle tilt to "look at" the center based on mouse
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, scrollY * 0.0002 + (mouseRef.current.y * 0.1), 0.1);
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, -mouseRef.current.x * 0.1, 0.1);
  });
  
  return null;
}

function Scene() {
  return (
    <>
      <SceneControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#DC2626" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#262626" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
      
      <Core />
      <Particles />

      <Environment preset="city" />
      
      <EffectComposer disableNormalPass multisampling={0}>
        <Bloom 
          luminanceThreshold={0.15} 
          luminanceSmoothing={0.9} 
          height={300}
          intensity={2.5}
          kernelSize={3}
        />
        <Noise opacity={0.04} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <ChromaticAberration 
           blendFunction={BlendFunction.NORMAL} 
           offset={new Vector2(0.005, 0.005)} 
           radialModulation={true} 
           modulationOffset={0.6} 
        />
      </EffectComposer>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ antialias: false, preserveDrawingBuffer: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
