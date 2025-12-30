import { skills } from "../data/skills";

function Skills() {
  return (
    <div className="mt-3 max-w-3xl border border-green-500/60 rounded-lg p-4 bg-black/60 text-base space-y-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-green-200">
        Skills & Knowledge Areas
      </h2>

      {skills.map((section) => (
        <div key={section.category} className="space-y-1">
          <h3 className="text-green-300 font-medium text-sm">
            {section.category}
          </h3>

          <div className="flex flex-wrap gap-2 text-xs">
            {section.items.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-full border border-green-500/40 text-green-200 bg-black/40"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Skills;
