"use client";

import { useUrlHash } from "@src/hooks/useUrlHash";
import { useCallback, useEffect } from "react";
import { SECTION_HASHES } from "utils/url";

interface IUseTechStackDrawerReturn {
  isOpen: boolean;
  handleClose: () => void;
}

export const useTechStackDrawer = (): IUseTechStackDrawerReturn => {
  const { clearHash, isActive } = useUrlHash(SECTION_HASHES.SKILLS);

  const handleClose = useCallback(() => {
    clearHash(SECTION_HASHES.SKILLS);
  }, [clearHash]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return {
    isOpen: isActive,
    handleClose,
  };
};
