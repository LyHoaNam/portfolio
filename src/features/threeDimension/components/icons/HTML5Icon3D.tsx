'use client';
import React from 'react';
import { Shape } from 'three';

export function HTML5Icon3D({ hovered }: { hovered: boolean }) {
  const shieldShape = React.useMemo(() => {
    const shape = new Shape();
    shape.moveTo(0, 0.3);
    shape.lineTo(0.3, 0.3);
    shape.lineTo(0.28, -0.25);
    shape.lineTo(0, -0.35);
    shape.lineTo(-0.28, -0.25);
    shape.lineTo(-0.3, 0.3);
    shape.lineTo(0, 0.3);
    return shape;
  }, []);
  const innerShieldShape = React.useMemo(() => {
    const shape = new Shape();
    shape.moveTo(0, 0.25);
    shape.lineTo(0.25, 0.25);
    shape.lineTo(0.23, -0.22);
    shape.lineTo(0, -0.32);
    shape.lineTo(-0.23, -0.22);
    shape.lineTo(-0.25, 0.25);
    shape.lineTo(0, 0.25);
    return shape;
  }, []);
  const extrudeSettings = { depth: 0.08, bevelEnabled: false };
  const innerExtrudeSettings = { depth: 0.06, bevelEnabled: false };
  return (
    <group>
      {/* Main shield background */}
      <mesh position={[0, 0, -0.04]}>
        <extrudeGeometry args={[shieldShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#E44D26"
          emissive={hovered ? "#E44D26" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
      {/* Orange accent layer */}
      <mesh position={[0, 0, 0]}>
        <extrudeGeometry args={[innerShieldShape, innerExtrudeSettings]} />
        <meshStandardMaterial
          color="#F16529"
          emissive={hovered ? "#F16529" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
      {/* FRONT SIDE "5" */}
      <mesh position={[-0.015, 0.15, 0.08]}>
        <boxGeometry args={[0.3, 0.04, 0.02]} />
        <meshStandardMaterial color="#FFFFFF" emissive={hovered ? "#FFFFFF" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[-0.14, 0.1, 0.08]} rotation={[0, 0, Math.PI / 16]}>
        <boxGeometry args={[0.04, 0.13, 0.02]} />
        <meshStandardMaterial color="#EBEBEB" emissive={hovered ? "#EBEBEB" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[-0.015, 0.02, 0.08]}>
        <boxGeometry args={[0.26, 0.04, 0.02]} />
        <meshStandardMaterial color="#FFFFFF" emissive={hovered ? "#FFFFFF" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[0.1, -0.05, 0.08]} rotation={[0, 0, Math.PI / -16]}>
        <boxGeometry args={[0.04, 0.17, 0.02]} />
        <meshStandardMaterial color="#EBEBEB" emissive={hovered ? "#EBEBEB" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[-0.05, -0.15, 0.08]} rotation={[0, 0, Math.PI / -8]}>
        <boxGeometry args={[0.13, 0.04, 0.02]} />
        <meshStandardMaterial color="#FFFFFF" emissive={hovered ? "#FFFFFF" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[0.04, -0.15, 0.08]} rotation={[0, 0, Math.PI / 8]}>
        <boxGeometry args={[0.13, 0.04, 0.02]} />
        <meshStandardMaterial color="#FFFFFF" emissive={hovered ? "#FFFFFF" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[-0.11, -0.1, 0.08]} rotation={[0, 0, Math.PI / 20]}>
        <boxGeometry args={[0.04, 0.1, 0.02]} />
        <meshStandardMaterial color="#EBEBEB" emissive={hovered ? "#EBEBEB" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      {/* BACK SIDE "5" - mirrored */}
      <mesh position={[-0.015, 0.15, -0.12]}>
        <boxGeometry args={[0.3, 0.04, 0.02]} />
        <meshStandardMaterial color="#FFFFFF" emissive={hovered ? "#FFFFFF" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[-0.14, 0.1, -0.12]} rotation={[0, 0, Math.PI / 16]}>
        <boxGeometry args={[0.04, 0.13, 0.02]} />
        <meshStandardMaterial color="#EBEBEB" emissive={hovered ? "#EBEBEB" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[-0.015, 0.02, -0.12]}>
        <boxGeometry args={[0.26, 0.04, 0.02]} />
        <meshStandardMaterial color="#FFFFFF" emissive={hovered ? "#FFFFFF" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[0.1, -0.05, -0.12]} rotation={[0, 0, Math.PI / -16]}>
        <boxGeometry args={[0.04, 0.17, 0.02]} />
        <meshStandardMaterial color="#EBEBEB" emissive={hovered ? "#EBEBEB" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[-0.05, -0.15, -0.12]} rotation={[0, 0, Math.PI / -8]}>
        <boxGeometry args={[0.13, 0.04, 0.02]} />
        <meshStandardMaterial color="#FFFFFF" emissive={hovered ? "#FFFFFF" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[0.04, -0.15, -0.12]} rotation={[0, 0, Math.PI / 8]}>
        <boxGeometry args={[0.13, 0.04, 0.02]} />
        <meshStandardMaterial color="#FFFFFF" emissive={hovered ? "#FFFFFF" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      <mesh position={[-0.11, -0.1, -0.12]} rotation={[0, 0, Math.PI / 20]}>
        <boxGeometry args={[0.04, 0.1, 0.02]} />
        <meshStandardMaterial color="#EBEBEB" emissive={hovered ? "#EBEBEB" : "#000000"} emissiveIntensity={hovered ? 0.2 : 0} />
      </mesh>
      {/* Hover glow effect */}
      {hovered && (
        <mesh position={[0, 0, 0]}>
          <extrudeGeometry args={[shieldShape, { depth: 0.2, bevelEnabled: false }]} />
          <meshBasicMaterial color="#E44D26" transparent opacity={0.3} wireframe={true} />
        </mesh>
      )}
    </group>
  );
}
