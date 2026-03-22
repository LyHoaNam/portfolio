"use client";

import { createContext, useContext } from "react";

interface ThreeDSceneContextValue {
  onLaptopHoverChange?: (hovered: boolean) => void;
  onLaptopSelect?: () => void;
}

const ThreeDSceneContext = createContext<ThreeDSceneContextValue>({});

interface ThreeDSceneProviderProps {
  children: React.ReactNode;
  onLaptopHoverChange?: (hovered: boolean) => void;
  onLaptopSelect?: () => void;
}

export const ThreeDSceneProvider = ({
  children,
  onLaptopHoverChange,
  onLaptopSelect,
}: ThreeDSceneProviderProps) => {
  return (
    <ThreeDSceneContext.Provider
      value={{ onLaptopHoverChange, onLaptopSelect }}
    >
      {children}
    </ThreeDSceneContext.Provider>
  );
};

export const useThreeDSceneContext = (): ThreeDSceneContextValue => {
  return useContext(ThreeDSceneContext);
};