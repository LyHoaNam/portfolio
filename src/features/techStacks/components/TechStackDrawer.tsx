"use client";

import { TechnicalSkillList } from "@src/features/techStacks/components/TechnicalSkillList";
import { useTechStackDrawer } from "@src/features/techStacks/hooks/useTechStackDrawer";
import { Button } from "components/ui/Button";
import { Typography } from "components/ui/Typography";

export const TechStackDrawer = () => {
  const { handleClose, isOpen } = useTechStackDrawer();

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label="Technical skills"
      className={`fixed top-0 right-0 z-50 h-screen w-[min(96vw,42rem)] border-l-2 bg-cream transition-transform duration-300 ease-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-4 py-3">
          <Typography variant="heading" size="lg">
            Technical Skills
          </Typography>
          <Button onClick={handleClose}>CLOSE</Button>
        </div>

        <TechnicalSkillList />
      </div>
    </aside>
  );
};
