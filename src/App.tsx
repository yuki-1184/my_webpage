import React, { useEffect } from "react";
// import { SkipNavContent } from "@chakra-ui/skip-nav";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./App.css";

const LOCAL_STORAGE_KEY = "ThemeColor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
