import React from 'react';
import { researchData } from '@/utils/data/projects-data';
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

const Research = () => {
  return (
    <div id='research' className="relative z-50 my-12 lg:my-24">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Research
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-6">
          {
            researchData.map(research => (
              <GlowCard key={research.id} identifier={`research-${research.id}`}>
                <div className="p-3 relative text-white">
                  <Image
                    src="./blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />

                  <div className="flex justify-center mb-4">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {research.duration} • {research.pages}
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-x-8 px-3 py-5">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-base sm:text-xl mb-4 font-medium uppercase">
                        {research.title}
                      </p>
                      
                      <p className="text-sm sm:text-base mb-4 text-gray-200">
                        {research.description}
                      </p>

                      {research.keyContributions && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-[#16f2b3] mb-2">Key Contributions:</p>
                          <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                            {research.keyContributions.map((contribution, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-[#16f2b3] mr-2">•</span>
                                {contribution}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {research.domains && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-[#16f2b3] mb-2">Research Domains:</p>
                          <div className="flex flex-wrap gap-2">
                            {research.domains.map((domain, index) => (
                              <span key={index} className="text-xs bg-[#1a1443] text-gray-300 px-2 py-1 rounded">
                                {domain}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {research.link && (
                        <div className="text-xs sm:text-sm text-[#16f2b3]">
                          <a href={research.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            View Research Paper → {research.link}
                          </a>
                        </div>
                      )}
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

export default Research;
