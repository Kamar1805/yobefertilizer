import React from 'react';
import { motion } from 'framer-motion';
import { Package, Leaf, Droplets, Settings2 } from 'lucide-react';

const products = [
  {
    name: "NPK 15-15-15",
    description: "Balanced nutrition for all crop types.",
    icon: Package,
  },
  {
    name: "NPK 20-10-10",
    description: "High nitrogen formula for leafy vegetables.",
    icon: Leaf,
  },
  {
    name: "Urea 46%",
    description: "Premium nitrogen source for maximum growth.",
    icon: Droplets,
  },
  {
    name: "Custom Blends",
    description: "Specially formulated for your specific needs.",
    icon: Settings2,
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium fertilizer products engineered for optimal crop performance and soil health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="product-card bg-white rounded-xl shadow-lg hover:shadow-xl flex flex-col text-center p-8"
            >
              <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <product.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-600 flex-grow">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;