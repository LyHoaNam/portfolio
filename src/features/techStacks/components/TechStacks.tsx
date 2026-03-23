"use client";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "react-error-boundary";

const TechStackDrawer = dynamic(
  () =>
    import("@src/features/techStacks/components/TechStackDrawer").then(
      (mod) => ({ default: mod.TechStackDrawer })
    ),
  { ssr: false }
);

const ErrorFallback = () => {
  return (
    <div className="text-red-500 text-sm">Sorry something went wrong.</div>
  );
};
export const TechStacks = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <TechStackDrawer />
    </ErrorBoundary>
  );
};
