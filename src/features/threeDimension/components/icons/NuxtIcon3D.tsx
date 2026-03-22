'use client';
import React from 'react';
import { Shape } from 'three';

export function NuxtIcon3D({ hovered }: { hovered: boolean }) {
  // Create the left triangle of Nuxt logo
  const leftTriangleShape = React.useMemo(() => {
    const shape = new Shape();
    
    // Scale factor to fit in 3D space
    const scale = 0.012;
    
    // Left triangle path (creating the left mountain/triangle)
    shape.moveTo(0 * scale, 40 * scale);
    shape.lineTo(30 * scale, -20 * scale);
    shape.lineTo(60 * scale, 40 * scale);
    shape.lineTo(20 * scale, 40 * scale);
    shape.lineTo(30 * scale, 20 * scale);
    shape.lineTo(40 * scale, 40 * scale);
    shape.lineTo(0 * scale, 40 * scale);
    
    return shape;
  }, []);

  // Create the right triangle of Nuxt logo
  const rightTriangleShape = React.useMemo(() => {
    const shape = new Shape();
    
    // Scale factor to fit in 3D space
    const scale = 0.012;
    
    // Right triangle path (creating the right mountain/triangle with overlap)
    shape.moveTo(40 * scale, 40 * scale);
    shape.lineTo(70 * scale, -20 * scale);
    shape.lineTo(130 * scale, 40 * scale);
    shape.lineTo(90 * scale, 40 * scale);
    shape.lineTo(70 * scale, 20 * scale);
    shape.lineTo(100 * scale, 40 * scale);
    shape.lineTo(40 * scale, 40 * scale);
    
    return shape;
  }, []);

  const extrudeSettings = { depth: 0.08, bevelEnabled: false };

  return (
    <group scale={[-1, 1, -1]}>
      {/* Left triangle (darker green) */}
      <mesh position={[-0.8, -0.1, 0]}>
        <extrudeGeometry args={[leftTriangleShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#00C58E"
          emissive={hovered ? "#00C58E" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Right triangle (bright green) */}
      <mesh position={[-0.8, -0.1, 0.01]}>
        <extrudeGeometry args={[rightTriangleShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#00DC82"
          emissive={hovered ? "#00DC82" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Hover glow effect */}
      {hovered && (
        <group>
          <mesh position={[-0.8, -0.1, 0]}>
            <extrudeGeometry args={[leftTriangleShape, { depth: 0.12, bevelEnabled: false }]} />
            <meshBasicMaterial color="#00C58E" transparent opacity={0.3} wireframe={true} />
          </mesh>
          <mesh position={[-0.8, -0.1, 0.01]}>
            <extrudeGeometry args={[rightTriangleShape, { depth: 0.12, bevelEnabled: false }]} />
            <meshBasicMaterial color="#00DC82" transparent opacity={0.3} wireframe={true} />
          </mesh>
        </group>
      )}
    </group>
  );
}
