import React from "react";
import LinkButton from "./components/LinkButton.jsx";
import MatrixText from "./components/MatrixText.jsx";
import FloodButton from "./components/FloodButton.jsx";
import "./common.css";

class App extends React.Component {
  render() {
    return (
      <div className="name">
        <div className="profile-wrapper">
          <img className="profile" src={`${import.meta.env.BASE_URL}profile.png`} alt="Ethan Vinh" />
        </div>
        <h1><MatrixText text="Ethan Vinh" /></h1>
        <p className="subtitle"><MatrixText text="Software Developer" delay={500} /></p>
        <LinkButton url="https://www.linkedin.com/in/etvinh" label="LinkedIn" delay={1000} />
        <LinkButton url="https://github.com/etvinh" label="GitHub" delay={2000} />
        <LinkButton url={`${import.meta.env.BASE_URL}resume.pdf`} label="Resume" delay={3000} />
        <FloodButton label="[ Escape the Matrix ]" />
      </div>
    );
  }
}

export default App;
