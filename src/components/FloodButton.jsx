import { useState, useRef, useEffect } from "react";
import BinaryFlood from "./BinaryFlood.jsx";

function FloodButton({ label = "[ DECODE ]", duration = 3000 }) {
  const [triggerCount, setTriggerCount] = useState(0);
  const [active, setActive] = useState(false);
  // use timer ref to reset timer on click
  const timerRef = useRef(null);

  const triggerFlood = () => {
    setTriggerCount((c) => c + 1);
    setActive(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActive(false), duration);
  };

  // cleanup on unmount
  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <>
      <BinaryFlood key={triggerCount} active={active} />
      <button className="flood-button" onClick={triggerFlood}>
        {label}
      </button>
    </>
  );
}

export default FloodButton;
