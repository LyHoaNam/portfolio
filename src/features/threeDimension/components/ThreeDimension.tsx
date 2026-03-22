"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Dynamically import ThreeDCanvas for code-splitting
const ThreeDCanvas = dynamic(
  () =>
    import("@src/features/threeDimension/components/ThreeDCanvas").then(
      (mod) => ({ default: mod.ThreeDCanvas })
    ),
  { ssr: false }
);

const ErrorFallback = () => {
  return (
    <div className="text-red-500 text-sm">Sorry something went wrong.</div>
  );
};

const Loading = () => {
  return (
    <div className="animate-pulse text-retro-electric text-sm">
      Loading 3D Scene...
    </div>
  );
};

export const ThreeDimension = () => {
  return (
    <div className="h-full w-full">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <ThreeDCanvas />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
