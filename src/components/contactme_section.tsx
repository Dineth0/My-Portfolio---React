import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaMedium, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdPerson } from 'react-icons/md';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-[#080808] text-white px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-yellow-400 mb-3"
          >
            Contact Me
          </motion.h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-4 tracking-tight"> Get in Touch</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Feel free to reach out and share your experience with me. I'd love to hear your feedback and thoughts. 
                Email me with any inquiries, I'll be happy to set up a meeting with you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-yellow-400/50 transition-colors">
                  <MdPerson className="text-yellow-400" size={20} />
                </div>
                <span className="text-sm text-gray-300">Dineth Osanka Nakandala</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-yellow-400/50 transition-colors">
                  <MdLocationOn className="text-yellow-400" size={20} />
                </div>
                <span className="text-sm text-gray-300">No 15, 2nd Avenue, Greenpark, Yatiyana, Agalawaththa</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-yellow-400/50 transition-colors">
                  <MdEmail className="text-yellow-400" size={20} />
                </div>
                <a href="mailto:dinethnakandala10@gmail.com" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                  dinethnakandala10@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-yellow-400/50 transition-colors">
                  <MdPhone className="text-yellow-400" size={20} />
                </div>
                <a href="tel:+94779978399" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                  +94 77-997-8399
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/Dineth0" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/dineth-nakandala-2b8aa42b4/" },
                { icon: <FaFacebook />, link: "https://www.facebook.com/dineth.nakandala" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/dinethnakandala/" },
                { icon: <FaMedium />, link: "https://medium.com/@dinethnakandala10" },
                { icon: <FaTwitter />, link: "https://x.com/DinethNakandala" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111] p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-6 tracking-tight">Hire Me</h3>
            
            <form className="space-y-4">
              <div className="space-y-1">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400/50 transition-colors"
                />
              </div>
              
              <div className="space-y-1">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400/50 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400/50 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400/50 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition-all duration-300 transform active:scale-95 shadow-lg shadow-yellow-400/10"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;