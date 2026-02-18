import { useRef } from "react";
import cvFile from "../assets/Adnan_Hamdan_CV.pdf";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import TypewriterText from "../effects/TypewriterText";
import pfp from "../assets/pfp.png"

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="
    relative h-180 w-120 rounded-xl 
    bg-black 
    border border-green-300/40 
    shadow-[0_0_25px_rgba(138,91,47,0.35)] 
  "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="
    absolute inset-4 
    flex flex-col items-center 
    rounded-xl bg-black 
    border border-green-300/40
    p-3
  "
      >
        {/* IMAGE */}
        <img
          src={pfp}
          alt="Profile"
          style={{ transform: "translateZ(50px)" }}
          className="
            h-70 w-58 
            object-cover rounded-lg 
            border border-green-300/30
            shadow-[0_0_20px_rgba(34,197,94,0.35)]
          "
        />
        <TypewriterText
          text="Adnan Hamdan"
          speed={120}
          style={{ transform: "translateZ(40px)" }}
          className="mt-4 text-green-200 text-lg font-semibold tracking-wide"
        />

        <TypewriterText
          text="Full-Stack Developer"
          speed={250}
          loop={true}
          showCursor={true}
          className="text-green-400 text-sm opacity-80"
        />
        {/* BADGES */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {["JavaScript", "React", "REST-APIs", "Docker", "MongoDB", "Github", "TailwindCSS", "Bootstrap 5", "HTML5 & CSS3", "Node.js", "C", "C#", "Java", "Python"].map((tech) => (
            <span
              key={tech}
              className="
        px-3 py-1 text-xs text-green-300 border border-green-500/40 
        rounded-md bg-black/40 backdrop-blur-sm 
        shadow-[0_0_10px_rgba(34,197,94,0.3)]
        transition-all duration-200 
        hover:scale-105 hover:border-green-400 hover:shadow-[0_0_12px_rgba(34,197,94,0.5)]
      "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* DOWNLOAD CV BUTTON */}
        <a
          href={cvFile}
          download="Adnan_Hamdan_CV.pdf"
          style={{ transform: "translateZ(25px)" }}
          className="
    mt-10 inline-block px-5 py-2 text-sm 
    bg-green-500/20 text-green-300 
    border border-green-500/40 rounded-lg
    shadow-[0_0_12px_rgba(34,197,94,0.4)]
    transition-all duration-300
    hover:bg-green-500/30 hover:text-green-200
    hover:shadow-[0_0_16px_rgba(34,197,94,0.6)]
  "
        >
          <i className="bi bi-download"></i> Download CV
        </a>

        {/* SOCIAL ICONS */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="mt-6 flex justify-center gap-6 text-2xl"
        >
          <a
            href="https://www.linkedin.com/in/adnan-hamdan-475b23375"
            className="
      text-green-300 hover:text-green-100 
      transition-all hover:scale-110
    "
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://github.com/l1t48"
            className="
      text-green-300 hover:text-green-100 
      transition-all hover:scale-110
    "
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="mailto:adnanhmdan7@gmail.com"
            className="
      text-green-300 hover:text-green-100 
      transition-all hover:scale-110
    "
          >
            <i className="bi bi-envelope"></i>
          </a>
        </div>

      </div>

    </motion.div>

  );
};

function Pfp() {
  return (
    <div className="relative flex h-full w-full items-center justify-center xl:mt-0 mt-10">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-lime-500/10 blur-3xl" />
      <TiltCard />

    </div>
  );
}

export default Pfp;
