import React, { useContext } from "react";
// import { SkipNavContent } from "@chakra-ui/skip-nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import './App.css';

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
