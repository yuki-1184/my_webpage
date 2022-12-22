import React from "react";
import "./css/App.css";
import "./css/About.css";
import "./css/Experience.css";
import "./css/Header.css";
import "./css/Projects.css";
import "./css/Skills.css";
// import { SkipNavContent } from "@chakra-ui/skip-nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='projects' element={<Projects />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
