export interface TypeExperienceItem {
  id: string;
  company?: string;
  project: string;
  period: string;
  role: string;
  highlights: string[];
}

export const EXPERIENCE_ITEMS: TypeExperienceItem[] = [
  {
    id: "tool-help-platform-enablement",
    company: "Tool Help Company",
    project: "Internal Tools / Frontend Platform Enablement",
    period: "2022 - 2026",
    role: "Problem Discovery to Implementation",
    highlights: [
      "Built from scratch: Chrome Extension to upload image/video attachments to S3 instead of local backlog storage",
      "0→1 delivery: Chrome Extension to migrate Jira → Backlog with auto-translation, reducing manual rewrite effort",
      "End-to-end ownership: Company New Tab Chrome Extension aggregating announcements, news, and internal tools/links",
      "Copilot instruction standard: Defined and rolled out standards to improve consistency and reduce rework",
      "Frontend Knowledge Library: Built a searchable library (patterns, runbooks, pitfalls)",
      "Teq-superlate: Key contributed to a npm scaffolder for React/Vue/Next/Nuxt with standard structure and full quality gates",
    ],
  },
  {
    id: "cms-react-jp-collaboration",
    project: "CMS (Vite + React) — Collaboration with Japanese Engineers",
    period: "10/2024 - present",
    role: "Senior Developer / Frontend Team Leader",
    highlights: [
      "JP collaboration: Established a new cross-border delivery model as one of the first engineers collaborating directly with the Japan team",
      "Delivered fintech/CIC features: Worked with a 2–3 person squad to clarify vague user stories and ship on a weekly release cadence",
      "Solved critical UX/performance issue: Fixed a long-standing scrolling/UX architecture problem and reduced key technical debt",
    ],
  },
  {
    id: "nuxt-team-enablement",
    project: "Vue + Nuxt Application (Team Enablement + Production Delivery)",
    period: "3/2024 - 10/2024",
    role: "Senior Developer / Frontend Team Leader",
    highlights: [
      "Team enablement: coached 3 freshers (new to Vue/Nuxt) to production readiness through pairing, learning plans, and review-driven feedback",
      "Project foundation: Bootstrapped the Nuxt foundation (architecture, conventions, reusable modules) and introduced Storybook",
      "SSO implementation: Delivered SSO login and integration, reducing auth-related support issues",
      "Maintainable patterns: Enforced Atomic Design and standardized API patterns (shared hooks / Nuxt useFetch for SSR+CSR)",
      "Release workflow: Added deploy/notification tooling to improve release visibility and reduce coordination overhead",
    ],
  },
  {
    id: "next-large-scale-ui",
    project: "Next.js Application (Large-scale Responsive UI)",
    period: "10/2021 - 9/2024",
    role: "Senior Developer / Frontend Team Leader",
    highlights: [
      "Led a 7-engineer team delivering a large responsive web application with shared layout/component patterns across 100+ pages",
      "Delivered a responsive system at scale (mobile → desktop) with reusable components and guidelines",
      "Built a custom NextAuth-based cross-site authentication solution, enabling single login across multiple sites",
      "Improved performance score from ~50 → ~80 (Lighthouse / Core Web Vitals) through targeted optimizations",
    ],
  },
  {
    id: "webpack-mfe-platform",
    project: "Webpack + React Micro-Frontend Platform",
    period: "4/2024 - 12/2024",
    role: "Junior Developer",
    highlights: [
      "Contributed to designing and implementing a micro-frontend architecture via webpack, enabling independent deployability across frontend modules",
      "Owned end-to-end delivery of a 'Social Feed' feature inside a simulated Forex trading application",
    ],
  },
  {
    id: "marketing-landing-pages",
    project: "Marketing Landing Pages",
    period: "2024 - 2026",
    role: "Progressed from Fresher to Senior Developer",
    highlights: [
      "Built high-performance landing pages with creative, interactive animations to support marketing campaigns",
      "Optimized animation smoothness and load performance applying lazy-loading/code-splitting",
      "Ensured SEO and accessibility readiness (semantic HTML, metadata, performance best practices)",
    ],
  },
];
