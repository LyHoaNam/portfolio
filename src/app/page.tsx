import { Hero } from "@src/components/layout/Hero";
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
    </main>
  );
};

export default Portfolio;
