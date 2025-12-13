import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Studio', path: '/about' },
    { label: 'Projects', path: '/projects' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? 'bg-stone-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="z-50 group relative">
            <h1 className="text-2xl md:text-3xl font-display font-medium tracking-[0.2em] text-white mix-blend-difference">
              AURUM
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-[10px] tracking-[0.25em] uppercase font-bold text-white/80 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                   location.pathname === link.path ? 'text-white after:w-full' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="border border-white/20 px-8 py-3 text-[10px] tracking-[0.25em] uppercase text-white hover:bg-white hover:text-stone-950 transition-all duration-500">
              Inquire
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-white mix-blend-difference"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-950 z-40 transition-all duration-700 ease-in-out flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-serif text-stone-300 hover:text-white hover:italic transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;