"use client";

import { type RefObject, useEffect, useRef, useState } from "react";

interface TypeUseSectionVisibilityReturn {
  isVisible: boolean;
  sectionRef: RefObject<HTMLElement | null>;
}

export const useSectionVisibility = (
  threshold: number
): TypeUseSectionVisibilityReturn => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { isVisible, sectionRef };
};
