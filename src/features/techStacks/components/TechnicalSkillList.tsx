import { TECHNICAL_SKILLS } from "@src/features/techStacks/utils/technicalSkills";
import { Typography } from "components/ui/Typography";

export const TechnicalSkillList = () => {
  return (
    <div className="flex-1 space-y-2 overflow-y-auto px-4 pb-4">
      {TECHNICAL_SKILLS.map((skillGroup) => (
        <section key={skillGroup.category}>
          <Typography
            variant="subheading"
            size="sm"
            className="mb-1 text-retro-blue"
          >
            {skillGroup.category}
          </Typography>
          {skillGroup.items.map((skill) => (
            <Typography
              key={skill}
              variant="mono"
              size="sm"
              className="text-retro-navy text-xs leading-snug md:text-sm"
            >
              • {skill}
            </Typography>
          ))}
        </section>
      ))}
    </div>
  );
};
