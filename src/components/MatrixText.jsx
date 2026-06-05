import { useState, useEffect, useRef } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>?";

// return random char in SCRAMBLE_CHARS
function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

// scramble text by replacing input text with random chars
function scramble(text) {
  return text
    .split("")
    .map((ch) => (ch === " " ? " " : randomChar()))
    .join("");
}

function MatrixText({ text, framesPerChar = 8, delay = 0 }) {
  const [display, setDisplay] = useState(() => scramble(text));
  const frameRef = useRef(null);

  useEffect(() => {
    let frameCount = 0;

    function tick() {
      frameCount++;
      // determin settled letter count
      const settledCount = Math.floor(frameCount / framesPerChar);

      let next = "";

      for (let i = 0; i < text.length; i++) {

        // if char is space or settled show original char, else show random char
        if (text[i] === " " || i < settledCount) {
          next += text[i];
        } else {
          next += randomChar();
        }
      }
      // update state
      setDisplay(next);

      // if all chars not settled req next frame
      if (settledCount < text.length) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }

    // wait `delay` ms, then start animation
    const timeoutId = setTimeout(() => {
      frameRef.current = requestAnimationFrame(tick);
    }, delay);

    // cleanup on unmount: kill pending timeout and pending RAF
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, framesPerChar, delay]);

  return <span aria-label={text}>{display}</span>;
}

export default MatrixText;
