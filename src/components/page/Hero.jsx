import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ handleNotImplemented }) => {
  return (
    <section id="home" className="pt-24 md:pt-32 min-h-screen flex items-center hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="gradient-text">Empowering Farmers,</span>
              <br />
              <span className="text-gray-800">Enriching Soil</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed">
              Leading Nigeria's agricultural revolution with premium fertilizers,
              expert soil analysis, and innovative farming solutions since 2003.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3 pulse-green">
  <a href="#products">
    Explore Products
    <ChevronRight className="ml-2 w-5 h-5" />
  </a>
</Button>
<Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-3">
  <a href="#contact">
    Get in Touch
  </a>
</Button>
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative floating-animation hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
  alt="Fertilizer being applied to farmland"
  className="w-full h-96 object-cover"
  src="/fertil.jpg" 
/>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;