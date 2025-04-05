'use client';

import { useState, useEffect } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      {isLoading && <LoadingAnimation />}
      
      <Navbar />
      <Hero />
      <Services />
      <Footer />
      
      {/* Add more sections as needed */}
    </main>
  );
}
