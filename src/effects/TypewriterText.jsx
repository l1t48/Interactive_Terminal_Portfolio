// TypewriterText.jsx
import { useState, useEffect } from "react";

function TypewriterText({
  text,
  speed = 60,
  className = "",
  style,
  loop = false,              // enable infinite loop
  delayBeforeRestart = 1200, // pause before restarting (ms)
  showCursor = false,        // optional blinking cursor
  cursorChar = "|"           // cursor character
}) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  // Reset when text changes
  useEffect(() => {
    setIndex(0);
    setDisplayed("");
  }, [text]);

  useEffect(() => {
    // Still typing
    if (index < text.length) {
      const timeout = setTimeout(() => {
        const nextIndex = index + 1;
        setIndex(nextIndex);
        setDisplayed(text.slice(0, nextIndex));
      }, speed);

      return () => clearTimeout(timeout);
    }

    // Finished typing; restart if loop is enabled
    if (loop) {
      const timeout = setTimeout(() => {
        setIndex(0);
        setDisplayed("");
      }, delayBeforeRestart);

      return () => clearTimeout(timeout);
    }

    // If not looping and done, do nothing
  }, [index, text, speed, loop, delayBeforeRestart]);

  return (
    <p style={style} className={className}>
      {displayed}
      {showCursor && (
        <span className="opacity-80 animate-pulse">{cursorChar}</span>
      )}
    </p>
  );
}

export default TypewriterText;
