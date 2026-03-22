'use client';
import React from 'react';

export function VueIcon3D({ hovered }: { hovered: boolean }) {
  return (
    <group>
      {/* Outer dark green V - Left face */}
      <mesh position={[-0.14, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.08, 0.6, 0.15]} />
        <meshStandardMaterial
          color="#41B883"
          emissive={hovered ? "#41B883" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
      {/* Outer dark green V - Right face */}
      <mesh position={[0.14, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.08, 0.6, 0.15]} />
        <meshStandardMaterial
          color="#41B883"
          emissive={hovered ? "#41B883" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
      {/* Inner light green V - Left face (positioned in the back) */}
      <mesh position={[-0.1, 0.09, 0.06]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.08, 0.5, 0.12]} />
        <meshStandardMaterial
          color="#35495E"
          emissive={hovered ? "#35495E" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
      {/* Inner light green V - Right face (positioned in the back) */}
      <mesh position={[0.1, 0.09, 0.06]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.08, 0.5, 0.12]} />
        <meshStandardMaterial
          color="#35495E"
          emissive={hovered ? "#35495E" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
      {/* Optional: Add glow effect when hovered */}
      {hovered && (
        <group>
          {/* Left glow */}
          <mesh position={[-0.15, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
            <boxGeometry args={[0.12, 0.7, 0.18]} />
            <meshBasicMaterial
              color="#41B883"
              transparent
              opacity={0.2}
              wireframe={true}
            />
          </mesh>
          {/* Right glow */}
          <mesh position={[0.15, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
            <boxGeometry args={[0.12, 0.7, 0.18]} />
            <meshBasicMaterial
              color="#41B883"
              transparent
              opacity={0.2}
              wireframe={true}
            />
          </mesh>
        </group>
      )}
    </group>
  );
}
