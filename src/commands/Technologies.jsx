import { technologies } from "../data/technologies";

function Technologies() {
  return (
    <div className="mt-3 max-w-4xl border border-green-500/60 rounded-lg p-4 bg-black/60 text-base space-y-6">
      {/* Title */}
      <h2 className="flex items-center gap-2 text-lg font-semibold text-green-200">
        Technologies & Tools
      </h2>

      {/* Categories */}
      {technologies.map((group) => (
        <div key={group.category} className="space-y-1">
          {/* Category name */}
          <h3 className="text-green-300 font-medium text-sm">
            {group.category}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-xs">
            {group.items.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-full border border-green-500/40 text-green-200 bg-black/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Technologies;
