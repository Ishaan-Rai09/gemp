'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };
  
  const isOpen = (index: number) => openItems.includes(index);
  
  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What services does The Gem Production offer?',
          answer: 'The Gem Production offers a wide range of music production services including recording, mixing, mastering, beat production, session musicians, composition, and music video production. We provide end-to-end solutions for artists at any stage of their career.'
        },
        {
          question: 'Where is your studio located?',
          answer: 'Our main studio is located in Los Angeles, California. We have a state-of-the-art facility with multiple recording rooms, mixing suites, and a comfortable lounge area for artists. Please contact us to schedule a studio tour.'
        },
        {
          question: 'Do you work with artists remotely?',
          answer: 'Yes, we offer remote production services for clients who cannot visit our studio in person. We have worked with artists from around the world using secure file transfers, video conferencing, and remote collaboration tools.'
        },
        {
          question: 'What genres do you specialize in?',
          answer: 'Our team has experience working across a wide range of genres including pop, hip-hop, R&B, rock, electronic, classical, and jazz. We pride ourselves on our versatility and adapt our approach to suit the specific needs of each project.'
        }
      ]
    },
    {
      title: 'Booking & Pricing',
      items: [
        {
          question: 'How do I book studio time?',
          answer: 'You can book studio time by contacting us through our website, email, or phone. We recommend booking at least 1-2 weeks in advance to ensure availability, especially for longer sessions. A deposit is required to secure your booking.'
        },
        {
          question: 'What are your rates?',
          answer: 'Our rates vary depending on the services required, the length of the project, and the specific needs of each client. We offer hourly rates for studio time as well as project-based packages. Please contact us for a custom quote tailored to your project.'
        },
        {
          question: 'Do you offer package deals?',
          answer: 'Yes, we offer various package deals for different types of projects, such as EP or album production packages, single production packages, and mixing/mastering bundles. These packages often provide better value than booking services individually.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'We require 48 hours notice for cancellations to receive a full refund of your deposit. Cancellations with less than 48 hours notice may forfeit the deposit, depending on circumstances. We understand that emergencies happen and try to be flexible when possible.'
        }
      ]
    },
    {
      title: 'Technical Questions',
      items: [
        {
          question: 'What DAWs do you use?',
          answer: 'Our studio is equipped with Pro Tools, Logic Pro, Ableton Live, and FL Studio to accommodate different production styles and preferences. Our engineers are proficient in all major DAWs and can work with your preferred platform.'
        },
        {
          question: 'Can I bring my own engineer?',
          answer: 'Yes, you can bring your own engineer to work in our studio. We provide technical support to ensure they can get the most out of our facilities. There may be an additional fee for studio-only rentals without our engineering staff.'
        },
        {
          question: 'What file formats do you accept for mixing?',
          answer: 'For mixing projects, we accept consolidated WAV or AIFF files (24-bit/48kHz or higher resolution). We prefer stems that are properly labeled and organized. We can provide detailed instructions for preparing your files for mixing.'
        },
        {
          question: 'Do you provide stems after mixing?',
          answer: 'Yes, we can provide stems of your mixed tracks for an additional fee. This is particularly useful for live performances, remixes, or future revisions. Please let us know in advance if you require stems as part of your deliverables.'
        }
      ]
    },
    {
      title: 'Rights & Ownership',
      items: [
        {
          question: 'Who owns the master recordings?',
          answer: 'In most cases, the client retains ownership of the master recordings. We provide a service to help create your music, but the finished product belongs to you. Specific terms are outlined in our service agreement.'
        },
        {
          question: 'Do you take royalties or publishing?',
          answer: 'We do not take master royalties for standard production services. For projects where we contribute significantly to the composition or songwriting, we may negotiate publishing splits, which would be clearly outlined in a separate agreement before work begins.'
        },
        {
          question: 'Can I use The Gem Production in my credits?',
          answer: 'Yes, we encourage clients to credit The Gem Production in their releases. Proper credits help build our portfolio and your professional presentation. We can provide specific credit language depending on the services provided.'
        },
        {
          question: 'Do you offer distribution services?',
          answer: 'While we don\'t directly distribute music, we can advise on distribution strategies and connect you with reputable distribution partners. Our focus is on creating the best possible product for you to distribute through your preferred channels.'
        }
      ]
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
            <h1 className="text-5xl font-bold mb-6">Frequently Asked <span className="gradient-text">Questions</span></h1>
            <p className="text-xl text-foreground/70">
              Find answers to common questions about The Gem Production's services, processes, and policies.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 border-b border-primary/20 pb-2">{category.title}</h2>
                
                <div className="space-y-4">
                  {category.items.map((faq, faqIndex) => {
                    const itemIndex = categoryIndex * 100 + faqIndex;
                    return (
                      <motion.div 
                        key={faqIndex}
                        className="bg-background-light/30 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (faqIndex * 0.05) }}
                      >
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center"
                          onClick={() => toggleItem(itemIndex)}
                        >
                          <span className="font-medium text-lg">{faq.question}</span>
                          <span className="text-primary">
                            {isOpen(itemIndex) ? <FaChevronUp /> : <FaChevronDown />}
                          </span>
                        </button>
                        <AnimatePresence>
                          {isOpen(itemIndex) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 text-foreground/70">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-20 text-center bg-background-light/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-foreground/70 mb-6">
              If you couldn't find the answer to your question, feel free to reach out to us directly.
            </p>
            <motion.button 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 