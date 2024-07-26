/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default App;
