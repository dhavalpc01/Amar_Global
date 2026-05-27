import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Globe, Menu, X, Ship, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-nav py-3 shadow-lg shadow-navy-950/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-green-400 text-white shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform duration-350">
              <Globe className="w-5 h-5 animate-pulse-slow" />
              <Ship className="w-3 h-3 absolute -bottom-1 -right-1 text-slate-100 bg-navy-900 rounded-full p-0.5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary-400 transition-colors">
              ZEPHYR<span className="text-primary-500 font-light">GLOBAL</span>
            </span>
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all relative py-1 hover:text-white ${
                    isActive 
                      ? 'text-primary-400' 
                      : 'text-slate-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-500 to-green-300 rounded-full animate-fade-in" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            {/* CTA Button */}
            <NavLink 
              to="/contact" 
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-xl group bg-gradient-to-br from-primary-600 to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-800 transition-transform hover:scale-102 active:scale-98 shadow-md shadow-primary-500/10 mt-2"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-navy-950 rounded-xl group-hover:bg-opacity-0">
                Get a Quote
              </span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-navy-900 focus:outline-none transition-colors border border-slate-800/40"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100 border-b border-slate-800/40' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-3 bg-navy-950/95 backdrop-blur-xl border-t border-slate-800/20">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-primary-950/40 text-primary-400 border-l-4 border-primary-500'
                    : 'text-slate-300 hover:bg-navy-900 hover:text-white'
                }`
              }
            >
              {link.name}
              <ChevronRight className="w-4 h-4 opacity-50" />
            </NavLink>
          ))}
          <div className="px-4 pt-2">
            <NavLink
              to="/contact"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-primary-600 to-green-500 hover:from-primary-500 hover:to-green-400 shadow-lg shadow-primary-500/10"
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
