# Terminal Portfolio

> An interactive, terminal-inspired developer portfolio built with React + Vite — featuring a command-driven interface, 3D animated profile card, and typewriter effects.

**Live Demo →** [interactive-terminal-portfolio.vercel.app](https://interactive-terminal-portfolio.vercel.app)

---

## Overview

Terminal Portfolio reimagines the traditional developer portfolio as a fully interactive command-line experience. Visitors explore the portfolio by typing commands — discovering projects, skills, education, and experience in a way that reflects the developer behind it.

The layout pairs a functional terminal on the left with a 3D tilt-animated profile card on the right, creating a split-screen that blends utility with personality.

---

## Features

- **Command-driven interface** — navigate content entirely through typed terminal commands
- **3D profile card** — mouse-tracked tilt animation powered by Framer Motion
- **Typewriter effects** — animated text rendering with optional looping and cursor blink
- **Modular command system** — each command maps to an isolated React component, making it trivial to extend
- **Custom terminal scrollbar** — styled to match the green-on-black terminal aesthetic
- **Responsive layout** — stacked on mobile, split-screen on desktop (`xl:` breakpoint)
- **Fade-in animations** — smooth entrance transitions on every command output

---

## Commands

| Command         | Output                          |
|-----------------|---------------------------------|
| `$help`         | List all available commands     |
| `$about`        | Bio and background              |
| `$experience`   | Work history                    |
| `$projects`     | Categorised project showcase    |
| `$technologies` | Tools and technology stack      |
| `$skills`       | Knowledge areas and skill sets  |
| `$media`        | Social and contact links        |
| `$education`    | Academic background             |
| `$clear`        | Clear the terminal output       |

---

## Tech Stack

| Layer         | Technology                              |
|---------------|-----------------------------------------|
| Framework     | React 18 + Vite                         |
| Styling       | Tailwind CSS v4                         |
| Animation     | Framer Motion                           |

---

## Project Structure

```
├── LICENSE
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── Adnan_Hamdan_CV.pdf
│   │   ├── pfp.png
│   │   └── terminal-icon.png
│   ├── commands
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Help.jsx
│   │   ├── Media.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Technologies.jsx
│   │   └── index.js
│   ├── components
│   │   ├── Pfp.jsx
│   │   └── Terminal.jsx
│   ├── data
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── technologies.js
│   ├── effects
│   │   └── TypewriterText.jsx
│   ├── main.jsx
│   └── styles
│       └── main.css
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- Node.js `v20.19.0` or higher
- npm

### Installation

```bash
git clone https://github.com/l1t48/Interactive_Terminal_Portfolio.git
cd Interactive_Terminal_Portfolio
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Adding a New Command

1. Create a component in `src/components/`, e.g. `Contact.jsx`
2. Register it in `src/commands/index.js`:

```js
import Contact from "./Contact";

export const commands = {
  // ...existing commands
  "$contact": Contact,
};
```

3. Add an entry to the `$help` command table in `src/components/Help.jsx`

That's it — no routing configuration, no additional wiring needed.

---

## Adding a New Project

Open `src/data/projects.js` and append to either `softwareProjects` or `webProjects`:

```js
{
  title: "Project Name",
  overview: "Short description of what the project does.",
  url: "https://github.com/your-username/repo",
  liveUrl: "https://your-demo-link.com",   // or null
  tags: ["React", "Node.js", "MongoDB"],
  is_public: true,
}
```

---

## Author

**Adnan Hamdan** — Full-Stack Developer

---
