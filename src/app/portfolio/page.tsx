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
      title: 'Studio Sessions',
      artist: 'The Gem Production',
      category: 'production',
      tags: ['Studio Setup', 'Production', 'Equipment'],
      year: '2023',
      image: '/images/portfolio/studio-yellow.jpg',
      description: 'Our state-of-the-art studio setup featuring premium equipment for music production, mixing, and recording.'
    },
    {
      id: 2,
      title: 'Artist Portraits',
      artist: 'Shashank Kainth',
      category: 'production',
      tags: ['Artist', 'Portrait', 'Brand'],
      year: '2023',
      image: '/images/portfolio/producer-black-jacket.jpg',
      description: 'Professional artist portraits for Shashank Kainth (T REAL G), founder and lead producer at The Gem Production.'
    },
    {
      id: 3,
      title: 'Recording Sessions',
      artist: 'Studio Work',
      category: 'recording',
      tags: ['Recording', 'Studio Work', 'Sessions'],
      year: '2023',
      image: '/images/portfolio/studio-recording.jpg',
      description: 'Behind the scenes at our recording sessions, capturing the creative process of music production.'
    },
    {
      id: 4,
      title: 'Performance',
      artist: 'Live Events',
      category: 'session',
      tags: ['Performance', 'Live', 'Events'],
      year: '2023',
      image: '/images/portfolio/performance.jpg',
      description: 'Live performance and event production services, bringing music to life on stage.'
    },
    {
      id: 5,
      title: 'Artist Development',
      artist: 'Fashion & Style',
      category: 'production',
      tags: ['Fashion', 'Style', 'Branding'],
      year: '2023',
      image: '/images/portfolio/producer-white-shirt.jpg',
      description: 'Complete artist development including style consulting and image development for music professionals.'
    },
    {
      id: 6,
      title: 'Vocal Production',
      artist: 'Recording Booth',
      category: 'recording',
      tags: ['Vocal', 'Recording', 'Booth'],
      year: '2023',
      image: '/images/portfolio/vocal-booth.jpg',
      description: 'Professional vocal recording services in our acoustically treated recording booth with top-tier microphones.'
    },
    {
      id: 7,
      title: 'Music Production',
      artist: 'Studio Setup',
      category: 'production',
      tags: ['Music', 'Production', 'Equipment'],
      year: '2023',
      image: '/images/portfolio/studio-main.jpg',
      description: 'Full music production services combining cutting-edge technology with creative expertise.'
    },
    {
      id: 8,
      title: 'Brand Development',
      artist: 'The Gem Production',
      category: 'production',
      tags: ['Brand', 'Logo', 'Identity'],
      year: '2023',
      image: '/images/portfolio/producer-style.jpg',
      description: 'Brand development and visual identity creation for music artists and producers.'
    },
    {
      id: 9,
      title: 'Studio Environment',
      artist: 'Production Space',
      category: 'recording',
      tags: ['Studio', 'Environment', 'Setup'],
      year: '2023',
      image: '/images/portfolio/studio-black.jpg',
      description: 'Our carefully designed studio environment provides the perfect atmosphere for creative music production.'
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
                        <motion.span 
                          className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-primary"
                          whileHover={{ scale: 1.1 }}
                        >
                          <FaPlay />
                        </motion.span>
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
                  <motion.a 
                    href="/contact"
                    className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPlay /> Listen
                  </motion.a>
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
            <motion.a 
              href="/contact"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 mx-auto inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 