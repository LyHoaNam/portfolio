"use client";

import { Canvas } from "@react-three/fiber";

import { TechIconsScene } from "./TechIconsScene";

export const ThreeDCanvas = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 20],
        fov: 75,
        near: 0.1,
        far: 100,
      }}
      style={{ background: "transparent" }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      {/* Lighting Setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[0, 5, 0]} intensity={0.3} color="#64FFDA" />

      {/* 3D Tech Icons Scene */}
      <TechIconsScene />
    </Canvas>
  );
};
