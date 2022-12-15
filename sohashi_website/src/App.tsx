import React from "react";
import "./css/App.css";
import "./css/About.css";
import "./css/Experience.css";
import "./css/Header.css";
import "./css/Projects.css";
import "./css/Skills.css";
import { SkipNavContent } from "@chakra-ui/skip-nav";
// import NavBar from "./components/NavBar";
import Layout from './components/Layout';
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <SkipNavContent />
      <Home></Home>
      {/* <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects> */}
    </div>
  );
}

export default App;
