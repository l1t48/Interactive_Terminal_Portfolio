// src/commands/Experience.jsx

function Experience() {
  return (
    <div className="mt-3 max-w-2xl border border-green-500/60 rounded-lg p-4 bg-black/60 text-base space-y-6">

      {/* Title */}
      <h2 className="flex items-center gap-2 text-lg font-semibold text-green-200">
        <span>Experience</span>
      </h2>

      {/* ---------------------------------------------------- */}
      {/* 1. Techseed - Front-End Developer                     */}
      {/* ---------------------------------------------------- */}
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

      {/* ---------------------------------------------------- */}
      {/* 2. Industry-Collaborative Mobile App Project         */}
      {/* ---------------------------------------------------- */}
      <div>
        <p className="text-green-100 font-medium">
          Industry-Collaborative Project — Mobile App Developer
        </p>

        <p className="text-sm text-green-400 italic">
          Aug 2024 – Nov 2024
        </p>

        <ul className="mt-3 text-sm text-green-200 leading-relaxed list-disc ml-5 space-y-1">
          <li>Built Android UIs for dashboard, leaderboard, activity submission, accessibility settings, login, and registration.</li>
          <li>Implemented core feature logic for leaderboard and accessibility settings in Java.</li>
          <li>Worked with Java, XML layouts, and Android application structure.</li>
        </ul>
      </div>

    </div>
  );
}

export default Experience;
