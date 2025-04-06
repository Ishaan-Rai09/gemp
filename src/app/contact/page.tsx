'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaUser, FaMusic, FaPaperPlane, FaInstagram, FaYoutube, FaSpotify, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        service: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  const services = [
    { value: '', label: 'Select a service (optional)' },
    { value: 'production', label: 'Music Production' },
    { value: 'mixing', label: 'Mixing & Mastering' },
    { value: 'recording', label: 'Recording Session' },
    { value: 'beats', label: 'Beat Production' },
    { value: 'musicians', label: 'Session Musicians' },
    { value: 'video', label: 'Music Video Production' },
    { value: 'other', label: 'Other' }
  ];
  
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Studio Location',
      details: [
        'The Gem Production',
        'Panchkula, Haryana, India'
      ]
    },
    {
      icon: <FaPhone />,
      title: 'Phone / WhatsApp',
      details: [
        <a key="whatsapp" href="https://wa.me/919501678746" className="hover:text-primary transition-colors">+91 9501678746</a>
      ]
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: [
        <a key="email" href="https://mail.google.com/mail/?view=cm&fs=1&to=itsthegemproductions@gmail.com" className="hover:text-primary transition-colors">itsthegemproductions@gmail.com</a>
      ]
    },
    {
      icon: <FaClock />,
      title: 'Studio Hours',
      details: [
        'Monday - Saturday: 10am - 8pm',
        'Sunday: By appointment only'
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
            <h1 className="text-5xl font-bold mb-6">Contact <span className="gradient-text">Us</span></h1>
            <p className="text-xl text-foreground/70">
              Have a question or ready to start your next project? Get in touch with The Gem Production team today.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            <motion.div 
              className="lg:col-span-2 bg-background-light/30 rounded-2xl p-8 border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitSuccess && (
                <motion.div 
                  className="bg-primary/20 border border-primary/30 text-foreground p-4 rounded-lg mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaPaperPlane className="text-primary" />
                  <p>Your message has been sent successfully! We'll get back to you soon.</p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-primary">
                        <FaUser />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border border-foreground/20 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-primary">
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border border-foreground/20 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-background border border-foreground/20 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3"
                      placeholder="What's this regarding?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block mb-2 text-sm font-medium">Service</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-primary">
                        <FaMusic />
                      </div>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="bg-background border border-foreground/20 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3"
                      >
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-background border border-foreground/20 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3"
                    placeholder="Tell us about your project or question..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-background-light/30 rounded-2xl p-8 border border-primary/10 mb-6">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    >
                      <div className="mt-1 text-primary text-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <div className="text-foreground/70 space-y-1 mt-1">
                          {item.details.map((detail, idx) => (
                            <p key={idx}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="bg-background-light/30 rounded-2xl p-8 border border-primary/10 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a href="https://www.instagram.com/thegem.productions?igsh=MWJreTk4ajlnNG5qNw==" target="_blank" rel="noopener noreferrer" className="bg-background/50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 text-foreground/70 hover:text-primary">
                    <FaInstagram />
                  </a>
                  <a href="https://youtube.com/@THEGEMPRODUCTIOS?si=leIMkP3KQ5u8LKQj" target="_blank" rel="noopener noreferrer" className="bg-background/50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 text-foreground/70 hover:text-primary">
                    <FaYoutube />
                  </a>
                  <a href="https://open.spotify.com/artist/6bvjcJzdo8UHV1vHOhBLot?si=A5Uyi1FeQViaxyJsdKm5RQ&pi=a-2D3YIyJfRYic" target="_blank" rel="noopener noreferrer" className="bg-background/50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 text-foreground/70 hover:text-primary">
                    <FaSpotify />
                  </a>
                  <a href="https://www.upwork.com/freelancers/~01208f3ce28cdf7d2c" target="_blank" rel="noopener noreferrer" className="bg-background/50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 text-foreground/70 hover:text-primary">
                    <span className="font-bold text-sm">Up</span>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">Need Urgent Help?</h3>
                <p className="text-foreground/70 mb-6">
                  For urgent matters, please contact us via WhatsApp.
                </p>
                <a 
                  href="https://wa.me/919501678746" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold gradient-text flex items-center gap-2"
                >
                  <FaWhatsapp />
                  +91 9501678746
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-background-light/30 rounded-2xl overflow-hidden h-96 border border-primary/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
              <p className="text-foreground/50 text-center">
                Google Maps would be embedded here with the studio location
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 