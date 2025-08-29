import React from 'react';
import { motion } from 'framer-motion';
import { Package, Sprout, FlaskConical, Settings, GraduationCap, Truck } from 'lucide-react';

const services = [
  {
    title: "NPK Fertilizer",
    description: "Premium NPK fertilizers for enhanced crop growth and maximum yield potential.",
    icon: Package
  },
  {
    title: "Urea Fertilizer",
    description: "High-quality urea fertilizer providing essential nitrogen for healthy plant development.",
    icon: Sprout
  },
  {
    title: "Soil Analysis",
    description: "Professional soil testing services to optimize nutrient management and crop productivity.",
    icon: FlaskConical
  },
  {
    title: "Custom Blends",
    description: "Tailored fertilizer blends designed specifically for your soil and crop requirements.",
    icon: Settings
  },
  {
    title: "Training & Support",
    description: "Expert training programs and ongoing support for farmers and agricultural professionals.",
    icon: GraduationCap
  },
  {
    title: "Distribution Network",
    description: "Reliable distribution network ensuring timely delivery across Nigeria and beyond.",
    icon: Truck
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive agricultural solutions designed to maximize your farming success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card bg-white rounded-xl shadow-lg hover:shadow-xl flex flex-col text-center p-8"
            >
              <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;