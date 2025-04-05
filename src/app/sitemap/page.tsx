'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaAngleRight } from 'react-icons/fa';

export default function SitemapPage() {
  const siteMap = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Studio', url: '/studio' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Portfolio', url: '/portfolio' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', url: '/blog' },
        { name: 'FAQs', url: '/faq' },
        { name: 'Careers', url: '/careers' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Privacy Policy', url: '/privacy' },
      ]
    },
    {
      title: 'Blog Categories',
      links: [
        { name: 'Production Tips', url: '/blog?category=production' },
        { name: 'Gear Reviews', url: '/blog?category=gear' },
        { name: 'Industry News', url: '/blog?category=industry' },
        { name: 'Artist Interviews', url: '/blog?category=interviews' },
        { name: 'Music Business', url: '/blog?category=business' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Recording', url: '/services#recording' },
        { name: 'Mixing', url: '/services#mixing' },
        { name: 'Mastering', url: '/services#mastering' },
        { name: 'Music Production', url: '/services#production' },
        { name: 'Songwriting', url: '/services#songwriting' },
        { name: 'Vocal Production', url: '/services#vocal-production' },
      ]
    },
    {
      title: 'Studio',
      links: [
        { name: 'Equipment', url: '/studio#equipment' },
        { name: 'Facilities', url: '/studio#facilities' },
        { name: 'Booking', url: '/studio#booking' },
      ]
    },
  ];

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Site<span className="gradient-text">map</span></h1>
            <p className="text-xl text-foreground/70">
              Find and navigate all pages available on The Gem Production website.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {siteMap.map((section, index) => (
              <motion.div 
                key={section.title}
                className="bg-background-light/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              >
                <h2 className="text-2xl font-bold mb-6 gradient-text">{section.title}</h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.url} 
                        className="flex items-center text-foreground hover:text-primary transition-colors group"
                      >
                        <FaAngleRight className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-20 text-center bg-background-light/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Looking for Something Specific?</h2>
            <p className="text-foreground/70 mb-6">
              If you're having trouble finding what you need, please visit our contact page or send us an email.
            </p>
            <motion.a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 