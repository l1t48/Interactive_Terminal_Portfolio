function Help() {
  return (
    <div className="mt-2 border border-green-500/60 rounded-lg p-4 bg-black/60 text-base max-w-2xl">
      <div className="font-semibold text-green-300 mb-1">
        Available commands
      </div>

      <p className="text-green-500 mb-3 text-sm">
        Type a command starting with <span className="text-green-200">$</span>, for example{" "}
        <span className="text-green-200">$about</span>.
      </p>

      <div className="grid grid-cols-[140px_1fr] gap-x-4 gap-y-1 font-mono text-sm">
        <span className="text-green-200">$help</span>
        <span className="text-green-400/90">Show this help message</span>

        <span className="text-green-200">$about</span>
        <span className="text-green-400/90">About me</span>

        <span className="text-green-200">$experience</span>
        <span className="text-green-400/90">Work experience</span>

        <span className="text-green-200">$projects</span>
        <span className="text-green-400/90">List of projects</span>

        <span className="text-green-200">$technologies</span>
        <span className="text-green-400/90">Technologies I use</span>

        <span className="text-green-200">$skills</span>
        <span className="text-green-400/90">Skills overview</span>

        <span className="text-green-200">$media</span>
        <span className="text-green-400/90">Social media links</span>

        <span className="text-green-200">$education</span>
        <span className="text-green-400/90">Education background</span>

        <span className="text-green-200">$clear</span>
        <span className="text-green-400/90">Clear the terminal</span>
      </div>
    </div>
  );
}

export default Help;
