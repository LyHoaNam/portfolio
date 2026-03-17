"use client";

import { useSectionVisibility } from "@src/hooks/useSectionVisibility";
import type { PropsWithChildren } from "react";

interface TypeVisibleOnScreenProps extends PropsWithChildren {
  className?: string;
  threshold?: number;
}

export const VisibleOnScreen = ({
  children,
  className = "",
  threshold = 0.1,
}: TypeVisibleOnScreenProps) => {
  const { isVisible, sectionRef } = useSectionVisibility(threshold);
  const ref = sectionRef.current
    ? (sectionRef as React.RefObject<HTMLDivElement>)
    : undefined;
  return (
    <div ref={ref} className={className}>
      {isVisible ? children : null}
    </div>
  );
};
