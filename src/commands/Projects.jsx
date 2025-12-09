import { softwareProjects, webProjects } from "../data/projects";

function ProjectCard({ project }) {
  return (
    <div className="border border-green-500/40 rounded-lg p-3 bg-black/50">
      {/* Title + state */}
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className="text-green-200 font-semibold">
          {project.title}
        </span>
        <span className="text-xs uppercase tracking-wide text-green-500">
          {project.state === "done" ? "DONE" : project.state}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-0.5 rounded-full border border-green-500/60 text-green-200 hover:bg-green-500/10"
        >
          Source
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-0.5 rounded-full border border-green-500/60 text-green-200 hover:bg-green-500/10"
          >
            Live Demo
          </a>
        )}
      </div>

      {/* Overview */}
      <p className="text-sm text-green-100 mb-2 leading-relaxed">
        {project.overview}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full border border-green-500/40 text-green-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="mt-3 max-w-4xl border border-green-500/60 rounded-lg p-4 bg-black/60 text-base space-y-6">
      {/* Title */}
      <h2 className="flex items-center gap-2 text-lg font-semibold text-green-200">
        <span>Projects</span>
      </h2>

      {/* Software Projects */}
      <section>
        <h3 className="text-sm font-semibold text-green-300 mb-2">
          Software & System Projects (C, Java, C#)
        </h3>
        <div className="space-y-3">
          {softwareProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Web Projects */}
      <section>
        <h3 className="text-sm font-semibold text-green-300 mb-2">
          Web Projects (Front-End & UI)
        </h3>
        <div className="space-y-3">
          {webProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
