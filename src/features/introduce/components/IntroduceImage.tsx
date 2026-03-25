"use client";

import avatar0 from "images/avatar0.png";
import avatar1 from "images/avatar1.png";
import avatar2 from "images/avatar2.png";
import avatar3 from "images/avatar3.png";
import avatar4 from "images/avatar4.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const AVATARS = [avatar0, avatar1, avatar2, avatar3, avatar4] as const;

type AvatarIndex = 0 | 1 | 2 | 3 | 4;

interface IntroduceImageProps {
  isHovering: boolean;
  defaultAvatarIndex: AvatarIndex;
}

export const IntroduceImage = ({
  isHovering,
  defaultAvatarIndex,
}: IntroduceImageProps) => {
  const [randAvatar, setRandAvatar] = useState<AvatarIndex>(defaultAvatarIndex);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);

    const timer = setTimeout(() => {
      if (isHovering) {
        const randomIndex = (Math.floor(Math.random() * (AVATARS.length - 1)) +
          1) as AvatarIndex;
        setRandAvatar(randomIndex);
      } else {
        setRandAvatar(defaultAvatarIndex);
      }
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [defaultAvatarIndex, isHovering]);

  return (
    <Image
      src={AVATARS[randAvatar]}
      alt="LyHoaNam - Frontend Developer"
      width={350}
      height={350}
      preload
      className={`h-50 w-50 transition-opacity duration-150 md:h-87.5 md:w-87.5 ${isVisible ? "opacity-100" : "opacity-0"}`}
    />
  );
};
