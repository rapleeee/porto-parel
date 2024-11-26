"use client";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import ProjectGallery from "./components/ProjectGallery";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";



export default function Home() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <ProjectGallery />
      <Certificate />
      <Contact/>
    </BrowserRouter>
  );
}
