// @flow strict

// import Image from "next/image";

import { work_skills } from "@/utils/data/skills_full";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";


// Fix the skillsImage so you can map it properly

import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>


      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-6">
          {
            work_skills.map(work_skill => (
              <GlowCard key={work_skill.id} identifier={`work_skill-${work_skill.id}`}>
                <div className="p-3 relative text-white">
                  <Image
                    src="./blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />


                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {work_skill.duration}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {work_skill.Title}
                      </p>
                      <p className="text-sm sm:text-base">{work_skill.Workplace}</p>
                    </div>

                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {work_skill.Skills}
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

export default Skills;