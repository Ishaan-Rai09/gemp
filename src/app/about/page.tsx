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
      name: 'Alex Johnson',
      role: 'Founder & Lead Producer',
      bio: 'With over 15 years of experience in the music industry, Alex has worked with Grammy-winning artists across multiple genres. His unique approach to production has helped define The Gem Production\'s signature sound.',
      image: '/images/team-1.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'Head Engineer',
      bio: 'Sarah is a technical wizard with a golden ear. Her background in classical composition combined with cutting-edge technical knowledge makes her an invaluable asset to any recording session.',
      image: '/images/team-2.jpg'
    },
    {
      name: 'Marcus Chen',
      role: 'Mixing Engineer',
      bio: 'Having mixed platinum records for major labels, Marcus brings his expertise in creating polished, radio-ready mixes to every project at The Gem Production.',
      image: '/images/team-3.jpg'
    },
    {
      name: 'Olivia Rodriguez',
      role: 'Mastering Engineer',
      bio: 'Olivia\'s attention to detail and mastery of the subtle art of mastering ensures that every production leaves our studio sounding its absolute best across all playback systems.',
      image: '/images/team-4.jpg'
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
                  The Gem Production was founded in 2010 by Alex Johnson, a producer with a passion for helping artists realize their unique sound. What began as a small project studio in Alex's garage has evolved into a premier production facility known for its quality and creativity.
                </p>
                <p>
                  Over the years, we've had the privilege of working with incredibly talented artists across all genres, from emerging independent musicians to established major label acts. Our philosophy has always been simple: treat every project with the same level of dedication and attention to detail, regardless of budget or scope.
                </p>
                <p>
                  Today, The Gem Production stands as a beacon for artists seeking a collaborative and supportive environment to create their best work. Our team of experienced professionals is committed to helping you polish your musical ideas into gems that shine.
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center">
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
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className="bg-background-light/30 rounded-2xl overflow-hidden border border-primary/10 flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(138, 43, 226, 0.2)' }}
                >
                  <div className="md:w-1/3 aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary mb-4">{member.role}</p>
                    <p className="text-foreground/70 text-sm">{member.bio}</p>
                  </div>
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
            <motion.button 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Careers
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 