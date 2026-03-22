'use client';
import React from 'react';
import { Shape } from 'three';

export function TailwindIcon3D({ hovered }: { hovered: boolean }) {
  // Create the first Tailwind wave (top wave)
  const firstWaveShape = React.useMemo(() => {
    const shape = new Shape();
    
    // Scale factor to fit in 3D space
    const scale = 0.008;
    
    // First wave path (scaled from SVG coordinates)
    shape.moveTo(64.004 * scale, -25.602 * scale);
    
    // Create the characteristic Tailwind wave using bezier curves
    shape.bezierCurveTo(
      46.937 * scale, -25.602 * scale,
      36.274 * scale, -17.072 * scale,
      32.004 * scale, 0 * scale
    );
    
    shape.bezierCurveTo(
      38.402 * scale, -8.531 * scale,
      45.871 * scale, -11.73 * scale,
      54.402 * scale, -9.597 * scale
    );
    
    shape.bezierCurveTo(
      59.273 * scale, -8.383 * scale,
      62.754 * scale, -4.851 * scale,
      66.609 * scale, -0.937 * scale
    );
    
    shape.bezierCurveTo(
      72.883 * scale, 5.429 * scale,
      80.145 * scale, 12.8 * scale,
      96.004 * scale, 12.8 * scale
    );
    
    shape.bezierCurveTo(
      113.07 * scale, 12.8 * scale,
      123.734 * scale, 4.269 * scale,
      128.004 * scale, -12.802 * scale
    );
    
    shape.bezierCurveTo(
      121.605 * scale, -4.266 * scale,
      114.137 * scale, -1.067 * scale,
      105.605 * scale, -3.2 * scale
    );
    
    shape.bezierCurveTo(
      100.735 * scale, -4.415 * scale,
      97.258 * scale, -7.946 * scale,
      93.398 * scale, -11.86 * scale
    );
    
    shape.bezierCurveTo(
      87.128 * scale, -18.227 * scale,
      79.868 * scale, -25.598 * scale,
      64.004 * scale, -25.602 * scale
    );
    
    return shape;
  }, []);

  // Create the second Tailwind wave (bottom wave)
  const secondWaveShape = React.useMemo(() => {
    const shape = new Shape();
    
    // Scale factor to fit in 3D space  
    const scale = 0.008;
    
    // Second wave path (scaled and positioned)
    shape.moveTo(32.004 * scale, 0 * scale);
    
    shape.bezierCurveTo(
      14.938 * scale, 0 * scale,
      4.274 * scale, 8.531 * scale,
      0.004 * scale, 25.602 * scale
    );
    
    shape.bezierCurveTo(
      6.402 * scale, 17.066 * scale,
      13.87 * scale, 13.867 * scale,
      22.402 * scale, 16 * scale
    );
    
    shape.bezierCurveTo(
      27.273 * scale, 17.215 * scale,
      30.754 * scale, 20.746 * scale,
      34.609 * scale, 24.66 * scale
    );
    
    shape.bezierCurveTo(
      40.883 * scale, 31.027 * scale,
      48.145 * scale, 38.398 * scale,
      64.004 * scale, 38.398 * scale
    );
    
    shape.bezierCurveTo(
      81.07 * scale, 38.398 * scale,
      91.734 * scale, 29.868 * scale,
      96.004 * scale, 12.801 * scale
    );
    
    shape.bezierCurveTo(
      89.605 * scale, 21.332 * scale,
      82.137 * scale, 24.531 * scale,
      73.605 * scale, 22.398 * scale
    );
    
    shape.bezierCurveTo(
      68.735 * scale, 21.184 * scale,
      65.258 * scale, 17.652 * scale,
      61.398 * scale, 13.738 * scale
    );
    
    shape.bezierCurveTo(
      55.128 * scale, 7.371 * scale,
      47.868 * scale, 0 * scale,
      32.004 * scale, 0 * scale
    );
    
    return shape;
  }, []);

  const extrudeSettings = { depth: 0.08, bevelEnabled: false };

  return (
    <group scale={[-1, 1, -1]}>
      {/* First wave */}
      <mesh position={[-0.8, 0.2, 0]}>
        <extrudeGeometry args={[firstWaveShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive={hovered ? "#38BDF8" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Second wave */}
      <mesh position={[-0.4, -0.3, 0]}>
        <extrudeGeometry args={[secondWaveShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive={hovered ? "#38BDF8" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Hover glow effect */}
      {hovered && (
        <group>
          <mesh position={[-0.8, 0.2, 0]}>
            <extrudeGeometry args={[firstWaveShape, { depth: 0.12, bevelEnabled: false }]} />
            <meshBasicMaterial color="#38BDF8" transparent opacity={0.3} wireframe={true} />
          </mesh>
          <mesh position={[-0.4, -0.3, 0]}>
            <extrudeGeometry args={[secondWaveShape, { depth: 0.12, bevelEnabled: false }]} />
            <meshBasicMaterial color="#38BDF8" transparent opacity={0.3} wireframe={true} />
          </mesh>
        </group>
      )}
    </group>
  );
}
