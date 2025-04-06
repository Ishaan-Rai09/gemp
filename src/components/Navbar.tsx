'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaMusic, FaMicrophone, FaHome, FaUsers, FaEnvelope, FaDollarSign } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Services', href: '/services', icon: <FaMusic /> },
    { name: 'Studio', href: '/studio', icon: <FaMicrophone /> },
    { name: 'About', href: '/about', icon: <FaUsers /> },
    { name: 'Pricing', href: '/pricing', icon: <FaDollarSign /> },
    { name: 'Contact', href: '/contact', icon: <FaEnvelope /> },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: { 
      opacity: 1,
      x: '0%',
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-40 py-4 px-6 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">The Gem Production</span>
        </Link>

        {/* Desktop Nav */}
        <motion.div 
          className="hidden md:flex space-x-8"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Link 
                href={link.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors duration-200 flex items-center space-x-1"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-[70%] bg-background-light/95 backdrop-blur-md z-50 flex flex-col p-6 md:hidden"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex justify-end mb-10">
          <button
            onClick={() => setIsOpen(false)}
            className="text-foreground p-2"
            aria-label="Close menu"
          >
            <IoMdClose size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          {navLinks.map((link, i) => (
            <motion.div 
              key={link.name}
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <Link 
                href={link.href}
                className="font-medium text-lg flex items-center space-x-3 hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-primary">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
} 