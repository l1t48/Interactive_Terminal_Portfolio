import { useState, useRef, useEffect } from "react";
import { commands } from "../commands/index";
import TypewriterText from "../effects/TypewriterText";

function Terminal() {
  const [input, setInput] = useState("$");
  const [history, setHistory] = useState([]);
  const [introVisible, setIntroVisible] = useState(true);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleEnter = () => {
    const cmd = input.trim(); 
    if (cmd === "$clear") {
      setHistory([]); 
      setInput("$");  
      setIntroVisible(false);
      return;
    }
    setHistory((prev) => [...prev, cmd]);
    setInput("$");
  };


  return (
    <div
      className="terminal-window p-4 h-screen text-green-300 overflow-auto text-xl font-mono terminal-scrollbar xl:mt-0 mt-5"
      onClick={() => inputRef.current?.focus()}
    >

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

      <div className="mb-3 space-y-1">
        {history.map((cmd, index) => {
          const CommandComponent = commands[cmd];

          return (
            <div key={index}>
              <div>
                <span className="text-green-400">guest@portfolio</span>
                <span className="text-green-600 ml-1">~</span>
                <span className="text-green-300 ml-2">$</span>
                <span>{cmd.replace(/^\$/, "")}</span>
              </div>

              {CommandComponent ? (
                <div className="animate-fade-in-soft">
                  <CommandComponent />
                </div>

              ) : (
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
