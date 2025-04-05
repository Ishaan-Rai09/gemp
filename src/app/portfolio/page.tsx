'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaPlay, FaMusic, FaMicrophone, FaHeadphones, FaGuitar, FaVideo } from 'react-icons/fa';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaMusic /> },
    { id: 'production', label: 'Music Production', icon: <FaMusic /> },
    { id: 'recording', label: 'Recording', icon: <FaMicrophone /> },
    { id: 'mixing', label: 'Mixing & Mastering', icon: <FaHeadphones /> },
    { id: 'session', label: 'Session Work', icon: <FaGuitar /> },
    { id: 'video', label: 'Music Videos', icon: <FaVideo /> }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Midnight Dreams',
      artist: 'Luna Eclipse',
      category: 'production',
      tags: ['Electronic', 'Ambient', 'Production'],
      year: '2023',
      image: '/images/project1.jpg',
      description: 'Full album production for Luna Eclipse\'s debut release. A blend of atmospheric electronic sounds with haunting vocals.'
    },
    {
      id: 2,
      title: 'Rhythm & Soul',
      artist: 'Marcus Jones',
      category: 'mixing',
      tags: ['R&B', 'Soul', 'Mixing'],
      year: '2023',
      image: '/images/project2.jpg',
      description: 'Mixing and mastering services for Marcus Jones\' chart-topping R&B album, which reached #3 on the Billboard charts.'
    },
    {
      id: 3,
      title: 'Electric Waves',
      artist: 'Synthia',
      category: 'production',
      tags: ['Synthwave', 'Electronic', 'Production'],
      year: '2022',
      image: '/images/project3.jpg',
      description: 'Complete production for Synthia\'s sophomore album, featuring vintage synthesizers and modern production techniques.'
    },
    {
      id: 4,
      title: 'Mountain High',
      artist: 'The Climbers',
      category: 'recording',
      tags: ['Folk', 'Acoustic', 'Recording'],
      year: '2023',
      image: '/images/project4.jpg',
      description: 'Live recording session for The Climbers\' unplugged album, capturing the authenticity of their acoustic performance.'
    },
    {
      id: 5,
      title: 'Urban Stories',
      artist: 'Street Poets Collective',
      category: 'mixing',
      tags: ['Hip Hop', 'Rap', 'Mixing'],
      year: '2022',
      image: '/images/project5.jpg',
      description: 'Mixing and production assistance for this groundbreaking hip hop collective\'s debut album.'
    },
    {
      id: 6,
      title: 'Neon Lights',
      artist: 'Glow',
      category: 'video',
      tags: ['Pop', 'Electronic', 'Music Video'],
      year: '2023',
      image: '/images/project6.jpg',
      description: 'Music video production for Glow\'s hit single "Neon Lights", featuring cutting-edge visual effects and choreography.'
    },
    {
      id: 7,
      title: 'Strings Attached',
      artist: 'Classical Reimagined',
      category: 'session',
      tags: ['Classical', 'Crossover', 'Session Work'],
      year: '2022',
      image: '/images/project7.jpg',
      description: 'Session musician coordination and recording for this unique project blending classical compositions with modern elements.'
    },
    {
      id: 8,
      title: 'Desert Wind',
      artist: 'Sahara Sounds',
      category: 'production',
      tags: ['World Music', 'Fusion', 'Production'],
      year: '2023',
      image: '/images/project8.jpg',
      description: 'Full production services for this world music fusion album, incorporating traditional instruments with modern production.'
    },
    {
      id: 9,
      title: 'Heavy Heart',
      artist: 'Metal Militia',
      category: 'recording',
      tags: ['Metal', 'Rock', 'Recording'],
      year: '2022',
      image: '/images/project9.jpg',
      description: 'Recording services for Metal Militia\'s powerful new album, capturing their high-energy performance and technical prowess.'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
  };
  
  const selectedProjectData = selectedProject !== null 
    ? projects.find(project => project.id === selectedProject) 
    : null;
  
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
            <h1 className="text-5xl font-bold mb-6">Our <span className="gradient-text">Portfolio</span></h1>
            <p className="text-xl text-foreground/70">
              Explore our collection of music production projects, featuring artists across various genres and styles.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                  filter === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-background-light/50 hover:bg-background-light text-foreground/80 hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layoutId={`project-${project.id}`}
                  className="bg-background-light/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10 cursor-pointer hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleProjectClick(project.id)}
                  whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(138, 43, 226, 0.2)' }}
                >
                  <div className="relative aspect-video w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center group">
                      <span className="text-4xl">{project.category === 'video' ? '🎬' : '🎵'}</span>
                      <motion.div
                        className="absolute inset-0 bg-primary/40 opacity-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <FaPlay className="text-primary ml-1" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-primary mb-3">{project.artist}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-background-light/50 text-foreground/70 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-foreground/70 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-foreground/60">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && selectedProjectData && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProjectData.id}`}
              className="bg-background-light rounded-2xl overflow-hidden border border-primary/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center">
                  <span className="text-6xl">{selectedProjectData.category === 'video' ? '🎬' : '🎵'}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-1">{selectedProjectData.title}</h2>
                    <p className="text-primary text-xl">{selectedProjectData.artist}</p>
                  </div>
                  <p className="text-foreground/60">{selectedProjectData.year}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProjectData.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Project Details</h3>
                  <p className="text-foreground/80 mb-4">
                    {selectedProjectData.description}
                  </p>
                  <p className="text-foreground/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi vel consectetur euismod, nisi nisl consectetur nisi.
                  </p>
                </div>
                
                <div className="flex gap-4 justify-end mt-8">
                  <motion.button 
                    className="px-6 py-2 border border-primary/50 hover:border-primary text-foreground rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </motion.button>
                  <motion.button 
                    className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPlay /> Listen
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <section className="py-20 bg-background-light/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Next Hit?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Let's collaborate and bring your musical vision to life with The Gem Production.
            </p>
            <motion.button 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 