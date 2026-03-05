import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="publications" element={<Publications />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="blog/:slug" element={<BlogPost />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
