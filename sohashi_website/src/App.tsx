import React from "react";
import "./css/App.css";
import "./css/About.css";
import "./css/Experience.css";
import "./css/Header.css";
import "./css/Projects.css";
import "./css/Skills.css";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
    </div>
  );
}

export default App;
