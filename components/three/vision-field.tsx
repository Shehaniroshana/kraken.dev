"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sparkles, Float, Environment } from '@react-three/drei';

function DataStream({ position, color, speed, length }: { position: [number, number, number], color: string, speed: number, length: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y -= speed;
            if (meshRef.current.position.y < -20) {
                meshRef.current.position.y = 20;
            }
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <capsuleGeometry args={[0.02, length, 4, 8]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} transparent opacity={0.6} />
        </mesh>
    );
}

export function VisionField() {
    const streams = useMemo(() => {
        return Array.from({ length: 50 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 20 - 10
            ] as [number, number, number],
            color: Math.random() > 0.5 ? "#DC2626" : "#444444",
            speed: 0.05 + Math.random() * 0.1,
            length: 1 + Math.random() * 3
        }));
    }, []);

    const coreRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (coreRef.current) {
            coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
            coreRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
        }
    });

    return (
        <group>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#DC2626" />
            
            <group ref={coreRef}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh>
                        <octahedronGeometry args={[3, 2]} />
                        <meshStandardMaterial 
                            color="#000000" 
                            emissive="#DC2626" 
                            emissiveIntensity={0.5} 
                            wireframe 
                            transparent 
                            opacity={0.3} 
                        />
                    </mesh>
                </Float>
            </group>

            {streams.map((stream, i) => (
                <DataStream key={i} {...stream} />
            ))}

            <Sparkles count={100} scale={20} size={2} speed={0.5} color="#DC2626" opacity={0.5} />
            <Environment preset="night" />
        </group>
    );
}
