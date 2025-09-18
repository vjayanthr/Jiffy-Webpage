
import React, { useState } from 'react';
import { Page } from '../types';

interface NavLink {
  name: Page;
  path: string;
}

interface NavbarProps {
  navLinks: NavLink[];
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const JiffyLogo: React.FC = () => (
  <span className="text-3xl font-extrabold tracking-tight">Jiffy.</span>
);

const Navbar: React.FC<NavbarProps> = ({ navLinks, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-gray-light">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate(Page.Home)} aria-label="Go to homepage">
            <JiffyLogo />
          </button>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.name)}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  currentPage === link.name ? 'text-brand-black' : 'text-brand-black/60 hover:text-brand-black'
                }`}
              >
                {link.name}
                {currentPage === link.name && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-black rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    onNavigate(link.name);
                    setIsOpen(false);
                  }}
                  className={`text-left text-lg font-medium py-2 ${
                    currentPage === link.name ? 'text-brand-black font-bold' : 'text-brand-black/70'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
