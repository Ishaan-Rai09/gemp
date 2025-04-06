'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaMusic, FaMicrophone, FaHeadphones, FaCompactDisc, FaGuitar, FaVideo, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

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
                
                <motion.a 
                  href="/contact"
                  className="mt-8 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get a Quote
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="py-20 bg-background-light/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Special Offerings</h2>
            <p className="text-lg text-foreground/70">
              Explore our premium packages and additional services designed to take your music to the next level.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-background-light/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <span className="text-primary text-4xl">
                  <FaMusic />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Music Production & Mixing Mastering</h3>
              <p className="text-center mb-6 text-foreground/70">
                Customize your music to suit your taste and needs.
              </p>
              <div className="text-center mb-6">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">₹24,000</span>
                  <span className="text-sm text-green-500 ml-2">15% off</span>
                </div>
                <p className="text-sm text-foreground/50 line-through">₹30,000</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">From concept to completion, we offer full-scale music production encompassing recording, instrumentation, creative sound design, expert vocal production, and remixing services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">Our mixing services deliver professional, balanced sound with sonic enhancement, spatialization techniques, and detailed automation for impactful mixes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">Experience optimized mastering for diverse formats, precision EQ, dynamics, and loudness optimization, along with seamless album sequencing and quality assurance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">With 4 complimentary revisions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">Additional revisions are available for ₹1000 each.</span>
                </li>
              </ul>
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-3 rounded-xl font-medium transition-all text-center bg-primary text-white hover:bg-primary/90"
              >
                Contact Us
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="bg-background-light/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <span className="text-primary text-4xl">
                  <FaHeadphones />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Offline Courses Services</h3>
              <p className="text-center mb-6 text-foreground/70">
                Embark on a journey of musical mastery with our offline courses.
              </p>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-primary">Contact for pricing</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">Led by our Mr. Shashank Kainth, professionally known as "T REAL G" (The Real Gem).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">With over 4+ years of experience in music production, writing, and sound engineering.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">Personalized Instruction: Benefit from one-on-one guidance tailored to your skill level and musical aspirations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">Comprehensive Curriculum: Explore a diverse range of topics, including music theory, production techniques, songwriting fundamentals, and more.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">State-of-the-Art Facilities: Immerse yourself in a conducive learning environment equipped with cutting-edge technology.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">Hands-On Experience: Gain practical experience through interactive exercises, studio sessions, and real-world projects.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-2">•</span>
                  <span className="text-foreground/80 text-sm">Mentorship: Lifetime Mentorship and Guidance.</span>
                </li>
              </ul>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-3 rounded-xl font-medium transition-all text-center bg-primary text-white hover:bg-primary/90"
              >
                Contact Us
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="bg-background-light/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <span className="text-primary text-4xl">
                  <FaMusic />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Visit Our Stores</h3>
              <p className="text-center mb-6 text-foreground/70">
                To explore our catalogue of beats and make a purchase, kindly follow the links provided below.
              </p>
              <div className="text-center mb-8">
                <span className="text-xl font-medium text-foreground/70">Thank you for your interest!</span>
              </div>
              <div className="space-y-4">
                <motion.a
                  href="https://www.upwork.com/freelancers/~01208f3ce28cdf7d2c"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3 px-4 rounded-xl font-medium transition-all text-center bg-[#14a800] text-white hover:bg-[#14a800]/90 flex items-center justify-center"
                >
                  <span className="mr-2">Upwork</span>
                </motion.a>
                <motion.a
                  href="https://open.spotify.com/artist/6bvjcJzdo8UHV1vHOhBLot?si=A5Uyi1FeQViaxyJsdKm5RQ&pi=a-2D3YIyJfRYic"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3 px-4 rounded-xl font-medium transition-all text-center bg-[#1DB954] text-white hover:bg-[#1DB954]/90 flex items-center justify-center"
                >
                  <FaSpotify className="mr-2" /> <span>Spotify</span>
                </motion.a>
                <motion.a
                  href="https://youtube.com/@THEGEMPRODUCTIOS?si=leIMkP3KQ5u8LKQj"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3 px-4 rounded-xl font-medium transition-all text-center bg-[#FF0000] text-white hover:bg-[#FF0000]/90 flex items-center justify-center"
                >
                  <FaYoutube className="mr-2" /> <span>YouTube</span>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/thegem.productions?igsh=MWJreTk4ajlnNG5qNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3 px-4 rounded-xl font-medium transition-all text-center bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] text-white hover:opacity-90 flex items-center justify-center"
                >
                  <FaInstagram className="mr-2" /> <span>Instagram</span>
                </motion.a>
                <motion.a
                  href="https://www.illpeoplemusic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3 px-4 rounded-xl font-medium transition-all text-center bg-[#6366f1] text-white hover:bg-[#6366f1]/90 flex items-center justify-center"
                >
                  <span className="mr-2">illpeople music</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-background">
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
            <motion.a 
              href="/contact"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 mx-auto inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us Now
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 