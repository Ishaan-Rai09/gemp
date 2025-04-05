'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaMusic, FaMicrophone, FaCode, FaVideo, FaMoneyBillWave, FaUserFriends } from 'react-icons/fa';

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<string | null>(null);
  
  const jobCategories = [
    {
      title: 'Production Team',
      icon: <FaMusic className="text-4xl" />,
      description: 'Join our creative production team to help artists realize their musical vision.',
      jobs: [
        {
          id: 'senior-producer',
          title: 'Senior Music Producer',
          type: 'Full-time',
          location: 'Los Angeles, CA',
          description: 'We\'re looking for an experienced music producer with a proven track record to join our production team. The ideal candidate will have at least 5 years of professional experience and a diverse portfolio across multiple genres.',
          requirements: [
            'Bachelor\'s degree in Music Production, Sound Engineering, or equivalent experience',
            'Minimum 5 years professional experience in music production',
            'Proficiency in Pro Tools, Logic Pro, and other major DAWs',
            'Experience working with major label artists preferred',
            'Strong communication and interpersonal skills',
            'Ability to work under deadlines while maintaining creative excellence'
          ],
          benefits: [
            'Competitive salary based on experience',
            'Health, dental, and vision insurance',
            'Access to state-of-the-art production facilities',
            'Flexible work schedule',
            'Professional development opportunities',
            'Royalty/points structure on qualifying projects'
          ]
        },
        {
          id: 'assistant-producer',
          title: 'Assistant Producer',
          type: 'Full-time',
          location: 'Los Angeles, CA',
          description: 'We\'re seeking a motivated assistant producer to support our production team. This role is perfect for someone looking to grow their career in music production while learning from experienced professionals.',
          requirements: [
            'Associate\'s or Bachelor\'s degree in a music-related field preferred',
            '1-2 years experience in a studio environment',
            'Strong knowledge of DAWs, particularly Pro Tools',
            'Excellent organizational and communication skills',
            'Ability to work flexible hours including evenings and weekends',
            'Passion for music production across various genres'
          ],
          benefits: [
            'Competitive salary',
            'Health insurance',
            'Mentorship opportunities',
            'Career advancement potential',
            'Networking opportunities with industry professionals',
            'Access to studio facilities for personal projects (as available)'
          ]
        }
      ]
    },
    {
      title: 'Engineering Team',
      icon: <FaMicrophone className="text-4xl" />,
      description: 'Technical experts who capture, mix, and master the perfect sound.',
      jobs: [
        {
          id: 'mixing-engineer',
          title: 'Mixing Engineer',
          type: 'Full-time',
          location: 'Los Angeles, CA',
          description: 'We are looking for a talented mixing engineer to join our team. The ideal candidate has excellent technical skills and a creative ear for detail across various musical genres.',
          requirements: [
            'Proven experience as a mixing engineer with a strong portfolio',
            'Advanced knowledge of analog and digital mixing techniques',
            'Proficiency with SSL consoles and outboard gear',
            'Experience with Pro Tools and other industry-standard DAWs',
            'Strong communication skills and ability to interpret artists\' vision',
            'Bachelor\'s degree in Audio Engineering or equivalent experience'
          ],
          benefits: [
            'Competitive compensation package',
            'Medical, dental, and vision coverage',
            'Access to state-of-the-art mixing facilities',
            'Collaborative work environment with industry professionals',
            'Professional development opportunities',
            'Credit on major releases'
          ]
        },
        {
          id: 'recording-engineer',
          title: 'Recording Engineer',
          type: 'Full-time',
          location: 'Los Angeles, CA',
          description: 'Join our team as a recording engineer to capture high-quality recordings for our diverse clientele. This position requires technical expertise, creative problem-solving, and excellent interpersonal skills.',
          requirements: [
            '3+ years experience as a recording engineer',
            'Strong technical knowledge of microphones, preamps, and signal flow',
            'Experience recording various instruments and musical styles',
            'Proficiency in Pro Tools and other major DAWs',
            'Ability to maintain a positive studio environment',
            'Flexible schedule including evenings and weekends'
          ],
          benefits: [
            'Competitive salary',
            'Health benefits package',
            'Professional development budget',
            'Creative environment with leading artists',
            'Opportunity to work on high-profile projects',
            'Career advancement potential'
          ]
        }
      ]
    },
    {
      title: 'Technical Team',
      icon: <FaCode className="text-4xl" />,
      description: 'Supporting our digital infrastructure and technical systems.',
      jobs: [
        {
          id: 'studio-technician',
          title: 'Studio Technician',
          type: 'Full-time',
          location: 'Los Angeles, CA',
          description: 'We\'re seeking a knowledgeable studio technician to maintain our equipment, troubleshoot technical issues, and ensure smooth operation of our studio facilities.',
          requirements: [
            'Technical background in audio engineering or related field',
            'Experience maintaining and repairing studio equipment',
            'Knowledge of analog and digital audio systems',
            'Understanding of electrical systems and signal flow',
            'Problem-solving skills and attention to detail',
            'Ability to work flexible hours including some evenings'
          ],
          benefits: [
            'Competitive salary',
            'Health and dental insurance',
            'Paid time off',
            'Professional development opportunities',
            'Employee discount on studio services',
            'Collaborative work environment'
          ]
        }
      ]
    },
    {
      title: 'Creative Team',
      icon: <FaVideo className="text-4xl" />,
      description: 'Visual artists and creators who bring music to life visually.',
      jobs: [
        {
          id: 'video-director',
          title: 'Music Video Director',
          type: 'Contract',
          location: 'Los Angeles, CA (Hybrid)',
          description: 'We\'re expanding our creative services and looking for a talented music video director to join our team on a contract basis, with potential for full-time employment based on performance and project load.',
          requirements: [
            'Portfolio demonstrating music video direction experience',
            'Strong visual storytelling abilities',
            'Experience with camera equipment and editing software',
            'Knowledge of lighting techniques and cinematography',
            'Ability to work within budgets and deadlines',
            'Excellent communication skills for client interaction'
          ],
          benefits: [
            'Competitive project-based compensation',
            'Access to high-profile music clients',
            'State-of-the-art equipment and resources',
            'Creative freedom within project parameters',
            'Potential for recurring work and full-time position',
            'Credit on published works'
          ]
        }
      ]
    },
    {
      title: 'Business Team',
      icon: <FaMoneyBillWave className="text-4xl" />,
      description: 'Managing the business side of our music production company.',
      jobs: [
        {
          id: 'studio-manager',
          title: 'Studio Manager',
          type: 'Full-time',
          location: 'Los Angeles, CA',
          description: 'We\'re looking for an organized and efficient studio manager to oversee daily operations, bookings, and client relations at The Gem Production.',
          requirements: [
            '3+ years experience in studio management or similar role',
            'Strong understanding of the music production process',
            'Excellent organizational and time management skills',
            'Outstanding communication abilities',
            'Experience with booking systems and scheduling',
            'Basic accounting knowledge and budget management'
          ],
          benefits: [
            'Competitive salary',
            'Comprehensive benefits package',
            'Professional development opportunities',
            'Industry networking events',
            'Collaborative work environment',
            'Employee discounts on studio services'
          ]
        },
        {
          id: 'client-relations',
          title: 'Client Relations Specialist',
          type: 'Full-time',
          location: 'Los Angeles, CA',
          description: 'Join our team as a client relations specialist to manage artist relationships, ensure client satisfaction, and coordinate with our production team to deliver exceptional service.',
          requirements: [
            'Strong interpersonal and communication skills',
            'Experience in customer service or client management',
            'Understanding of the music industry landscape',
            'Ability to handle multiple clients and projects simultaneously',
            'Problem-solving skills and attention to detail',
            'Bachelor\'s degree in Music Business, Communications, or related field preferred'
          ],
          benefits: [
            'Competitive salary',
            'Health insurance and retirement plan',
            'Paid time off',
            'Industry networking opportunities',
            'Concert and event tickets',
            'Exciting work environment with music industry professionals'
          ]
        }
      ]
    },
    {
      title: 'Internships',
      icon: <FaUserFriends className="text-4xl" />,
      description: 'Learning opportunities for those starting their careers in music production.',
      jobs: [
        {
          id: 'production-intern',
          title: 'Production Intern',
          type: 'Part-time / 3-6 months',
          location: 'Los Angeles, CA',
          description: 'Our production internship provides hands-on experience in a professional studio environment. Interns will learn various aspects of the music production process while assisting our production team.',
          requirements: [
            'Currently enrolled in or recently graduated from a music production, audio engineering, or related program',
            'Basic knowledge of DAWs and music production concepts',
            'Strong interest in the music industry',
            'Ability to commit to at least 20 hours per week',
            'Excellent attention to detail and organizational skills',
            'Eager to learn and grow in a professional environment'
          ],
          benefits: [
            'Paid internship ($15/hour)',
            'Hands-on training with industry professionals',
            'Opportunity to observe recording sessions',
            'Networking opportunities within the industry',
            'Possibility of future employment for outstanding interns',
            'School credit where applicable'
          ]
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
            <h1 className="text-5xl font-bold mb-6">Join <span className="gradient-text">Our Team</span></h1>
            <p className="text-xl text-foreground/70">
              Explore career opportunities at The Gem Production and be part of creating exceptional music.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-background-light/30 backdrop-blur-sm rounded-2xl p-6 sticky top-24 border border-primary/10">
                <h3 className="text-2xl font-bold mb-6">Departments</h3>
                
                <div className="flex flex-col space-y-3">
                  {jobCategories.map((category, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                      className="mb-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-primary">{category.icon}</div>
                        <h4 className="font-bold text-lg">{category.title}</h4>
                      </div>
                      <p className="text-sm text-foreground/70 ml-10">
                        {category.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-foreground/10">
                  <h4 className="font-bold mb-4">Why Join Us?</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Work with talented artists and producers</li>
                    <li>• Access to state-of-the-art equipment</li>
                    <li>• Creative and collaborative environment</li>
                    <li>• Competitive compensation packages</li>
                    <li>• Professional growth opportunities</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="space-y-12">
                {jobCategories.map((category, catIndex) => (
                  <div key={catIndex} className="mb-10">
                    <motion.h2 
                      className="text-2xl font-bold mb-6 border-b border-primary/20 pb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + (catIndex * 0.1) }}
                    >
                      {category.title}
                    </motion.h2>
                    
                    <div className="space-y-6">
                      {category.jobs.map((job, jobIndex) => (
                        <motion.div 
                          key={job.id}
                          className="bg-background-light/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + (catIndex * 0.1) + (jobIndex * 0.05) }}
                        >
                          <div 
                            className="p-6 cursor-pointer"
                            onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                                <div className="flex items-center gap-3 text-sm text-foreground/60">
                                  <span>{job.type}</span>
                                  <span>•</span>
                                  <span>{job.location}</span>
                                </div>
                              </div>
                              <button className="p-2 text-primary">
                                {activeJob === job.id ? (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                  </svg>
                                ) : (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>
                          
                          {activeJob === job.id && (
                            <motion.div 
                              className="px-6 pb-6"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="border-t border-foreground/10 pt-4 mt-2 space-y-6">
                                <div>
                                  <h4 className="font-bold mb-3">Description</h4>
                                  <p className="text-foreground/70">{job.description}</p>
                                </div>
                                
                                <div>
                                  <h4 className="font-bold mb-3">Requirements</h4>
                                  <ul className="space-y-2 text-foreground/70">
                                    {job.requirements.map((req, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>{req}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h4 className="font-bold mb-3">Benefits</h4>
                                  <ul className="space-y-2 text-foreground/70">
                                    {job.benefits.map((benefit, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>{benefit}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div className="pt-4">
                                  <motion.button 
                                    className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    Apply Now
                                  </motion.button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <motion.div 
                className="mt-20 bg-background-light/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4">Don't See a Perfect Match?</h2>
                <p className="text-foreground/70 mb-6">
                  We're always looking for talented individuals. Send us your resume and let us know how you can contribute to The Gem Production team.
                </p>
                <motion.button 
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Your Resume
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 