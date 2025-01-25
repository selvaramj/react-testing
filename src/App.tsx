import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Greet from "./components/greet/greet.tsx";
import Application from "./components/application/application.tsx";
import Skills from "./components/skills/skills.tsx";
import Mui from "./components/MUI/Mui.tsx";

function App() {
  return (
    <div className="App">
      <Mui />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Greet name="Selvam" />
      <Application />
      <Skills skills={["html", "css", "javascript"]} />
    </div>
  );
}

export default App;
