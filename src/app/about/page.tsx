'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaTrophy, FaUserFriends, FaRegLightbulb, FaHeadphones } from 'react-icons/fa';

export default function AboutPage() {
  const companyValues = [
    {
      icon: <FaTrophy className="text-4xl" />,
      title: 'Excellence',
      description: 'We are committed to achieving the highest standards in music production, constantly refining our craft and pushing creative boundaries.'
    },
    {
      icon: <FaUserFriends className="text-4xl" />,
      title: 'Collaboration',
      description: 'We believe great music comes from great partnerships. We work closely with artists to ensure their vision is realized in every project.'
    },
    {
      icon: <FaRegLightbulb className="text-4xl" />,
      title: 'Innovation',
      description: 'We embrace new technologies and techniques, staying at the forefront of music production trends while honoring timeless production principles.'
    },
    {
      icon: <FaHeadphones className="text-4xl" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards, offering honest feedback and transparent business practices throughout our collaborations.'
    }
  ];

  const teamMembers = [
    {
      name: 'Shashank Kainth',
      role: 'Founder & Lead Producer (T REAL G)',
      bio: 'With over 4 years of experience in the music industry, Shashank has worked with various artists across multiple genres. His unique approach to production has helped define The Gem Production\'s signature sound.',
      image: '/images/producer-portrait.png'
    },
    {
      name: 'Engineering Team',
      role: 'Mixing & Recording Engineers',
      bio: 'Our engineering team brings technical wizardry with golden ears. Their background in composition combined with cutting-edge technical knowledge makes them invaluable assets to any recording session.',
      image: '/images/studio-engineer.png'
    },
    {
      name: 'Creative Team',
      role: 'Producers & Session Musicians',
      bio: 'Having worked on numerous successful projects, our creative team brings their expertise in creating polished, radio-ready productions to every project at The Gem Production.',
      image: '/images/creative-team.png'
    },
    {
      name: 'Business Team',
      role: 'Client Relations & Management',
      bio: 'Our business team\'s attention to detail and dedication ensures that every client experience is smooth and productive, from initial contact through project completion.',
      image: '/images/business-team.png'
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
            <h1 className="text-5xl font-bold mb-6">About <span className="gradient-text">Us</span></h1>
            <p className="text-xl text-foreground/70">
              Since 2010, The Gem Production has been turning musical ideas into polished gems, working with emerging talents and established artists alike.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Welcome to The Gem Productions! We're thrilled to have you onboard as our creative partner. With over 4+ years of dedicated experience in music production, mixing mastering, vocal recording, and lyrics writing, we're committed to bringing your artistic vision to life with unparalleled quality and creativity.
                </p>
                <p>
                  When you choose to work with us, you're not just getting a service provider; you're gaining a mentor for life. What does that mean? It means we're here to support you every step of the way, not just for this project, but for your entire journey as an artist. Whether you need advice on songwriting, guidance on production techniques, or simply someone to bounce ideas off of, we're here for you.
                </p>
                <p>
                  Our commitment to your success goes beyond the completion of any single project; it's a lifelong partnership built on trust, collaboration, and mutual respect.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20 shadow-xl shadow-primary/10">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center">
                  <span className="text-6xl">🎵</span>
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full overflow-hidden border-4 border-background"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary via-secondary to-accent" />
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-background-light/50 backdrop-blur-lg p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(138, 43, 226, 0.3)' }}
                >
                  <div className="bg-primary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Passionate about music production? We're always looking for talented individuals to join our growing team.
            </p>
            <motion.a 
              href="/careers"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 mx-auto inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Careers
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 