'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaLayerGroup, FaVolumeUp, FaMusic, FaCoffee, FaChair, FaTv } from 'react-icons/fa';

export default function StudioPage() {
  const [activeTab, setActiveTab] = useState('main');
  
  const studioRooms = {
    main: {
      title: 'Main Recording Studio',
      description: 'Our flagship recording space features state-of-the-art equipment, perfect acoustics, and a comfortable environment for artists to create their best work.',
      features: [
        '500 sq ft acoustically treated space',
        'SSL console and high-end preamps',
        'Isolated vocal booth',
        'Premium microphone collection',
        'Monitoring through Genelec speakers',
        'Comfortable seating and creative atmosphere'
      ],
      equipment: [
        'SSL AWS 948 Console',
        'Pro Tools HDX System',
        'Universal Audio Apollo X8P Interface',
        'Neumann U87 Microphone',
        'Neve 1073 Preamps',
        'Avalon VT-737SP Channel Strip'
      ]
    },
    live: {
      title: 'Live Room',
      description: 'Our spacious live room is perfect for band recordings, ensemble performances, and capturing the natural sound of acoustic instruments.',
      features: [
        '1200 sq ft with variable acoustics',
        'Drum riser with isolation options',
        'Piano nook with Yamaha C7 grand piano',
        'High ceilings for natural reverb',
        'Multiple isolation booths',
        'Direct visual connection to control room'
      ],
      equipment: [
        'Drum kit (DW Collector\'s Series)',
        'Bass amps (Ampeg, Fender)',
        'Guitar amps (Marshall, Fender, Vox)',
        'Yamaha C7 Grand Piano',
        'Hammond B3 Organ with Leslie',
        'Various vintage instruments'
      ]
    },
    mix: {
      title: 'Mixing Suite',
      description: 'A dedicated space for mixing and mastering, featuring precise acoustics and a hybrid analog/digital workflow.',
      features: [
        'Perfectly calibrated listening environment',
        'Multiple monitor options for reference',
        'Hybrid analog and digital setup',
        'Collection of vintage compressors and EQs',
        'Analog summing capabilities',
        'Mastering-grade conversion'
      ],
      equipment: [
        'Dangerous 2-Bus+ Summing Mixer',
        'Focal, Yamaha, and Auratone monitors',
        'Pultec EQP-1A Equalizers',
        'Universal Audio 1176 Compressors',
        'Manley Massive Passive EQ',
        'Bricasti M7 Reverb'
      ]
    },
    lounge: {
      title: 'Artist Lounge',
      description: 'A relaxing space for artists to unwind, collaborate, and find inspiration between recording sessions.',
      features: [
        'Comfortable seating areas',
        'Kitchenette with refreshments',
        'Large screen TV and entertainment system',
        'Collaborative workspaces',
        'Natural lighting with city views',
        'Private bathroom and shower'
      ],
      equipment: [
        'High-speed Wi-Fi throughout',
        'Coffee, tea, and refreshment bar',
        '65" 4K Smart TV',
        'Bluetooth sound system',
        'Selection of instruments for songwriting',
        'Creative resources and reference library'
      ]
    }
  };
  
  const tabItems = [
    { id: 'main', label: 'Main Studio', icon: <FaLayerGroup /> },
    { id: 'live', label: 'Live Room', icon: <FaVolumeUp /> },
    { id: 'mix', label: 'Mixing Suite', icon: <FaMusic /> },
    { id: 'lounge', label: 'Artist Lounge', icon: <FaCoffee /> }
  ];
  
  const activeRoom = studioRooms[activeTab as keyof typeof studioRooms];
  
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
            <h1 className="text-5xl font-bold mb-6">Our <span className="gradient-text">Studio</span></h1>
            <p className="text-xl text-foreground/70">
              Step inside The Gem Production studios, where creativity flourishes in our state-of-the-art recording facilities designed for optimal sound and comfort.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-background-light/50 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/10 shadow-xl shadow-primary/5 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-video w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center">
                <span className="text-6xl">🎧</span>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-background-light/30 backdrop-blur-sm rounded-2xl p-6 sticky top-24 border border-primary/10">
                <h3 className="text-2xl font-bold mb-6">Studio Spaces</h3>
                
                <div className="flex flex-col space-y-3">
                  {tabItems.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                        activeTab === tab.id 
                          ? 'bg-primary text-white' 
                          : 'hover:bg-background-light'
                      }`}
                    >
                      <span className={activeTab === tab.id ? 'text-white' : 'text-primary'}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-foreground/10">
                  <h4 className="font-bold mb-4">Book A Tour</h4>
                  <p className="text-sm text-foreground/70 mb-4">
                    Experience our studio in person. Schedule a tour with one of our engineers.
                  </p>
                  <motion.a
                    href="/contact"
                    className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 inline-block text-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Schedule Tour
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-background-light/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
                <h2 className="text-3xl font-bold mb-4">{activeRoom.title}</h2>
                <p className="text-lg text-foreground/70 mb-10">
                  {activeRoom.description}
                </p>
                
                <div className="relative aspect-video w-full mb-10 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    {activeTab === 'main' && <FaLayerGroup className="text-6xl opacity-40" />}
                    {activeTab === 'live' && <FaVolumeUp className="text-6xl opacity-40" />}
                    {activeTab === 'mix' && <FaMusic className="text-6xl opacity-40" />}
                    {activeTab === 'lounge' && <FaCoffee className="text-6xl opacity-40" />}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FaChair className="text-primary" /> Features
                    </h3>
                    <ul className="space-y-3">
                      {activeRoom.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FaTv className="text-primary" /> Equipment
                    </h3>
                    <ul className="space-y-3">
                      {activeRoom.equipment.map((equipment, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{equipment}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Record?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Contact us today to book studio time and start creating your next masterpiece with The Gem Production.
            </p>
            <motion.a
              href="/contact"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 mx-auto inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Studio Time
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 