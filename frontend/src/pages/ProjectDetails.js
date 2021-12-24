import React from "react";
import Navbar from "../components/Navbar";
import ProjectWriteup from "../components/ProjectWriteup";
import { useParams } from "react-router-dom";
import { ProjectData } from "../projectData";
import NoPage from "./NoPage";

export default function ProjectDetails() {
   const { id } = useParams();
   var data = ProjectData[id];
   if (typeof data == 'undefined'){
      return(
         <NoPage/>
      );
   }
   return (
      <div className="bg-gray-900 w-full h-full">
         <Navbar/>
         <ProjectWriteup/>
      </div>
   );
};