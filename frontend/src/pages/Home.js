import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Experiences from "../components/Experiences"
import Navbar from "../components/Navbar";

export default function Home() {
   return(
      <div>
         <Navbar />
         <About />
         <Experiences />
         <Projects />
         <Skills />
         <Contact />
      </div>
   );
};