"use client";

import { ThreeDSceneProvider } from "@src/features/threeDimension/hooks/useThreeDSceneContext";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

// Dynamically import ThreeDCanvas for code-splitting
const ThreeDCanvas = dynamic(
  () =>
    import("@src/features/threeDimension/components/ThreeDCanvas").then(
      (mod) => ({ default: mod.ThreeDCanvas })
    ),
  { ssr: false }
);

interface Scene3DContainerProps {
  onLaptopHoverChange?: (hovered: boolean) => void;
  onLaptopSelect?: () => void;
}

const Scene3DFallback = () => {
  return <div></div>;
};

const Scene3DErrorFallback = ({ error }: FallbackProps) => {
  void error;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-retro-pink">3D Scene temporarily unavailable</div>
    </div>
  );
};

export const ThreeDSceneContainer = ({
  onLaptopHoverChange,
  onLaptopSelect,
}: Scene3DContainerProps) => {
  return (
    <div className="h-full w-full">
      <ThreeDSceneProvider
        onLaptopHoverChange={onLaptopHoverChange}
        onLaptopSelect={onLaptopSelect}
      >
        <ErrorBoundary FallbackComponent={Scene3DErrorFallback}>
          <Suspense fallback={<Scene3DFallback />}>
            <ThreeDCanvas />
          </Suspense>
        </ErrorBoundary>
      </ThreeDSceneProvider>
    </div>
  );
};
