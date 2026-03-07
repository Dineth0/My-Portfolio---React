import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/dine.png'; 

const AboutSection: React.FC = () => {
  return (
    <section id="aboutme" className="py-20 bg-[#1a1a1a] text-white px-6">
      <div className="max-w-7xl mx-auto">
        
     
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-yellow-400 pb-2"
          >
            About Me
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            <div className="relative group">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-yellow-400 rounded-2xl -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-300"></div>
              
              <img 
                src={aboutImg} 
                alt="Dineth Osanka" 
                className="w-64 md:w-80 h-[350px] md:h-[450px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-400">
              I'm Dineth Osanka Nakandala
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              I am a 24-year-old Passionate Software Engineering undergraduate at IJSE with hands-on experience in building full-stack web applications.
              My ultimate goal is to excel as a Full Stack Developer in the tech industry. 
              I am always eager to learn and integrate the latest technologies into my projects to build 
              efficient and modern solutions.
            </p>

            

            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;