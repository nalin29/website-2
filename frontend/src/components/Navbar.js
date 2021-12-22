import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-2 md:p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-1 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Nalin Mahajan
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#experiences" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          {/*           
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> 
          */}
          <a href="https://github.com/nalin29" className="mr-5 hover:text-white">
            Github
          </a>
          <a href="https://www.linkedin.com/in/nalin-mahajan-b7b449183" className="mr-5 hover:text-white">
            Linkedin
          </a>
        </nav>
        <div className="hidden md:block">
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-1 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
        </div>
      </div>
    </header>
  );
}