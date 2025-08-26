
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function WobblyKnot() {
  const ref = useRef();
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.6, 0.3, 1.0),
    metalness: 0.3,
    roughness: 0.2,
  }), []);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.25;
      ref.current.rotation.y = t * 0.35;
      const hue = (0.7 + Math.sin(t * 0.2) * 0.2) % 1;
      material.color.setHSL(hue, 0.65, 0.6);
    }
  });
  return (
    <mesh ref={ref} scale={1.2} material={material}>
      <torusKnotGeometry args={[1.1, 0.35, 220, 32]} />
    </mesh>
  );
}

function SparkField({ count = 220 }) {
  const mesh = useRef();
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 4;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI * 2;
      p[i*3+0] = r * Math.sin(theta) * Math.cos(phi);
      p[i*3+1] = r * Math.sin(theta) * Math.sin(phi);
      p[i*3+2] = r * Math.cos(theta);
    }
    return p;
  }, [count]);
  useFrame(() => { if (mesh.current) mesh.current.rotation.y += 0.0009; });
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} sizeAttenuation color={"white"} transparent opacity={0.7} />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, -3, -5]} intensity={0.6} />
      <SparkField />
      <WobblyKnot />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
