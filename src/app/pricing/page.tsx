'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaMicrophone, FaHeadphones, FaMusic, FaPen, FaGuitar, FaCompactDisc, FaPlay, FaSpotify, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('individual');
  
  const pricingTiers = {
    individual: [
      {
        title: 'Vocal Recording',
        price: '₹500',
        unit: 'per hour',
        description: 'Have high quality recordings at our studio',
        icon: <FaMicrophone className="text-4xl text-primary" />,
        features: [
          'We record high-quality vocals for your tracks.',
          'We offer 3 complimentary revisions to ensure your complete satisfaction with the final product.'
        ],
        popular: false,
        ctaText: 'Contact Us',
        link: '/contact'
      },
      {
        title: 'Vocal Mixing',
        price: '₹6,000',
        unit: '',
        description: 'Transform your vocal recordings into polished masterpieces with our comprehensive vocal mixing package',
        icon: <FaHeadphones className="text-4xl text-primary" />,
        features: [
          'Fine-tune your vocal performances with precision using Melodyne (Extra charges included for Melodyne).',
          'Seamlessly integrate and mix your vocals with pre-selected music of your choice.',
          'We offer 3 complimentary revisions to ensure your complete satisfaction with the final product.',
          'Additional revisions are available for ₹500 each.'
        ],
        popular: true,
        ctaText: 'Contact Us',
        link: '/contact'
      },
      {
        title: 'Mixing & Mastering',
        price: '₹15,000',
        unit: '',
        description: 'Unlock the full potential of your music with our Mixing & Mastering services',
        icon: <FaMusic className="text-4xl text-primary" />,
        features: [
          'Comprehensive track mixing, encompassing both music and vocal elements.',
          'Dedicated music mixing for instrumental tracks.',
          'Proficient whole-track mastering.',
          'With 3 complimentary revisions.',
          'Additional revisions are available for ₹500 each.'
        ],
        popular: false,
        ctaText: 'Contact Us',
        link: '/contact'
      }
    ],
    production: [
      {
        title: 'Music Production & Mixing Mastering',
        price: '₹24,000',
        unit: '',
        oldPrice: '₹30,000',
        discount: '15% off',
        description: 'Customize your music to suit your taste and needs',
        icon: <FaMusic className="text-4xl text-primary" />,
        features: [
          'From concept to completion, we offer full-scale music production encompassing recording, instrumentation, creative sound design, expert vocal production, and remixing services.',
          'Our mixing services deliver professional, balanced sound with sonic enhancement, spatialization techniques, and detailed automation for impactful mixes.',
          'Experience optimized mastering for diverse formats, precision EQ, dynamics, and loudness optimization, along with seamless album sequencing and quality assurance.',
          'With 4 complimentary revisions.',
          'Additional revisions are available for ₹1000 each.'
        ],
        popular: true,
        ctaText: 'Contact Us',
        link: '/contact'
      },
      {
        title: 'Offline Courses Services',
        price: 'Custom',
        unit: 'pricing',
        description: 'Embark on a journey of musical mastery with our offline courses',
        icon: <FaHeadphones className="text-4xl text-primary" />,
        features: [
          'Led by our Mr. Shashank Kainth, professionally known as "T REAL G" (The Real Gem).',
          'With over 4+ years of experience in music production, writing, and sound engineering.',
          'Personalized Instruction: Benefit from one-on-one guidance tailored to your skill level and musical aspirations.',
          'Comprehensive Curriculum: Explore a diverse range of topics, including music theory, production techniques, songwriting fundamentals, and more.',
          'State-of-the-Art Facilities: Immerse yourself in a conducive learning environment equipped with cutting-edge technology.',
          'Hands-On Experience: Gain practical experience through interactive exercises, studio sessions, and real-world projects.',
          'Mentorship: Lifetime Mentorship and Guidance.'
        ],
        popular: false,
        ctaText: 'Contact Us',
        link: '/contact'
      },
      {
        title: 'Full Album Production',
        price: 'Custom',
        unit: 'quote',
        description: 'End-to-end album production services',
        icon: <FaCompactDisc className="text-4xl text-primary" />,
        features: [
          'Production planning and conceptualization.',
          'Recording, mixing, and mastering for all tracks.',
          'Album sequencing and arrangement.',
          'Project management throughout the production.',
          'Discounted rates compared to individual tracks.'
        ],
        popular: false,
        ctaText: 'Get Quote',
        link: '/contact'
      }
    ]
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our <span className="gradient-text">Pricing</span></h1>
            <p className="text-xl text-foreground/70">
              Transparent pricing for our professional music production services
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex bg-background-light/30 backdrop-blur-sm p-1 rounded-full border border-primary/10">
              <button
                onClick={() => setActiveTab('individual')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'individual' 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                Individual Services
              </button>
              <button
                onClick={() => setActiveTab('production')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'production' 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                Production Packages
              </button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers[activeTab as keyof typeof pricingTiers].map((tier, index) => (
              <motion.div
                key={tier.title}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                variants={fadeInUp}
                className={`relative bg-background-light/30 backdrop-blur-sm rounded-2xl overflow-hidden border ${
                  tier.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-primary/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      POPULAR
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center justify-center mb-5 h-16">
                    {tier.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-2">{tier.title}</h3>
                  <p className="text-foreground/70 text-center mb-6 h-12 line-clamp-2">
                    {tier.description}
                  </p>
                  
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.unit && <span className="text-foreground/70 ml-1">{tier.unit}</span>}
                    {tier.oldPrice && (
                      <div className="mt-1">
                        <span className="text-sm text-foreground/50 line-through">{tier.oldPrice}</span>
                        {tier.discount && <span className="text-sm text-green-500 ml-2">{tier.discount}</span>}
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mt-1 mr-2">•</span>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.a
                    href={tier.link}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-xl font-medium transition-all ${
                      tier.popular 
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'bg-background-light hover:bg-background-light/80 text-foreground border border-primary/20'
                    }`}
                  >
                    {tier.ctaText}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="max-w-4xl mx-auto mt-20 bg-background-light/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
                <p className="text-foreground/70 mb-6">
                  We understand that every project is unique. Contact us for a customized quote tailored to your specific needs and requirements.
                </p>
                <motion.a 
                  href="/contact"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Custom Quote
                </motion.a>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="bg-background-light/50 p-4 rounded-xl">
                    <h3 className="font-medium mb-2">Session Musicians</h3>
                    <p className="text-sm text-foreground/70">Available at additional cost based on requirements</p>
                  </div>
                  <div className="bg-background-light/50 p-4 rounded-xl">
                    <h3 className="font-medium mb-2">Rush Delivery</h3>
                    <p className="text-sm text-foreground/70">50% additional charge for expedited services</p>
                  </div>
                  <div className="bg-background-light/50 p-4 rounded-xl">
                    <h3 className="font-medium mb-2">Bulk Discounts</h3>
                    <p className="text-sm text-foreground/70">Available for multiple tracks or extended bookings</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-foreground/70 mb-8">
              Have questions about our pricing or services? Find answers to common questions below.
            </p>
            
            <div className="space-y-4">
              <div className="bg-background-light/30 backdrop-blur-sm rounded-xl p-6 text-left border border-primary/10">
                <h3 className="font-bold mb-2">Do prices include taxes?</h3>
                <p className="text-foreground/70">All prices are exclusive of applicable taxes, which will be added at the time of billing.</p>
              </div>
              <div className="bg-background-light/30 backdrop-blur-sm rounded-xl p-6 text-left border border-primary/10">
                <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-foreground/70">We accept bank transfers, major credit cards, and digital payment services. A 50% advance is required to book our services.</p>
              </div>
              <div className="bg-background-light/30 backdrop-blur-sm rounded-xl p-6 text-left border border-primary/10">
                <h3 className="font-bold mb-2">What's your cancellation policy?</h3>
                <p className="text-foreground/70">Cancellations made 48 hours before the scheduled session will receive a full refund of the advance. Later cancellations may be subject to a cancellation fee.</p>
              </div>
              <div className="bg-background-light/30 backdrop-blur-sm rounded-xl p-6 text-left border border-primary/10">
                <h3 className="font-bold mb-2">How long does the process typically take?</h3>
                <p className="text-foreground/70">Turnaround times vary by service: Vocal Recording (same day), Vocal Mixing (3-5 days), Mixing & Mastering (7-10 days), and Full Production (2-4 weeks).</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-20 text-center bg-background-light/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Visit Our Stores</h2>
            <p className="text-foreground/70 mb-6">
              To explore our catalogue of beats and make a purchase, kindly follow the links provided below.
            </p>
            <div className="flex flex-wrap gap-4 max-w-md mx-auto">
              <motion.a
                href="https://www.upwork.com/freelancers/~01208f3ce28cdf7d2c"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-4 rounded-xl font-medium transition-all text-center bg-[#14a800] text-white hover:bg-[#14a800]/90 flex items-center justify-center"
              >
                <span>Upwork</span>
              </motion.a>
              <motion.a
                href="https://www.illpeoplemusic.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-4 rounded-xl font-medium transition-all text-center bg-[#6366f1] text-white hover:bg-[#6366f1]/90 flex items-center justify-center"
              >
                <span>illpeople music</span>
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-4 max-w-md mx-auto mt-4">
              <motion.a
                href="https://open.spotify.com/artist/6bvjcJzdo8UHV1vHOhBLot?si=A5Uyi1FeQViaxyJsdKm5RQ&pi=a-2D3YIyJfRYic"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-4 rounded-xl font-medium transition-all text-center bg-[#1DB954] text-white hover:bg-[#1DB954]/90 flex items-center justify-center"
              >
                <FaSpotify className="mr-2" /> <span>Spotify</span>
              </motion.a>
              <motion.a
                href="https://youtube.com/@THEGEMPRODUCTIOS?si=leIMkP3KQ5u8LKQj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-4 rounded-xl font-medium transition-all text-center bg-[#FF0000] text-white hover:bg-[#FF0000]/90 flex items-center justify-center"
              >
                <FaYoutube className="mr-2" /> <span>YouTube</span>
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-4 max-w-md mx-auto mt-4">
              <motion.a
                href="https://www.instagram.com/thegem.productions?igsh=MWJreTk4ajlnNG5qNw=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-4 rounded-xl font-medium transition-all text-center bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] text-white hover:opacity-90 flex items-center justify-center"
              >
                <FaInstagram className="mr-2" /> <span>Instagram</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 