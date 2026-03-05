import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/your-username" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/your-username" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-semibold tracking-[0.2em] text-sm uppercase mb-4 block">
            Welcome to my world
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-400">Dineth</span>
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-400 font-light mb-10">
            Full Stack Developer & UI Designer
          </h2>

          <div className="flex space-x-4">
            {socials.map((item, index) => (
              <motion.a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-white/10 text-yellow-400 text-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg shadow-black/50"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="../assets/react.svg" 
              alt="Dineth Profile" 
              className="relative w-72 md:w-[400px] object-cover drop-shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;