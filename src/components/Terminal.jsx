import { useState, useRef, useEffect } from "react";
import { commands } from "../commands/index";
import TypewriterText from "../effects/TypewriterText";
// ^ This imports your "command map" (example: { "$help": HelpComponent, "$about": AboutComponent, ... })

function Terminal() {
  const [input, setInput] = useState("$");
  // ^ The text currently typed by the user

  const [history, setHistory] = useState([]);
  // ^ Instead of one big output string, we store a list of commands the user typed
  //   Example: ["$help", "$about", "$projects"]

  const [introVisible, setIntroVisible] = useState(true);

  const inputRef = useRef();
  // ^ Used to auto-focus the input field

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  // ^ When the terminal loads, focus the input automatically


  // ------------------------------------------------------------
  // HANDLE ENTER KEY (running commands)
  // ------------------------------------------------------------
  const handleEnter = () => {
    const cmd = input.trim(); // Clean spaces

    // SPECIAL CASE: clear terminal
    if (cmd === "$clear") {
      setHistory([]); // wipe history
      setInput("$");  // reset input
      setIntroVisible(false);
      return;
    }

    // Add the typed command (example "$help") to the history array
    setHistory((prev) => [...prev, cmd]);

    // Reset input back to "$"
    setInput("$");
  };


  return (
    <div
      className="terminal-window p-4 h-screen text-green-300 overflow-auto text-xl font-mono terminal-scrollbar xl:mt-0 mt-5"
      onClick={() => inputRef.current?.focus()}
    // ^ Clicking anywhere on the terminal focuses the input again
    >

      {/* INTRO / BOOT SEQUENCE ---------------------------- */}
      {introVisible && (
        <div className="mb-4 text-lg leading-relaxed text-green-400 space-y-1">

          <TypewriterText
            text="adnan@portfolio:~$ boot"
            speed={40}
            className="text-green-300"
          />

          <TypewriterText
            text="[ OK ] Interactive portfolio initialized."
            speed={35}
            className="text-green-400"
            style={{ animationDelay: "0.4s" }}
          />

          <TypewriterText
            text="Welcome! Type $help to explore commands."
            speed={30}
            className="text-green-200"
            showCursor={true}
            cursorChar="_"
            style={{ animationDelay: "0.8s" }}
          />

        </div>
      )}

      {/* ------------------------------------------------------------
          HISTORY SECTION
          This renders ALL previous commands + their output
      ------------------------------------------------------------ */}
      <div className="mb-3 space-y-1">

        {/* history.map() loops through every command the user has run */}
        {history.map((cmd, index) => {

          // Take the command string (like "$help")
          // and check if it exists in the command map.
          //
          // Example: commands["$help"] returns Help component.
          // If no match → undefined.
          const CommandComponent = commands[cmd];

          return (
            <div key={index}>

              {/* -------------------------------
                  Show the command line itself
                  Example:
                  $ help
              -------------------------------- */}
              <div>
                <span className="text-green-400">guest@portfolio</span>
                <span className="text-green-600 ml-1">~</span>
                <span className="text-green-300 ml-2">$</span>
                {/* Remove the leading "$" so it doesn't print twice */}
                <span>{cmd.replace(/^\$/, "")}</span>
              </div>


              {/* ----------------------------------------------------
                  COMMAND OUTPUT:
                  - If CommandComponent exists, render it as JSX
                  - If not, show "unknown command" message
              ---------------------------------------------------- */}
              {CommandComponent ? (
                // If command exists in command map, show its UI
                <div className="animate-fade-in-soft">
                  <CommandComponent />
                </div>

              ) : (
                // If command NOT found → show error message
                <div className="mt-1 text-green-500 text-base">
                  Unknown command: <span className="text-green-200">{cmd}</span>
                  <div>
                    Type <span className="text-green-200">$help</span> to see available commands.
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>


      {/* ------------------------------------------------------------
          CURRENT INPUT LINE (the one user is typing now)
      ------------------------------------------------------------ */}
      <div className="flex items-center gap-2">
        <span className="text-green-400">guest@portfolio</span>
        <span className="text-green-600 ml-1">~</span>
        <span className="text-green-300 ml-2">$</span>

        <input
          type="text"
          className="border-0 outline-0 m-0 p-0 bg-transparent flex-1 w-full"
          ref={inputRef}
          value={input.replace(/^\$/, "")}
          onChange={(e) => setInput("$" + e.target.value.replace(/^\$/, ""))}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleEnter();
            }
          }}
        />
      </div>

    </div>
  );
}

export default Terminal;
