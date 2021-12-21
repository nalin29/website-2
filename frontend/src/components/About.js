import React from "react";
export default function About() {
   return (
      <section id="about">
         <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
               <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Hello, I'm Nalin.
                  <br className="hidden lg:inline-block" />
                  An aspiring Software Engineer
               </h1>
               <p className="mb-8 leading-relaxed">
                  As a CS student at UT who is interested in solving the problems of today and 
                  tomorrow in the digital sphere, I am willing to quickly learn on the fly and 
                  also be proactive by taking full advantage of my 
                  free time to gain new skills. 
               </p>
               <div className="flex justify-center">
                  <a
                     href="#contact"
                     className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                     Contact Me
                  </a>
                  <a
                     href="#projects"
                     className="ml-4 inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                     Projects
                  </a>
                  <a
                     href="./resume.pdf"
                     className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                     Resume
                  </a>
               </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
               <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="./coding.svg"
               />
            </div>
         </div>
      </section>
   );
}