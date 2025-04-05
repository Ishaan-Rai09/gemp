'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCalendarAlt, FaUser, FaTag, FaSearch } from 'react-icons/fa';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'production', label: 'Production Tips' },
    { id: 'gear', label: 'Gear Reviews' },
    { id: 'industry', label: 'Industry News' },
    { id: 'interviews', label: 'Artist Interviews' },
    { id: 'business', label: 'Music Business' }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: '5 Essential Mixing Techniques for a Professional Sound',
      excerpt: 'Discover the key mixing techniques that can elevate your tracks from good to great. In this article, we explore EQ strategies, compression techniques, spatial effects, automation, and balance.',
      date: 'April 1, 2024',
      author: 'Alex Johnson',
      category: 'production',
      image: '/images/blog1.jpg',
      tags: ['Mixing', 'Production', 'Tutorial']
    },
    {
      id: 2,
      title: 'Review: The Latest Studio Monitors Worth Your Investment',
      excerpt: 'We test and compare the newest studio monitors on the market to help you make an informed decision for your production setup. Find out which ones offer the best sound quality, accuracy, and value.',
      date: 'March 25, 2024',
      author: 'Sarah Williams',
      category: 'gear',
      image: '/images/blog2.jpg',
      tags: ['Gear', 'Monitors', 'Review']
    },
    {
      id: 3,
      title: 'Interview with Grammy-Winning Producer Mark Thompson',
      excerpt: 'In this exclusive interview, we sit down with Mark Thompson to discuss his creative process, favorite equipment, and tips for aspiring producers. Learn from one of the industry\'s most respected figures.',
      date: 'March 18, 2024',
      author: 'Marcus Chen',
      category: 'interviews',
      image: '/images/blog3.jpg',
      tags: ['Interview', 'Producer', 'Grammy']
    },
    {
      id: 4,
      title: 'How Streaming Platforms Are Changing Music Production',
      excerpt: 'Explore the impact of streaming platforms on music production techniques and strategies. From song structure to mixing decisions, discover how producers are adapting to the streaming era.',
      date: 'March 10, 2024',
      author: 'Olivia Rodriguez',
      category: 'industry',
      image: '/images/blog4.jpg',
      tags: ['Streaming', 'Industry', 'Business']
    },
    {
      id: 5,
      title: 'Mastering in the Modern Age: Digital vs. Analog',
      excerpt: 'The debate between digital and analog mastering continues in the modern music industry. We examine the pros and cons of each approach and when to choose one over the other for your projects.',
      date: 'March 5, 2024',
      author: 'Alex Johnson',
      category: 'production',
      image: '/images/blog5.jpg',
      tags: ['Mastering', 'Production', 'Digital', 'Analog']
    },
    {
      id: 6,
      title: 'Understanding Music Publishing and Royalties',
      excerpt: 'A comprehensive guide to music publishing, royalties, and licensing in today\'s complex music landscape. Learn how to protect your work and maximize your revenue streams as a creator.',
      date: 'February 28, 2024',
      author: 'Marcus Chen',
      category: 'business',
      image: '/images/blog6.jpg',
      tags: ['Publishing', 'Royalties', 'Business']
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
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
            <h1 className="text-5xl font-bold mb-6">The Gem <span className="gradient-text">Blog</span></h1>
            <p className="text-xl text-foreground/70">
              Insights, tips, and news from the world of music production.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-background-light/30 backdrop-blur-sm rounded-2xl p-6 sticky top-24 border border-primary/10">
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-background border border-foreground/20 text-foreground rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeCategory === category.id 
                            ? 'bg-primary text-white' 
                            : 'hover:bg-background-light text-foreground/80'
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                  <div className="space-y-3">
                    {blogPosts.slice(0, 3).map((post) => (
                      <a 
                        key={post.id}
                        href={`#post-${post.id}`}
                        className="block hover:text-primary transition-colors"
                      >
                        <h4 className="font-medium line-clamp-2">{post.title}</h4>
                        <p className="text-xs text-foreground/60 mt-1">{post.date}</p>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-background-light/50 text-foreground/70 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div 
                      key={post.id}
                      id={`post-${post.id}`}
                      className="bg-background-light/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(138, 43, 226, 0.2)' }}
                    >
                      <div className="relative aspect-video w-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center">
                          <span className="text-6xl">🎵</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-foreground/60 mb-3">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt /> {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaUser /> {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaTag /> {categories.find(c => c.id === post.category)?.label}
                          </span>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                        <p className="text-foreground/70 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <motion.button 
                          className="text-primary font-medium flex items-center gap-1"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Read More 
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-background-light/30 backdrop-blur-sm rounded-2xl border border-primary/10">
                  <h3 className="text-2xl font-bold mb-3">No matching posts found</h3>
                  <p className="text-foreground/70">
                    Try a different search term or category.
                  </p>
                </div>
              )}
              
              {filteredPosts.length > 0 && (
                <motion.div 
                  className="mt-12 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <button className="px-4 py-2 bg-background-light/50 text-foreground rounded-l-lg border border-foreground/20">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-primary text-white border border-primary">
                    1
                  </button>
                  <button className="px-4 py-2 bg-background-light/50 text-foreground border border-foreground/20">
                    2
                  </button>
                  <button className="px-4 py-2 bg-background-light/50 text-foreground rounded-r-lg border border-foreground/20">
                    Next
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-20 text-center bg-background-light/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-foreground/70 mb-6">
              Stay updated with the latest articles, tips, and insights from The Gem Production.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-background border border-foreground/20 text-foreground rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <motion.button 
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 