import React from "react";
import LinkButton from "./components/LinkButton.jsx";
import "./common.css";

class App extends React.Component {
  render() {
    return (
      <div className="name">
        <h1>Ethan Vinh</h1>
        <LinkButton url="https://www.linkedin.com/in/etvinh" label="LinkedIn" />
        <LinkButton url="https://github.com/etvinh" label="GitHub" />
        <LinkButton url="/resume.pdf" label="Resume" />
      </div>
    );
  }
}

export default App;