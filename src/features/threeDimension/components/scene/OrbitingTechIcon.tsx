"use client";

import { Float, Sphere, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useThreeDInteraction } from "@src/features/threeDimension/hooks/use3DInteraction";
import {
  ORBIT_CONFIG,
  SCENE_COLORS,
} from "@src/features/threeDimension/utils/sceneConfig";
import type React from "react";
import { memo, useRef } from "react";
import type { Group } from "three";
import { BackSide, MathUtils } from "three";

interface OrbitingTechIconProps {
  name: string;
  color: string;
  iconCount: number;
  iconIndex: number;
  icon: React.ComponentType<{ hovered: boolean }>;
  isLaptopHovered: boolean;
}

export const OrbitingTechIcon = memo(
  ({
    name,
    color,
    iconCount,
    iconIndex,
    icon: Icon,
    isLaptopHovered,
  }: OrbitingTechIconProps) => {
    const meshRef = useRef<Group>(null);
    const interaction = useThreeDInteraction(2, 1);
    const currentRadiusRef = useRef<number>(ORBIT_CONFIG.baseRadius);

    useFrame((state, delta) => {
      if (!meshRef.current) return;

      const elapsedTime = state.clock.elapsedTime;
      const targetRadius = isLaptopHovered
        ? ORBIT_CONFIG.expandedRadius
        : ORBIT_CONFIG.baseRadius;

      currentRadiusRef.current = MathUtils.lerp(
        currentRadiusRef.current,
        targetRadius,
        delta * ORBIT_CONFIG.interpolationSpeed
      );

      const orbitAngle =
        elapsedTime * ORBIT_CONFIG.orbitSpeed +
        iconIndex * ((Math.PI * 2) / iconCount);

      meshRef.current.position.x =
        Math.cos(orbitAngle) * currentRadiusRef.current + ORBIT_CONFIG.xOffset;
      meshRef.current.position.y =
        Math.sin(orbitAngle) * currentRadiusRef.current + ORBIT_CONFIG.yOffset;
      meshRef.current.position.z =
        Math.sin(orbitAngle * 0.5) * ORBIT_CONFIG.zVariation;

      meshRef.current.rotation.x += delta * (0.5 + iconIndex * 0.1);
      meshRef.current.rotation.y += delta * (0.7 + iconIndex * 0.05);

      interaction.animateScale(meshRef, delta);
    });

    return (
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.2}>
        <group
          ref={meshRef}
          onPointerEnter={interaction.onPointerEnter}
          onPointerLeave={interaction.onPointerLeave}
          onPointerDown={interaction.onPointerDown}
          onPointerUp={interaction.onPointerUp}
        >
          <Icon hovered={interaction.hovered} />

          <Text
            position={[0, -1.2, 0]}
            fontSize={0.3}
            color={SCENE_COLORS.label}
            anchorX="center"
            anchorY="middle"
          >
            {name}
          </Text>

          {interaction.hovered && (
            <Sphere args={[1.0]} position={[0, 0, 0]}>
              <meshBasicMaterial
                color={color}
                transparent
                opacity={0.1}
                  side={BackSide}
              />
            </Sphere>
          )}
        </group>
      </Float>
    );
  }
);
