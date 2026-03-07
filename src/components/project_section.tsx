import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import tictactoeImg from '../assets/tiktakteo.png';
import lmsImg from '../assets/lms.png';
import serenityImg from '../assets/serenity.png';
import tradyImg from '../assets/treditional.png';
import foodieImg from '../assets/food.png';
import FansImg from '../assets/fans11.png';

const projects = [
  {
    title: "Labor Management",
    category: "Enterprise System",
    description: "Enterprise system for tracking labor efficiency and MVC optimization.",
    image: lmsImg,
    github: "https://github.com/Dineth0/Final-Project",
    tags: ["Java", "MySQL", "Jasper"]
  },
  {
    title: "Serenity Center",
    category: "Mental Health",
    description: "Therapy management platform with appointment tracking and Hibernate.",
    image: serenityImg,
    github: "https://github.com/Dineth0/ORM-CW",
    tags: ["Hibernate", "JavaFX"]
  },
  {
    title: "Tic Tac Toe",
    category: "Game Dev",
    description: "Interactive game logic with optimized move validation algorithms.",
    image: tictactoeImg,
    github: "https://github.com/Dineth0/tictacteo_game",
    tags: ["Java", "JavaFX"]
  },
  {
    title: "Sri Lankan Traditional Experience",
    category: "Web Application",
    description: "Showcasing Sri Lankan heritage with a modern web interface.",
    image: tradyImg,
    github: "https://github.com/Dineth0/TraditionalExperience-SpringBoot",
    tags: ["SpringBoot","JavaScript", "Html" ,"CSS"]
  },
  {
    title: "DON Foodie",
    category: "Web Application",
    description: "A recipe discovery and meal planning platform for food enthusiasts.",
    image: foodieImg,
    github: "https://github.com/Dineth0/FoodRecipies-React",
    tags: ["React","Typescript", "ExpressJs" ,"Tailwind CSS","Redux","Mongo DB"]
  },
  {
    title: "FANS 11",
    category: "Mobile Application",
    description: "A sports-centric mobile app built for fan engagement and updates.",
    image: FansImg,
    github: "https://github.com/Dineth0/Fans11-MobileApp",
    tags: ["React Native","Nativewind", "Firebase"]
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section id="myworks" className="py-12 bg-[#080808] text-white px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-yellow-400 pb-2 text-yellow-400"
                  >
                    Projects
                  </motion.h2>
                </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isMobile = project.category === "Mobile Application";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[280px] rounded-2xl overflow-hidden bg-[#111] border border-white/5"
              >
                {isMobile ? (
                  <>
                    <img 
                      src={project.image} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                    />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105 z-10"
                    />
                  </>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/75 transition-colors duration-500 z-10"></div>

                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[9px] uppercase tracking-[0.2em] bg-yellow-400 text-black px-2 py-0.5 rounded font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1 drop-shadow-lg">{project.title}</h3>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-5 z-30 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-gray-300 text-[12px] mb-3 max-w-xs leading-snug">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] border border-white/20 px-1.5 py-0.5 rounded text-gray-400 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full text-[10px] font-bold hover:bg-yellow-400 transition-colors"
                      >
                        <FaGithub size={14}/> Github
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center w-7 h-7 rounded-full border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-all"
                      >
                        <FaExternalLinkAlt size={10} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-20"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;