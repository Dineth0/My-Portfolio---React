import React from 'react';
import { 
  FaGithub, FaLinkedin, FaArrowUp,  
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#000000] pt-20 pb-10 px-6 border-t border-white/5 overflow-hidden">
      
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">
        
        

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black text-white mb-6 tracking-tighter">
              DINETH<span className="text-yellow-400">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              Developing high-end digital experiences through clean code and minimalist design. 
              Always pushing boundaries.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-[10px] uppercase tracking-[0.3em] opacity-50">Sitemap</h4>
            <ul className="space-y-3 text-gray-300 text-sm font-semibold">
              <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#aboutme" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#myworks" className="hover:text-yellow-400 transition-colors">Works</a></li>
              <li><a href="#contactme" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-[10px] uppercase tracking-[0.3em] opacity-50">Social Media</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <FaGithub />, link: "https://github.com/Dineth0" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/dineth-nakandala-2b8aa42b4/" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/5">
          <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em]">
            © {currentYear} <span className="text-white">Dineth Nakandala</span> / All rights reserved
          </p>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-white hover:text-yellow-400 transition-colors text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            Go to top 
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-400 transition-all">
              <FaArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;