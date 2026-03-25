import { Hero } from "@src/components/layout/Hero";
import { FloatingScrollButton } from "@src/components/ui/FloatingScrollButton";
import { About } from "@src/features/about/components/About";
import { Contact } from "@src/features/contact/components/Contact";
import { FloatingCVDownloadDynamic } from "@src/features/contact/components/FloatingCVDownloadDynamic";
import Experience from "@src/features/experience/components/Experience";

const Portfolio = () => {
  return (
    <main>
      <Hero />
      <div className="relative z-2 bg-surface-canvas">
        <About />
        <Experience />
      </div>
      <Contact />
      <FloatingCVDownloadDynamic />
      <FloatingScrollButton />
    </main>
  );
};

export default Portfolio;
