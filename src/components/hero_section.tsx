import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaDownload } from 'react-icons/fa'; 
import hero from '../assets/osa.png';
import myCV from '../assets/Dineth_Nakandala_CV.pdf';

const HeroSection: React.FC = () => {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Dineth0" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/dineth-nakandala-2b8aa42b4/" },
    { icon: <FaFacebookF />, link: "https://www.facebook.com/dineth.nakandala" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/dinethnakandala/" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#080808] text-white pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-semibold tracking-[0.2em] text-sm uppercase mb-4 block">
            Welcome to my world
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Hi, I'm <span className="text-yellow-400">Dineth</span>
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-400 font-light mb-10">
            Full Stack Developer
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            
            <motion.a 
              href={myCV}
              download="Dineth_Nakandala_CV.pdf" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-400/10"
            >
              <FaDownload size={16} /> Download CV
            </motion.a>

            <div className="flex space-x-4">
              {socials.map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xl hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-black/50"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative flex justify-center items-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-[80px] group-hover:bg-yellow-400/40 transition-all duration-700 scale-110 -z-10"></div>
            <div className="absolute -inset-4 border border-white/5 rounded-full group-hover:border-yellow-400/30 transition-all duration-700 animate-pulse"></div>
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-white/10 group-hover:border-yellow-400 transition-colors duration-500 bg-[#111] shadow-2xl z-10">
              <img 
                src={hero}
                alt="Dineth Profile" 
                className="w-full h-full object-cover object-top md:object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;