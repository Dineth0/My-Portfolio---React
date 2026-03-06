import React from 'react';
import { motion } from 'framer-motion';

import javaImg from '../assets/java.png';
import mysqlImg from '../assets/mysql.png';
import javafxImg from '../assets/JavaFX.png';
import figmaImg from '../assets/figma.png';
import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import jsImg from '../assets/javascript.png';
import wordImg from '../assets/word.png';
import excelImg from '../assets/excel.png';
import linuxImg from '../assets/linux.png';
import gitImg from '../assets/git.png';
import koyeb from '../assets/koyeb.png';
import vercel from '../assets/vercel.png';
import python from '../assets/python.png';
import firebase from '../assets/firebase.png';
import postgres from '../assets/post.png';
import mongodb from '../assets/mongo.png';
import RNative from '../assets/rnative.png';
import react from '../assets/react.png';
import springboot from '../assets/spring.png';
import postman from '../assets/postman.png';
import typescript from '../assets/ts.png';
import swagger from '../assets/swagger.png';
import render from '../assets/render.png';
import express from '../assets/express.png';


const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", img: htmlImg },
      { name: "CSS", img: cssImg },
      { name: "JavaScript", img: jsImg },
      { name: "TypeScript", img: typescript },
      { name: "React", img: react },
      { name: "React Native", img: RNative },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Java", img: javaImg },
      { name: "Spring Boot", img: springboot },
      { name: "Python", img: python },
      { name: "JavaFX", img: javafxImg },
        { name: "express.Js", img: express },

    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", img: mysqlImg },
      { name: "PostgreSQL", img: postgres },
      { name: "MongoDB", img: mongodb },
      { name: "Firebase", img: firebase },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", img: gitImg },
      { name: "Postman", img: postman },
      { name: "Swagger", img: swagger },
      { name: "Linux", img: linuxImg },
      { name: "Vercel", img: vercel },
      { name: "Render", img: render },
      { name: "Koyeb", img: koyeb },
    ]
  },
  {
    title: "Design & Office",
    skills: [
      { name: "Figma", img: figmaImg },
      { name: "MS Word", img: wordImg },
      { name: "MS Excel", img: excelImg },
    ]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-[#1a1a1a] text-white px-6">
      <div className="max-w-6xl mx-auto"> 
        
        <div className="text-center mb-12"> 
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-3" // Font size අඩු කළා
          >
            My <span className="text-yellow-400">Tech Stack</span>
          </motion.h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-light"> 
            Technology stack and tools I use to build modern applications.
          </p>
        </div>

        <div className="space-y-10"> 
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 mb-6" 
              >
                <h3 className="text-lg font-semibold text-gray-200 uppercase tracking-widest">
                  {category.title}
                </h3>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-yellow-400/30 to-transparent"></div>
              </motion.div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    className="relative group bg-[#111] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center transition-all duration-300" 
                  >
                    <div className="absolute -inset-0.5 bg-yellow-400/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    
                    <div className="relative z-10 w-10 h-10 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <img src={skill.img} alt={skill.name} className="max-w-full max-h-full object-contain" />
                    </div>

                    <span className="relative z-10 text-[10px] font-medium text-gray-400 group-hover:text-yellow-400 transition-colors uppercase tracking-tight text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;