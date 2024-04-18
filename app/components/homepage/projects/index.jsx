import React from 'react';
import { projectsData, modified_projects } from '@/utils/data/projects-data';
import ProjectCard from './project-card';


import Image from "next/image";
// import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { work_skills } from "@/utils/data/skills_full";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";



const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Major Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Adamas Audio Section */}


      <div>
        <div className="flex flex-col gap-6">
          {
            modified_projects.map(modified_project => (
              <GlowCard key={modified_project.id} identifier={`work_skill-${modified_project.id}`}>
                <div className="p-3 relative text-white">
                  <Image
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />


                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      Link: {modified_project.github_link}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {modified_project.name}
                      </p>
                      {/* <p className="text-sm sm:text-base">{work_skill.Workplace}</p> */}
                    </div>

                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium">
                        {modified_project.description}
                      </p>
                    </div>



                  </div>

                </div>
              </GlowCard>
            ))
          }
        </div>
      </div>

      
    </div>
  );
};

export default Projects;