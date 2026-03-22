"use client";

import { useCallback, useState } from "react";
import type { Object3D } from "three";
import { Vector3 } from "three";

interface Use3DInteractionReturn {
  hovered: boolean;
  clicked: boolean;
  scale: number;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  onPointerDown: () => void;
  onPointerUp: () => void;
  animateScale: (
    meshRef: React.RefObject<Object3D | null>,
    delta: number
  ) => void;
}

export function useThreeDInteraction(
  hoverScale: number = 1.2,
  clickScale: number = 1.1
): Use3DInteractionReturn {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onPointerEnter = useCallback(() => {
    setHovered(true);
    document.body.style.cursor = "pointer";
  }, []);

  const onPointerLeave = useCallback(() => {
    setHovered(false);
    setClicked(false);
    document.body.style.cursor = "default";
  }, []);

  const onPointerDown = useCallback(() => {
    setClicked(true);
  }, []);

  const onPointerUp = useCallback(() => {
    setClicked(false);
  }, []);

  const getTargetScale = useCallback(() => {
    if (hovered) return hoverScale;
    if (clicked) return clickScale;
    return 1;
  }, [hovered, clicked, hoverScale, clickScale]);

  const animateScale = useCallback(
    (meshRef: React.RefObject<Object3D | null>, delta: number) => {
      if (meshRef.current) {
        const targetScale = getTargetScale();
        meshRef.current.scale.lerp(
          new Vector3(targetScale, targetScale, targetScale),
          delta * 8
        );
      }
    },
    [getTargetScale]
  );

  return {
    hovered,
    clicked,
    scale: getTargetScale(),
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
    onPointerUp,
    animateScale,
  };
}

export const use3DInteraction = useThreeDInteraction;
