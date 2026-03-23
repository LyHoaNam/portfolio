"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the user has scrolled past the given threshold (px).
 * Defaults to 80px — enough to clear the hero fold.
 */
export const useScrollVisibility = (threshold = 80): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    handleScroll(); // run once on mount in case page loads mid-scroll

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isVisible;
};
