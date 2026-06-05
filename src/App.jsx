import React from "react";
import LinkButton from "./components/LinkButton.jsx";
import MatrixText from "./components/MatrixText.jsx";
import "./common.css";

class App extends React.Component {
  render() {
    return (
      <div className="name">
        <h1><MatrixText text="Ethan Vinh" /></h1>
        <LinkButton url="https://www.linkedin.com/in/etvinh" label="LinkedIn" delay={1000} />
        <LinkButton url="https://github.com/etvinh" label="GitHub" delay={2000} />
        <LinkButton url="/resume.pdf" label="Resume" delay={3000} />
      </div>
    );
  }
}

export default App;