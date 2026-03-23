import { Hero } from "@src/components/layout/Hero";
import { About } from "@src/features/about/components/About";
import Experience from "@src/features/experience/components/Experience";

const Portfolio = () => {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
    </main>
  );
};

export default Portfolio;
