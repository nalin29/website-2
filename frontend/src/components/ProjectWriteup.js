import React from "react";
import { useParams } from "react-router-dom";
import { ProjectData } from "../projectData";
import Navbar from "./Navbar";

export default function ProjectWriteup() {
   const { id } = useParams();
   var data = ProjectData[id];
   var title = data.title;
   var body = data.body;
   return (
         <section id="projects" className="text-gray-200 min-h-screen w-full bg-gray-900">
            <div className="container px-5 py-10 mx-auto lg:px-40">
               <h1 className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-white">
                  {title}
               </h1>
               <div className="sm:mx-auto p-6 bg-gray-900">
                  {body}
               </div>
            </div>
         </section>
   );
};