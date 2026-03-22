'use client';
import React from 'react';
import { Shape } from 'three';

export function Playwright3D({ hovered }: { hovered: boolean }) {
  // Create the main triangle (play button shape)
  const mainTriangleShape = React.useMemo(() => {
    const shape = new Shape();
    
    // Scale factor to fit in 3D space
    const scale = 0.014;
    
    // Main triangle pointing right (play button)
    shape.moveTo(0 * scale, -40 * scale);
    shape.lineTo(60 * scale, 0 * scale);
    shape.lineTo(0 * scale, 40 * scale);
    shape.lineTo(0 * scale, -40 * scale);
    
    return shape;
  }, []);

  // Create the accent triangle (left accent)
  const accentTriangleShape = React.useMemo(() => {
    const shape = new Shape();
    
    // Scale factor to fit in 3D space
    const scale = 0.014;
    
    // Smaller accent triangle on the left
    shape.moveTo(-20 * scale, -30 * scale);
    shape.lineTo(-10 * scale, -15 * scale);
    shape.lineTo(-20 * scale, 0 * scale);
    shape.lineTo(-20 * scale, -30 * scale);
    
    return shape;
  }, []);

  // Create the bottom accent triangle
  const bottomAccentShape = React.useMemo(() => {
    const shape = new Shape();
    
    // Scale factor to fit in 3D space
    const scale = 0.014;
    
    // Bottom accent triangle
    shape.moveTo(-20 * scale, 10 * scale);
    shape.lineTo(-10 * scale, 25 * scale);
    shape.lineTo(-20 * scale, 40 * scale);
    shape.lineTo(-20 * scale, 10 * scale);
    
    return shape;
  }, []);

  const extrudeSettings = { depth: 0.08, bevelEnabled: false };

  return (
    <group scale={[-1, 1, -1]}>
      {/* Main triangle (primary red) */}
      <mesh position={[-0.5, 0, 0]}>
        <extrudeGeometry args={[mainTriangleShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#E5484D"
          emissive={hovered ? "#E5484D" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Top accent triangle (green) */}
      <mesh position={[-0.5, 0, 0.01]}>
        <extrudeGeometry args={[accentTriangleShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#2D9D78"
          emissive={hovered ? "#2D9D78" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Bottom accent triangle (orange) */}
      <mesh position={[-0.5, 0, 0.01]}>
        <extrudeGeometry args={[bottomAccentShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#F48120"
          emissive={hovered ? "#F48120" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Hover glow effect */}
      {hovered && (
        <group>
          <mesh position={[-0.5, 0, 0]}>
            <extrudeGeometry args={[mainTriangleShape, { depth: 0.12, bevelEnabled: false }]} />
            <meshBasicMaterial color="#E5484D" transparent opacity={0.3} wireframe={true} />
          </mesh>
          <mesh position={[-0.5, 0, 0.01]}>
            <extrudeGeometry args={[accentTriangleShape, { depth: 0.12, bevelEnabled: false }]} />
            <meshBasicMaterial color="#2D9D78" transparent opacity={0.3} wireframe={true} />
          </mesh>
          <mesh position={[-0.5, 0, 0.01]}>
            <extrudeGeometry args={[bottomAccentShape, { depth: 0.12, bevelEnabled: false }]} />
            <meshBasicMaterial color="#F48120" transparent opacity={0.3} wireframe={true} />
          </mesh>
        </group>
      )}
    </group>
  );
}
