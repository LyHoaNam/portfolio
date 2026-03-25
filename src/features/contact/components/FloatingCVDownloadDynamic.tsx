"use client";

import dynamic from "next/dynamic";

const FloatingCVDownload = dynamic(
  () =>
    import("@src/features/contact/components/FloatingCVDownload").then(
      (m) => m.FloatingCVDownload
    ),
  { ssr: false }
);

export const FloatingCVDownloadDynamic = () => <FloatingCVDownload />;
