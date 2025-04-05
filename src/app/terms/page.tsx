'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  const sections = [
    {
      title: 'Terms of Service',
      content: 'These Terms of Service ("Terms") govern your use of The Gem Production website and services. By accessing or using our services, you agree to be bound by these Terms.'
    },
    {
      title: '1. Services',
      content: 'The Gem Production provides music production, recording, mixing, mastering, and related services as described on our website. We reserve the right to modify, suspend, or discontinue any part of our services at any time.'
    },
    {
      title: '2. Booking and Payment',
      content: 'All bookings are subject to availability and confirmation. A deposit is required to secure your booking, with the remaining balance due as specified in your service agreement. Prices are subject to change, but confirmed bookings will be honored at the agreed rate.'
    },
    {
      title: '3. Cancellation Policy',
      content: 'Cancellations must be made at least 48 hours before your scheduled session to receive a full refund of your deposit. Cancellations with less than 48 hours notice may forfeit the deposit, at our discretion. No-shows will be charged the full session fee.'
    },
    {
      title: '4. Intellectual Property',
      content: 'Unless otherwise specified in a written agreement, clients retain ownership of the master recordings produced during their sessions. The Gem Production retains ownership of its production techniques, processes, and proprietary methods. Credits should be given as specified in your service agreement.'
    },
    {
      title: '5. Studio Rules',
      content: 'While using our facilities, clients must comply with all studio rules regarding equipment usage, prohibited items, and general conduct. Any damage to equipment or facilities caused by clients will be their financial responsibility.'
    },
    {
      title: '6. Confidentiality',
      content: 'We respect the confidentiality of your projects and will not share, release, or distribute any materials without your permission, except as required by law or to fulfill our obligations under your service agreement.'
    },
    {
      title: '7. Liability',
      content: 'The Gem Production is not responsible for loss, damage, or theft of personal belongings brought to our facilities. We maintain backups of session files for a period of 30 days, but clients are encouraged to maintain their own backups of important materials.'
    },
    {
      title: '8. Conduct',
      content: 'We reserve the right to refuse service to anyone who engages in abusive, threatening, or inappropriate behavior toward our staff or other clients. Illegal activities on our premises are strictly prohibited and will result in immediate termination of services without refund.'
    },
    {
      title: '9. Changes to Terms',
      content: 'We may update these Terms at any time. Continued use of our services after changes constitutes acceptance of the revised Terms. We will make reasonable efforts to notify clients of significant changes.'
    },
    {
      title: '10. Governing Law',
      content: 'These Terms are governed by the laws of the state of California. Any disputes arising from these Terms or our services shall be resolved in the courts of Los Angeles County, California.'
    },
    {
      title: 'Contact Information',
      content: 'If you have any questions about these Terms, please contact us at legal@thegemproduction.com or call our office at (555) 123-4567.'
    }
  ];

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
            <h1 className="text-5xl font-bold mb-6">Terms of <span className="gradient-text">Service</span></h1>
            <p className="text-xl text-foreground/70">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-foreground/50 mt-4">
              Last updated: April 5, 2024
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto bg-background-light/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                className={`mb-8 ${index === 0 ? '' : 'mt-10'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 className={`font-bold mb-4 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>{section.title}</h2>
                <p className="text-foreground/70 leading-relaxed">
                  {section.content}
                </p>
                {index === 0 && <div className="border-b border-primary/10 mt-6"></div>}
              </motion.div>
            ))}
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sections.length * 0.05 }}
            >
              <p className="text-foreground/60 text-sm">
                By using The Gem Production services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 