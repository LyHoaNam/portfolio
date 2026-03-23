export interface ITechnicalSkillGroup {
  category: string;
  items: string[];
}

export const TECHNICAL_SKILLS: ITechnicalSkillGroup[] = [
  {
    category: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Vue",
      "Nuxt",
      "Preact",
      "TanStack Router / TanStack Start",
      "React Router",
    ],
  },
  {
    category: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "SCSS",
      "SQL",
      "Go (Intermediate)",
    ],
  },
  {
    category: "UI & Design Systems",
    items: ["Tailwind CSS", "Ant Design", "shadcn/ui", "Storybook", "Ladle"],
  },
  {
    category: "State & Data",
    items: ["TanStack Query", "Redux Toolkit", "Zustand", "Jotai", "Pinia"],
  },
  {
    category: "Testing & Quality",
    items: ["Playwright", "Vitest", "Jest"],
  },
  {
    category: "Build Tooling & Bundlers",
    items: ["Vite", "Webpack", "Rollup"],
  },
  {
    category: "Code Quality & Standards",
    items: [
      "ESLint",
      "Biome",
      "Prettier",
      "Architecture standards",
      "Code review guidelines",
    ],
  },
  {
    category: "Performance",
    items: ["Lighthouse", "Chrome DevTools profiling", "Bundle analysis"],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "VS Code",
      "Copilot",
      "Cline",
      "n8n",
      "Figma",
      "Adobe Illustrator",
    ],
  },
];
