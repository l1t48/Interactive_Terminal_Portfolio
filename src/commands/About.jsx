function About() {
  return (
    <div className="mt-3 max-w-2xl border border-green-500/60 rounded-lg p-4 bg-black/60 text-base leading-relaxed">
      {/* Name + degree */}
      <h2 className="flex items-center gap-2 text-lg font-semibold text-green-200">
        <span>Adnan Hamdan — B.Sc. in Computer Science</span>
      </h2>

      {/* Role line */}
      <p className="mt-1 text-sm text-green-300">
        Full-Stack Developer | Cybersecurity Enthusiast
      </p>

      {/* Main paragraph */}
      <p className="mt-3 text-sm text-green-100">
        A recently graduated Computer Science B.Sc. with over 6 years of academic
        and project-based programming experience, starting from high school through
        university. Skilled in front-end, back-end, and full-stack web development,
        as well as mobile and desktop application development. Possesses a solid
        foundation in TUI- and system-based programming using low-level languages
        such as C, and a strong grasp of network fundamentals and cybersecurity
        principles. Additionally, I have a hobbyist interest in penetration testing.
        Eager to apply my skills to real-world projects and continue growing as a
        software developer.
      </p>
    </div>
  );
}

export default About;
