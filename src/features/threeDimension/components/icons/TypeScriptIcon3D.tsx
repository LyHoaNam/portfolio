"use client";
import { Box, Text } from "@react-three/drei";

export function TypeScriptIcon3D({ hovered }: { hovered: boolean }) {
  return (
    <group>
      {/* Main blue cube */}
      <Box args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial
          color="#007ACC"
          emissive={hovered ? "#007ACC" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
          roughness={0.2}
          metalness={0.1}
        />
      </Box>
      {/* TS Text on all faces */}
      <Text
        position={[0, 0, 0.41]}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        TS
      </Text>
      <Text
        position={[0, 0, -0.41]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        TS
      </Text>
      <Text
        position={[0.41, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        TS
      </Text>
      <Text
        position={[-0.41, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        TS
      </Text>
      <Text
        position={[0, 0.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        TS
      </Text>
      <Text
        position={[0, -0.41, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        TS
      </Text>
      {/* Extra glow effect when hovered */}
      {hovered && (
        <Box args={[0.9, 0.9, 0.9]}>
          <meshBasicMaterial
            color="#007ACC"
            transparent
            opacity={0.2}
            wireframe={true}
          />
        </Box>
      )}
    </group>
  );
}
