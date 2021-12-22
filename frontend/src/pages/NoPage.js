import React from "react";
import {Link, link} from "react-router-dom"

export default function NoPage() {
   return (
      <section id="NoPage">
         <div className="flex items-center justify-center w-screen h-screen bg-gray-800 flex-col">
         <div><p class="text-5xl text-white md:text-7xl lg:text-9xl text-center">404 <br className="lg:inline-block" /></p> <p className="mb-8 leading-relaxed text-center">Sorry this Page Does Not Exist</p></div>
         <div><a className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" href="/">Back To Home Page</a></div>
         </div>
      </section>
   );
};
