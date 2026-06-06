import { useState } from "react";

function generateColumns() {
  const columnCount = 40;
  return Array.from({ length: columnCount }, (_, i) => ({
    idx: i,
    // randomize speed columns fall
    duration: 1.5 + Math.random() * 1.5,
    // randomize delay so columns fall at different times (makes it look cooler)
    delay: Math.random() * 0.5,

    // generate random binary content for the column
    content: Array.from({ length: 40 }, () => (Math.random() > 0.5 ? "1" : "0")).join("\n"),
  }));
}

function BinaryFlood({ active }) {
  const [columns] = useState(generateColumns);

  // if animation is not active, render nothing
  if (!active) return null;

  return (
    <div className="binary-flood" aria-hidden="true" data-testid="binary-flood">
      {columns.map((col) => (
        <pre
          key={col.idx}
          className="binary-column"
          style={{
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`,
          }}
        >
          {col.content}
        </pre>
      ))}
    </div>
  );
}

export default BinaryFlood;
