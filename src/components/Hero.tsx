'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaHeadphones } from 'react-icons/fa';
import gsap from 'gsap';

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (glowRef.current) {
      // Create the animation for the glow effect
      gsap.to(glowRef.current, {
        opacity: 0.8,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }
  }, []);

  const handlePlayDemo = () => {
    if (audioRef.current) {
      audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
    }
  };

  // Hidden audio element for demo
  const audioElement = (
    <audio ref={audioRef} className="hidden">
      <source src="/demo.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15),transparent_70%)]" />
        
        {/* Animated circular elements */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full border border-primary/20 top-1/2 left-1/2"
          style={{ x: '-50%', y: '-50%' }}
          animate={{ 
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute w-[400px] h-[400px] rounded-full border border-secondary/20 top-1/2 left-1/2"
          style={{ x: '-50%', y: '-50%' }}
          animate={{ 
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Glowing center */}
        <div 
          ref={glowRef}
          className="absolute w-[200px] h-[200px] rounded-full bg-primary/20 blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">The Gem</span> <br />
                <span>Production</span>
              </h1>
              <p className="text-xl text-foreground/80 max-w-lg">
                Where musical ideas transform into polished gems. State-of-the-art production, mixing, and mastering services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button 
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePlayDemo}
              >
                <FaPlay /> Listen Demo
              </motion.button>
              
              <motion.a 
                href="/services"
                className="px-8 py-3 bg-transparent border border-primary/50 hover:border-primary text-foreground rounded-full flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHeadphones /> Our Services
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] rounded-full overflow-hidden border-2 border-white/10">
                  <div className="w-full h-full bg-background-light" />
                </div>
              </div>
              
              {/* You would replace this with an actual image of your studio or equipment */}
              <div className="absolute inset-[10%] rounded-full overflow-hidden border-2 border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center">
                  <span className="text-6xl">🎵</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {audioElement}
    </section>
  );
} 