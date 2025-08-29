import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Leaf } from 'lucide-react';

const About = () => {
  const aboutPoints = [
    {
      icon: Award,
      title: "Our Heritage",
      description: "Since 2003, we've been committed to revolutionizing agriculture in Nigeria, helping thousands of farmers achieve unprecedented yields.",
    },
    {
      icon: Users,
      title: "Our Mission",
      description: "To boost agricultural productivity and enhance food security across Nigeria through innovative fertilizer solutions and expert agricultural support.",
    },
    {
      icon: Leaf,
      title: "Our Impact",
      description: "Over two decades of empowering farmers with premium fertilizers, contributing to Nigeria's agricultural growth and food sustainability.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Yobe Fertilizer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2003 with RC No. 499495, we've been at the forefront of Nigeria's agricultural transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {aboutPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                alt="Modern fertilizer blending plant with stacked fertilizer bags"
                className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1582055954836-a97b4bc4a802" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;