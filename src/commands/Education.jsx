function Education() {
  return (
    <div className="mt-3 max-w-2xl border border-green-500/60 rounded-lg p-4 bg-black/60 text-base">

      {/* Title */}
      <h2 className="flex items-center gap-2 text-lg font-semibold text-green-200">
        <span>Education</span>
      </h2>

      {/* University + Degree */}
      <p className="mt-3 text-green-100 font-medium">
        Karlstad University, Sweden — B.Sc. in Computer Science
      </p>

      {/* Dates */}
      <p className="text-sm text-green-400 italic">
        Aug 2022 – June 2025
      </p>

      {/* Short description (optional) */}
      <p className="mt-3 text-sm text-green-200 leading-relaxed">
        Completed a Bachelor of Science focused on software development, system
        programming, and modern full-stack technologies. Gained hands-on 
        experience in C programming, front-end and back-end development, 
        database systems, and quality testing. Built several production-ready 
        academic and industry-collaborative projects, developing strong 
        problem-solving and software engineering skills.
      </p>

    </div>
  );
}

export default Education;
