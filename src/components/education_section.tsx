import React from 'react';
import { motion } from 'framer-motion';

import mihinduImg from '../assets/mihindu.png';
import aquinasImg from '../assets/aqus.png';
import openImg from '../assets/open.png';
import htbcImg from '../assets/htbc.png';
import ijseImg from '../assets/ijse.png';

const educationData = [
  { id: 1, school: "Mihindu Central College", year: "2006 - 2020", img: mihinduImg, side: "left" },
  { id: 2, school: "Aquinas College", year: "2022", img: aquinasImg, side: "right" },
  { id: 3, school: "Open University", year: "2023", img: openImg, side: "left" },
  { id: 4, school: "HTBC Campus", year: "2023 (3 Months)", img: htbcImg, side: "right" },
  { id: 5, school: "IJSE", year: "2024 - Present", img: ijseImg, side: "left" },
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0e0e0e] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-yellow-400 pb-2 text-yellow-400"
          >
            Education
          </motion.h2>
        </div>

        <div className="relative">
          
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-600 rounded-full"></div>

          {educationData.map((item, index) => (
            <div key={item.id} className={`relative flex items-center justify-between mb-12 w-full ${
              item.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}>
              
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-400 border-4 border-[#0e0e0e] rounded-full z-10 shadow-[0_0_10px_#f7c600]"></div>

              <motion.div 
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`ml-12 md:ml-0 md:w-[45%] p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-yellow-400/30 transition-all duration-300 group shadow-lg`}
              >
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-16 h-16 bg-white/5 p-2 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <img src={item.img} alt={item.school} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-yellow-400 mb-1">{item.school}</h4>
                    <span className="text-gray-400 font-medium text-sm bg-white/5 px-3 py-1 rounded-full">{item.year}</span>
                  </div>
                </div>
              </motion.div>

              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EducationSection;