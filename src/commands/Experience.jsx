function Experience() {
  return (
    <div className="mt-3 max-w-2xl border border-green-500/60 rounded-lg p-4 bg-black/60 text-base space-y-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-green-200">
        <span>Experience</span>
      </h2>
      <div>
        <p className="text-green-100 font-medium">
          Techseed, Karlstad — Front-End Developer
        </p>
        <p className="text-sm text-green-400 italic">
          Dec 2024 – June 2025
        </p>
        <ul className="mt-3 text-sm text-green-200 leading-relaxed list-disc ml-5 space-y-1">
          <li>Architected and optimized a machine-logging platform for monitoring machine data.</li>
          <li>Developed and refined the front-end interface using modern design principles.</li>
          <li>Integrated UI components with backend APIs and machine-data services.</li>
        </ul>
      </div>

    </div>
  );
}

export default Experience;
