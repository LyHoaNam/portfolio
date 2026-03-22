'use client';
import React from 'react';
import { Shape } from 'three';

export function ViteIcon3D({ hovered }: { hovered: boolean }) {
  // Create solid triangular shape with indented top edge
  const triangleShape = React.useMemo(() => {
    const shape = new Shape();
    shape.moveTo(0, -0.4); // Bottom point (vertex down)
    shape.lineTo(-0.5, 0.4); // Straight line to top left
    shape.lineTo(0, 0.3); 
    shape.lineTo(0.5, 0.4); // Top right
    return shape;
  }, []);

  // Create lightning bolt shape - bold at top, narrow at bottom
  const lightningShape = React.useMemo(() => {
    const shape = new Shape();
    // Bold top section
    shape.moveTo(-0.12, 0.42);   // 1
    shape.lineTo(-0.15, 0.02);    // 2
    shape.lineTo(-0.02, 0.05);      // 3
    shape.lineTo(-0.07, -0.1);       // 4
    shape.lineTo(0.02, -0.07);  // 5
    shape.lineTo(-0.01, -0.26);   // 6
    shape.lineTo(0.26, 0.22);       // 7
    shape.lineTo(0.15, 0.19);      // 8
    shape.lineTo(0.19, 0.44);   // 9
    return shape;
  }, []);

  const extrudeSettings = { depth: 0.08, bevelEnabled: false };

  return (
    <group>
      {/* Solid triangular shape */}
      <mesh position={[0, 0, 0]}>
        <extrudeGeometry args={[triangleShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#936BFF"
          emissive={hovered ? "#936BFF" : "#B145FF"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>

      {/* Lightning bolt overlay - bold at top, narrow at bottom */}
      <mesh position={[0, 0, 0.04]}>
        <extrudeGeometry
          args={[lightningShape, { depth: 0.1, bevelEnabled: false }]}
        />
        <meshStandardMaterial
          color="#FFD52E"
          emissive={hovered ? "#FFD52E" : "#FEB50E"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
      <mesh position={[0, 0, -0.04]}>
        <extrudeGeometry
          args={[lightningShape, { depth: 0.1, bevelEnabled: false }]}
        />
        <meshStandardMaterial
          color="#FFD52E"
          emissive={hovered ? "#FFD52E" : "#FEB50E"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>

      {/* Hover glow effect */}
      {hovered && (
        <mesh position={[0, 0, 0]}>
          <extrudeGeometry args={[triangleShape, { depth: 0.2, bevelEnabled: false }]} />
          <meshBasicMaterial color="#936BFF" transparent opacity={0.3} wireframe={true} />
        </mesh>
      )}
    </group>
  );
}
