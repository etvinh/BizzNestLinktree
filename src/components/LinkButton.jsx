import "../common.css";

function LinkButton({ url, label }) {
  return (
    <a className="link-button" href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export default LinkButton;
