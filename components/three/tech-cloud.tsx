"use client";

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Text, Float, MeshDistortMaterial, Environment } from '@react-three/drei';

function TechNode({ name, position, index }: { name: string, position: [number, number, number], index: number }) {
    const meshRef = useRef<THREE.Group>(null);
    const textRef = useRef<any>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.getElapsedTime();
            // Subtle individual floating
            meshRef.current.position.y += Math.sin(time + index) * 0.005;
            meshRef.current.rotation.y = Math.sin(time * 0.5 + index) * 0.1;
            
            // Look slightly towards camera
            meshRef.current.lookAt(0, 0, 10);
        }
    });

    return (
        <group ref={meshRef} position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Text
                    ref={textRef}
                    fontSize={0.4}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.01}
                    outlineColor="#DC2626"
                >
                    {name}
                </Text>
                
                {/* Subtle glass backing */}
                <mesh position={[0, 0, -0.1]}>
                    <planeGeometry args={[2.5, 0.8]} />
                    <meshStandardMaterial 
                        color="#111" 
                        transparent 
                        opacity={0.3} 
                        roughness={0} 
                        metalness={1}
                    />
                </mesh>
            </Float>
        </group>
    );
}

function Connections({ count }: { count: number }) {
    const lines = useMemo(() => {
        const points = [];
        for (let i = 0; i < count; i++) {
            points.push(new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
            ));
        }
        return points;
    }, [count]);

    return (
        <group>
            {/* Logic for dynamic lines between nodes could go here */}
        </group>
    );
}

const technologies = [
    "React", "Next.js", "Three.js", "WebGL", "GSAP", 
    "PostgreSQL", "Redis", "Docker", "AWS", "TensorFlow",
    "NestJS", "Spring Boot", "Rust", "Golang", "Kubernetes"
];

export function TechCloud() {

    const nodes = useMemo(() => {
        return technologies.map((name, i) => {
            const phi = Math.acos(-1 + (2 * i) / technologies.length);
            const theta = Math.sqrt(technologies.length * Math.PI) * phi;
            const radius = 6;

            return {
                name,
                position: [
                    radius * Math.cos(theta) * Math.sin(phi),
                    radius * Math.sin(theta) * Math.sin(phi),
                    radius * Math.cos(phi)
                ] as [number, number, number]
            };
        });
    }, []);

    const groupRef = useRef<THREE.Group>(null);
    const { pointer } = useThree();

    useFrame((state) => {
        if (groupRef.current) {
            // Mouse parallax for the entire cloud
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.5, 0.05);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.5, 0.05);
            
            // Continuous slow rotation
            groupRef.current.rotation.y += 0.001;
        }
    });

    return (
        <group ref={groupRef}>
            {nodes.map((node, i) => (
                <TechNode key={i} {...node} index={i} />
            ))}
            
            {/* Central Energy Core */}
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshDistortMaterial 
                    color="#DC2626" 
                    speed={3} 
                    distort={0.6} 
                    radius={1}
                    emissive="#DC2626"
                    emissiveIntensity={2}
                />
            </mesh>

            <Environment preset="city" />
        </group>
    );
}
