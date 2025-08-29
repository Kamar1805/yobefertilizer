import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ handleNotImplemented }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#board', label: 'Our Board' },
    /*{ href: '#management', label: 'Management Team' }, */
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-32">
          <motion.a
            href="#home"
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/d225b0a9f9f4cd6422d6b71dec200f1e.png" 
              alt="Yobe Fertilizer Blending Company Logo" 
              className="h-20 md:h-28 w-auto" 
            />
          </motion.a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-green-600 transition-colors">
                {link.label}
              </a>
            ))}
            <Button onClick={handleNotImplemented} className="bg-[#9cd948] hover:bg-[#8bc34a] text-green-900 font-bold">
              Get Quote
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            className="lg:hidden py-4 border-t border-green-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-700 hover:text-green-600 transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <Button onClick={handleNotImplemented} className="bg-[#9cd948] hover:bg-[#8bc34a] text-green-900 font-bold w-fit mt-2">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;