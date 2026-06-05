import MatrixText from "./MatrixText.jsx";
import "../common.css";

function LinkButton({ url, label, delay = 0 }) {
  return (
    <a
      className="link-button"
      href={url}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MatrixText text={label} delay={delay} />
    </a>
  );
}

export default LinkButton;
