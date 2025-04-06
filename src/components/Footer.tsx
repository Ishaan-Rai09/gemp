'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSpotify, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/thegem.productions?igsh=MWJreTk4ajlnNG5qNw==", label: 'Instagram' },
    { icon: <FaYoutube />, href: "https://youtube.com/@THEGEMPRODUCTIOS?si=leIMkP3KQ5u8LKQj", label: 'YouTube' },
    { icon: <FaSpotify />, href: "https://open.spotify.com/artist/6bvjcJzdo8UHV1vHOhBLot?si=A5Uyi1FeQViaxyJsdKm5RQ&pi=a-2D3YIyJfRYic", label: 'Spotify' },
    { icon: <FaWhatsapp />, href: "https://wa.me/919501678746", label: 'WhatsApp' },
    { icon: <FaEnvelope />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=itsthegemproductions@gmail.com", label: 'Email' },
  ];
  
  const footerLinks = [
    { heading: 'Services', links: [
      { name: 'Music Production', href: '/services#production' },
      { name: 'Recording', href: '/services#recording' },
      { name: 'Mixing & Mastering', href: '/services#mixing' },
      { name: 'Beat Production', href: '/services#beats' },
      { name: 'Session Musicians', href: '/services#musicians' },
    ] },
    { heading: 'Company', links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Studio', href: '/studio' },
      { name: 'Our Work', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
    ] },
    { heading: 'Support', links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Sitemap', href: '/sitemap' },
    ] },
  ];
  
  return (
    <footer className="bg-background-light/50 border-t border-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-3xl font-bold gradient-text">The Gem Production</h2>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Where musical ideas transform into polished gems. Professional music production services for artists, bands, and content creators.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -5, color: 'var(--primary)' }}
                  className="bg-background/50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 text-foreground/70 hover:text-primary"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {footerLinks.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-4">{section.heading}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="border-t border-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/60 text-sm">
            © {currentYear} The Gem Production. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-foreground/60 text-sm">
              Designed with 💜 for music creators
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 