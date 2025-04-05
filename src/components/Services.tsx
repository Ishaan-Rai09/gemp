'use client';

import { motion } from 'framer-motion';
import { FaMusic, FaMicrophone, FaHeadphones, FaCompactDisc, FaGuitar, FaVideo } from 'react-icons/fa';

const services = [
  {
    icon: <FaMusic className="text-3xl" />,
    title: 'Music Production',
    description: 'From concept to final product, we help artists develop their musical vision with our state-of-the-art production capabilities.'
  },
  {
    icon: <FaMicrophone className="text-3xl" />,
    title: 'Recording Services',
    description: 'Professional recording in our acoustically optimized studio spaces with top-tier microphones and preamps.'
  },
  {
    icon: <FaHeadphones className="text-3xl" />,
    title: 'Mixing & Mastering',
    description: 'Polished, industry-standard mixing and mastering to make your tracks sound professional and ready for distribution.'
  },
  {
    icon: <FaCompactDisc className="text-3xl" />,
    title: 'Beat Production',
    description: 'Custom beat creation for artists, producers, and content creators with unlimited revisions until perfection.'
  },
  {
    icon: <FaGuitar className="text-3xl" />,
    title: 'Session Musicians',
    description: 'Access to our network of professional session musicians to enhance your tracks with live instruments.'
  },
  {
    icon: <FaVideo className="text-3xl" />,
    title: 'Music Video Production',
    description: 'Complete music video services from conceptualization to final edit, helping you visualize your music.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-background-light/30 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We offer a comprehensive range of music production services to bring your creative vision to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-background-light/50 backdrop-blur-lg p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(138, 43, 226, 0.3)' }}
            >
              <div className="bg-primary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 font-medium">
            Get Full Pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
} 