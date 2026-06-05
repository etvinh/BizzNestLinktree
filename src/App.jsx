import React from "react";
import LinkButton from "./components/LinkButton.jsx";
import MatrixText from "./components/MatrixText.jsx";
import FloodButton from "./components/FloodButton.jsx";
import profileImg from "./assets/profile.png";
import resumePdf from "./assets/resume.pdf";
import "./common.css";

class App extends React.Component {
  render() {
    return (
      <div className="name">
        <div className="profile-wrapper">
          <img className="profile" src={profileImg} alt="Ethan Vinh" />
        </div>
        <h1><MatrixText text="Ethan Vinh" /></h1>
        <p className="subtitle"><MatrixText text="Software Developer" delay={500} /></p>
        <LinkButton url="https://www.linkedin.com/in/etvinh" label="LinkedIn" delay={1000} />
        <LinkButton url="https://github.com/etvinh" label="GitHub" delay={2000} />
        <LinkButton url={resumePdf} label="Resume" delay={3000} />
        <FloodButton label="[ Escape the Matrix ]" />
      </div>
    );
  }
}

export default App;
