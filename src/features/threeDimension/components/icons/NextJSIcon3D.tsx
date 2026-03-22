"use client";
import { Ring } from "@react-three/drei";
import { DoubleSide } from "three";

export function NextJSIcon3D({ hovered }: { hovered: boolean }) {
  return (
    <group>
      {/* Black circular background */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.08, 32]} />
        <meshStandardMaterial
          color="#000000"
          emissive={hovered ? "#1a1a1a" : "#000000"}
          emissiveIntensity={hovered ? 0.4 : 0}
        />
      </mesh>
      {/* Front side "N" */}
      <mesh position={[-0.15, 0, 0.1]}>
        <boxGeometry args={[0.05, 0.35, 0.02]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0.06, -0.02, 0.1]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.05, 0.5, 0.02]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0.2, 0.06, 0.1]}>
        <boxGeometry args={[0.05, 0.26, 0.02]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      {/* Back side "N" - mirrored */}
      <mesh position={[-0.15, 0, -0.1]}>
        <boxGeometry args={[0.05, 0.35, 0.02]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0.06, -0.02, -0.1]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.05, 0.5, 0.02]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0.2, 0.06, -0.1]}>
        <boxGeometry args={[0.05, 0.26, 0.02]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      {/* Hover glow effects */}
      {hovered && (
        <Ring args={[0.42, 0.46, 32]} position={[0, 0, 0.06]}>
          <meshBasicMaterial
            color="#FFFFFF"
            transparent
            opacity={0.4}
            side={DoubleSide}
          />
        </Ring>
      )}
    </group>
  );
}
