"use client";

import { TechStacks } from "@src/features/techStacks/components/TechStacks";
import { useUrlHash } from "@src/hooks/useUrlHash";
import { SECTION_HASHES } from "@src/utils/url";
import { VisibleOnScreen } from "components/ui/VisibleOnScreen";
import { ThreeDSceneContainer } from "features/threeDimension/components/Scene3DContainer";
import { useState } from "react";

import { IntroduceBubble } from "./IntroduceBubble";
import { IntroduceImage } from "./IntroduceImage";

const DEFAULT_AVATAR_INDEX = 0 as const;

export const HeroClientSection = () => {
  const [isLaptopHovered, setIsLaptopHovered] = useState<boolean>(false);
  const { setHash } = useUrlHash();
  const handleLaptopClick = () => {
    setHash(SECTION_HASHES.SKILLS);
  };
  return (
    <>
      <div className="relative">
        <IntroduceBubble className="-top-2" />
        <IntroduceImage
          isHovering={isLaptopHovered}
          defaultAvatarIndex={DEFAULT_AVATAR_INDEX}
        />
        <h1 className="mt-0 font-display text-3xl text-text-accent uppercase leading-8 md:text-5xl md:leading-10">
          LY HOA NAM
        </h1>
      </div>

      <VisibleOnScreen
        className="absolute bottom-12.5 left-0 hidden h-250 w-250 md:block"
        threshold={0.1}
      >
        <ThreeDSceneContainer
          onLaptopHoverChange={setIsLaptopHovered}
          onLaptopSelect={handleLaptopClick}
        />
      </VisibleOnScreen>
      <TechStacks />
    </>
  );
};
