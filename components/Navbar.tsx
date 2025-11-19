import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavRoute } from '../types';
import { BRAND_LOGO } from '../constants';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: NavRoute) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: NavRoute.HOME },
    { name: 'Portfolio', path: NavRoute.PORTFOLIO },
    { name: 'Catalog', path: NavRoute.CATALOG },
    { name: 'Contact', path: NavRoute.CONTACT },
  ];

  const handleNav = (path: NavRoute) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNav(NavRoute.HOME)}
          >
            <div className="relative">
               <img 
                 src={BRAND_LOGO.src} 
                 alt={BRAND_LOGO.alt} 
                 className="h-12 w-12 rounded-full object-cover bg-stone-50 p-0.5 border-2 border-stone-800 group-hover:border-wood-400 transition-colors" 
               />
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider hidden sm:block">TRUNC <span className="text-wood-400">Woodworks</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currentRoute === item.path
                    ? 'text-wood-400 bg-stone-800'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-900 border-b border-stone-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.path)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  currentRoute === item.path
                    ? 'text-wood-400 bg-stone-800'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;