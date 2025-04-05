'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100));
      }
    }, 20);
    
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50"
      animate={{ 
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: progress === 100 ? 'none' : 'auto'
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-32 h-32 relative">
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-primary"
            style={{ borderTopColor: 'transparent' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute inset-3 rounded-full border-4 border-secondary"
            style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute inset-6 rounded-full border-4 border-accent"
            style={{ borderRightColor: 'transparent' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
      
      <motion.h1 
        className="text-3xl font-bold mb-4 gradient-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        The Gem Production
      </motion.h1>
      
      <motion.div 
        className="w-64 h-2 bg-background-light rounded-full overflow-hidden"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "16rem", opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          style={{ width: `${progress}%` }}
        />
      </motion.div>
      
      <motion.p
        className="mt-4 text-sm opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Loading {progress}%
      </motion.p>
    </motion.div>
  );
} 