"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { TypeSectionHash } from "utils/url";

interface IUseUrlHashReturn {
  currentHash: string;
  isActive: boolean;
  clearHash: (hashToClear?: string) => void;
  setHash: (hash: TypeSectionHash | string) => void;
}

const normalizeHash = (hash: string): string => {
  if (!hash) {
    return "";
  }

  return hash.startsWith("#") ? hash : `#${hash}`;
};

const getCurrentHash = (): string => {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location.hash;
};

export const useUrlHash = (targetHash?: TypeSectionHash): IUseUrlHashReturn => {
  const normalizedTargetHash = useMemo(
    () => (targetHash ? normalizeHash(targetHash) : ""),
    [targetHash]
  );
  const [currentHash, setCurrentHash] = useState<string>(getCurrentHash);

  const syncHash = useCallback(() => {
    setCurrentHash(getCurrentHash());
  }, []);

  useEffect(() => {
    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, [syncHash]);

  const setHash = useCallback((hash: TypeSectionHash | string) => {
    const normalizedHash = normalizeHash(hash);

    if (!normalizedHash || typeof window === "undefined") {
      return;
    }

    window.location.hash = normalizedHash;
    setCurrentHash(normalizedHash);
  }, []);

  const clearHash = useCallback((hashToClear?: string) => {
    if (typeof window === "undefined") {
      return;
    }

    const current = getCurrentHash();

    if (hashToClear && current !== normalizeHash(hashToClear)) {
      return;
    }

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${window.location.search}`
    );
    setCurrentHash("");
  }, []);

  return {
    currentHash,
    isActive: Boolean(
      normalizedTargetHash && currentHash === normalizedTargetHash
    ),
    clearHash,
    setHash,
  };
};
