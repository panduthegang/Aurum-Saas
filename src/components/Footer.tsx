import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-32 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-24">
           <h2 className="text-[12vw] leading-[0.8] font-serif text-white opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default select-none text-center">
             AURUM
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl text-white font-serif mb-8">Start the conversation.</h3>
            <div className="flex flex-col items-start gap-4">
              <a href="mailto:hello@aurum.com" className="text-4xl md:text-5xl font-light text-stone-300 hover:text-white transition-colors flex items-center gap-4 group">
                hello@aurum.com 
                <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-8">Explore</h4>
            <ul className="space-y-4 font-light">
              <li><Link to="/" className="hover:text-white hover:translate-x-2 transition-all duration-300 block">Home</Link></li>
              <li><Link to="/about" className="hover:text-white hover:translate-x-2 transition-all duration-300 block">The Studio</Link></li>
              <li><Link to="/" className="hover:text-white hover:translate-x-2 transition-all duration-300 block">Projects</Link></li>
              <li><Link to="/" className="hover:text-white hover:translate-x-2 transition-all duration-300 block">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-8">Headquarters</h4>
            <address className="not-italic space-y-2 mb-8 font-light">
              <p>1200 Architecture Blvd,</p>
              <p>Suite 500</p>
              <p>New York, NY 10012</p>
            </address>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-stone-600">
          <p>&copy; {new Date().getFullYear()} AURUM Architects.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;