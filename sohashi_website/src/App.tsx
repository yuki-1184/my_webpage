import React from "react";
import "./css/App.css";
import "./css/About.css";
import "./css/Experience.css";
import "./css/Header.css";
import "./css/Projects.css";
import "./css/Skills.css";
import Header from "./pages/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
}

export default App;
