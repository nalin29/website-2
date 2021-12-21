import { AcademicCapIcon, IdentificationIcon, BriefcaseIcon} from "@heroicons/react/solid";
import React from "react";

export default function Experiences() {
   return (
      <section id="experiences">
         <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-10">
               <BriefcaseIcon className="w-10 inline-block mb-4" />
               <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                  Experience
               </h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div className="p-2 sm:w-1/2 w-full">
                     <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <AcademicCapIcon className="text-cyan-500 w-6 h-6 flex-shrink-0 mr-4" />
                        <span>
                           <div className="title-font font-medium text-white">
                           Masters of Computer Science UT 2023
                           </div>
                           <div>
                              Currently in the process of obtaining my Masters degree by Spring 2023 in the integrated 5-year
                              program at the University of Texas at Austin.
                           </div>
                        </span>
                     </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                     <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <AcademicCapIcon className="text-cyan-500 w-6 h-6 flex-shrink-0 mr-4" />
                        <span>
                           <div className="title-font font-medium text-white">
                              Bachelors of Math and Computer Science UT 2022
                           </div>
                           <div>
                              Graduating as Double Major Math and Computer Science Spring 2022 at the University of Texas at Austin.
                           </div>
                        </span>
                     </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                     <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <IdentificationIcon className="text-cyan-500 w-6 h-6 flex-shrink-0 mr-4" />
                        <span>
                           <div className="title-font font-medium text-white">
                              Incoming SDE Intern Amazon 2022
                           </div>
                           <div>
                              I have accepted an offer to onboard as a Software Development Enginneer Intern at Amazon Summer 2022. 
                              Stay tuned to see what I will accomplish.
                           </div>
                        </span>
                     </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                     <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <IdentificationIcon className="text-cyan-500 w-6 h-6 flex-shrink-0 mr-4" />
                        <span>
                           <div className="title-font font-medium text-white"> 
                              Software Engineer Intern Trend Micro 2021
                           </div>
                           <div>
                              Spearheaded a PoC that shifted cloud services to a local on
                              premise environment; utilizing Java EE, SpringBoot, Gradle,
                              Tomcat Servers, and AWS.
                           </div>
                        </span>
                     </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                     <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <IdentificationIcon className="text-cyan-500 w-6 h-6 flex-shrink-0 mr-4" />
                        <span>
                           <div className="title-font font-medium text-white"> 
                              FRI Peer Mentor 2021
                           </div>
                           <div>
                              Encouraged and supported Freshmen College students to enter
                              research as a part of the FRI program by providing guidance
                              as a peer mentor.
                           </div>
                        </span>
                     </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                     <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <IdentificationIcon className="text-cyan-500 w-6 h-6 flex-shrink-0 mr-4" />
                        <span>
                           <div className="title-font font-medium text-white"> 
                              Research Volunteer at UT BWI Lab 2019-2021
                           </div>
                           <div>
                              Engaged in ground breaking research as an undergraduate
                              student conducted in the BWI Lab with a focus on the topic of
                              HRI (Human-Robot Interaction)
                           </div>
                        </span>
                     </div>
                  </div>
            </div>
         </div>
      </section>
   );
}