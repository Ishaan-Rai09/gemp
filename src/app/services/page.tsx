'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaMusic, FaMicrophone, FaHeadphones, FaCompactDisc, FaGuitar, FaVideo } from 'react-icons/fa';

const services = [
  {
    id: 'production',
    icon: <FaMusic className="text-4xl" />,
    title: 'Music Production',
    description: 'From concept to final product, we help artists develop their musical vision with our state-of-the-art production capabilities.',
    details: [
      'Composition and arrangement',
      'Beat production and programming',
      'Vocal production and tuning',
      'Sound design and synthesis',
      'Full project production from concept to master'
    ],
    image: '/images/production.jpg'
  },
  {
    id: 'recording',
    icon: <FaMicrophone className="text-4xl" />,
    title: 'Recording Services',
    description: 'Professional recording in our acoustically optimized studio spaces with top-tier microphones and preamps.',
    details: [
      'Vocal recording and processing',
      'Live instrument recording',
      'Drum tracking in isolated room',
      'Voice over recording for commercials and podcasts',
      'Remote recording sessions via high-quality streaming'
    ],
    image: '/images/recording.jpg'
  },
  {
    id: 'mixing',
    icon: <FaHeadphones className="text-4xl" />,
    title: 'Mixing & Mastering',
    description: 'Polished, industry-standard mixing and mastering to make your tracks sound professional and ready for distribution.',
    details: [
      'Detailed mixing with premium plugins',
      'Stem mixing options',
      'Analog and digital mastering chains',
      'Specialized masters for streaming services',
      'Post-production audio cleanup and enhancement'
    ],
    image: '/images/mixing.jpg'
  },
  {
    id: 'beats',
    icon: <FaCompactDisc className="text-4xl" />,
    title: 'Beat Production',
    description: 'Custom beat creation for artists, producers, and content creators with unlimited revisions until perfection.',
    details: [
      'Custom beat production in any genre',
      'Beat leasing and exclusive sales',
      'Sample pack creation',
      'Beat modifications and edits',
      'Producer collaboration opportunities'
    ],
    image: '/images/beats.jpg'
  },
  {
    id: 'musicians',
    icon: <FaGuitar className="text-4xl" />,
    title: 'Session Musicians',
    description: 'Access to our network of professional session musicians to enhance your tracks with live instruments.',
    details: [
      'Guitar, bass, and keyboard session work',
      'String and brass arrangements',
      'Drum and percussion recording',
      'Background vocals and harmonies',
      'Full band recording services'
    ],
    image: '/images/musicians.jpg'
  },
  {
    id: 'video',
    icon: <FaVideo className="text-4xl" />,
    title: 'Music Video Production',
    description: 'Complete music video services from conceptualization to final edit, helping you visualize your music.',
    details: [
      'Concept development and storyboarding',
      'Full video production crew',
      'Studio and location shooting',
      'Post-production and visual effects',
      'Promotion and distribution strategy'
    ],
    image: '/images/video.jpg'
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our <span className="gradient-text">Services</span></h1>
            <p className="text-xl text-foreground/70">
              At The Gem Production, we offer comprehensive music production services designed to bring your creative vision to life. From initial concept to final master, we're with you every step of the way.
            </p>
          </motion.div>
          
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              id={service.id}
              className={`py-20 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/20 shadow-xl shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center">
                    <span className="text-6xl">{service.icon}</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="bg-primary/10 p-4 rounded-xl w-20 h-20 flex items-center justify-center mb-6 text-primary">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-foreground/70 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button 
                  className="mt-8 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get a Quote
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="py-20 bg-background-light/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Contact us today to discuss your project needs and how The Gem Production can help bring your musical vision to life.
            </p>
            <motion.button 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 