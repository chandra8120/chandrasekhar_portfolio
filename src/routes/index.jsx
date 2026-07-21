import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Resume from "../Resume";


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
