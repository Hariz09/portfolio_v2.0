'use client'
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader, ThreeElements } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Earth Component
type MeshProps = ThreeElements['mesh'];

function RotatingEarth(props: MeshProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, '/world.jpg');

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15; // Slightly slower rotation
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default function EarthCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <RotatingEarth />
      </Suspense>
      
      <OrbitControls 
        autoRotate 
        enableZoom={false}
        enablePan={false}
        autoRotateSpeed={0.5} // Slower auto rotation
        enableDamping={true}
        dampingFactor={0.05}
      />
    </Canvas>
  );
}