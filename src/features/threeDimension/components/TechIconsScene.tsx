"use client";

import { useThree } from "@react-three/fiber";
import { InteractiveLaptop } from "@src/features/threeDimension/components/scene/InteractiveLaptop";
import { useThreeDInteraction } from "@src/features/threeDimension/hooks/use3DInteraction";
import { useThreeDSceneContext } from "@src/features/threeDimension/hooks/useThreeDSceneContext";
import { TECH_ICON_ITEMS } from "@src/features/threeDimension/utils/sceneConfig";
import { useEffect } from "react";

import { OrbitingTechIcon } from "./scene/OrbitingTechIcon";

export const TechIconsScene = () => {
  const { onLaptopHoverChange } = useThreeDSceneContext();
  const { camera, size } = useThree();

  // Responsive camera positioning
  useEffect(() => {
    const isMobile = size.width < 768;
    camera.position.set(0, 0, isMobile ? 15 : 10);
    camera.updateProjectionMatrix();
  }, [camera, size.width]);

  const interaction = useThreeDInteraction(2, 1);

  // Notify parent when hover state changes
  useEffect(() => {
    onLaptopHoverChange?.(interaction.hovered);
  }, [interaction.hovered, onLaptopHoverChange]);

  return (
    <group>
      {TECH_ICON_ITEMS.map((icon, iconIndex) => (
        <OrbitingTechIcon
          key={icon.name}
          name={icon.name}
          color={icon.color}
          icon={icon.component}
          iconIndex={iconIndex}
          iconCount={TECH_ICON_ITEMS.length}
          isLaptopHovered={interaction.hovered}
        />
      ))}
      <InteractiveLaptop interaction={interaction} />
    </group>
  );
};
