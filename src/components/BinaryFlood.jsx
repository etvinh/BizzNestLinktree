function BinaryFlood({ active }) {
  if (!active) return null;

  const columnCount = 40;
  const columns = Array.from({ length: columnCount }, (_, i) => ({
    id: i,
    duration: 1.5 + Math.random() * 1.5,
    delay: Math.random() * 0.5,
    content: Array.from({ length: 40 }, () => (Math.random() > 0.5 ? "1" : "0")).join("\n"),
  }));

  return (
    <div className="binary-flood" aria-hidden="true">
      {columns.map((col) => (
        <pre
          key={col.id}
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
