// src/commands/index.js
import Help from "./Help";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Skills from "./Skills";
import Media from "./Media";
import Education from "./Education";

export const commands = {
  "$help": Help,
  "$about": About,
  "$experience": Experience,
  "$projects": Projects,
  "$technologies": Technologies,
  "$skills": Skills,
  "$media": Media,
  "$education": Education,
};
