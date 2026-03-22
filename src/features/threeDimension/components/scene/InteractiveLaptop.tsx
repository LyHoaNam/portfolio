"use client";

import { Text } from "@react-three/drei";
import { LaptopScreen3D } from "@src/features/threeDimension/components/icons/LaptopScreen3D";
import type { useThreeDInteraction } from "@src/features/threeDimension/hooks/use3DInteraction";
import { useThreeDSceneContext } from "@src/features/threeDimension/hooks/useThreeDSceneContext";
import { SCENE_COLORS } from "@src/features/threeDimension/utils/sceneConfig";
import { memo } from "react";

interface InteractiveLaptopProps {
  interaction: ReturnType<typeof useThreeDInteraction>;
}

export const InteractiveLaptop = memo(
  ({ interaction }: InteractiveLaptopProps) => {
    const { onLaptopSelect } = useThreeDSceneContext();

    return (
      <group
        onPointerEnter={interaction.onPointerEnter}
        onPointerLeave={interaction.onPointerLeave}
        onPointerDown={interaction.onPointerDown}
        onPointerUp={interaction.onPointerUp}
        onClick={onLaptopSelect}
      >
        <LaptopScreen3D hovered={interaction.hovered} />
        <Text
          position={[0, -2.2, 0]}
          fontSize={0.3}
          fontWeight="bold"
          color={SCENE_COLORS.label}
          anchorX="center"
          anchorY="middle"
        >
          MY TECH STACK
        </Text>
        <Text
          position={[0, -2.5, 0]}
          fontSize={0.2}
          color={SCENE_COLORS.label}
          anchorX="center"
          anchorY="middle"
        >
          (Click to explore)
        </Text>
      </group>
    );
  }
);
