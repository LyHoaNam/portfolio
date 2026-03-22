"use client";
import { Ring, Sphere } from "@react-three/drei";
import { DoubleSide } from "three";

export function ReactIcon3D({ hovered }: { hovered: boolean }) {
  return (
    <group>
      {/* Central nucleus */}
      <Sphere args={[0.15]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#61DAFB"
          emissive={hovered ? "#61DAFB" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </Sphere>
      {/* Orbital rings */}
      <Ring args={[0.3, 0.32, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#61DAFB"
          transparent
          opacity={0.8}
          side={DoubleSide}
        />
      </Ring>
      <Ring args={[0.3, 0.32, 32]} rotation={[Math.PI / 2, Math.PI / 3, 0]}>
        <meshStandardMaterial
          color="#61DAFB"
          transparent
          opacity={0.8}
          side={DoubleSide}
        />
      </Ring>
      <Ring args={[0.3, 0.32, 32]} rotation={[Math.PI / 2, -Math.PI / 3, 0]}>
        <meshStandardMaterial
          color="#61DAFB"
          transparent
          opacity={0.8}
          side={DoubleSide}
        />
      </Ring>
    </group>
  );
}
