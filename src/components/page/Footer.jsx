import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
             <img 
              src="https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/d225b0a9f9f4cd6422d6b71dec200f1e.png" 
              alt="Yobe Fertilizer Blending Company Logo" 
              className="h-36 w-auto mb-4" 
            />
            <p className="text-gray-400">
              Empowering farmers and enriching soil across Nigeria since 2003.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors block">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors block">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors block">Services</a>
              <a href="#products" className="text-gray-400 hover:text-white transition-colors block">Products</a>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Services</span>
            <div className="space-y-2">
              <p className="text-gray-400">NPK Fertilizer</p>
              <p className="text-gray-400">Urea Fertilizer</p>
              <p className="text-gray-400">Soil Analysis</p>
              <p className="text-gray-400">Custom Blends</p>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Info</span>
            <div className="space-y-2">
              <p className="text-gray-400">Gujba, Yobe State, Nigeria</p>
              <p className="text-gray-400">info@yobefertilizer.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Yobe fertilizer Blending Company. All rights reserved. RC No. 499495
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;