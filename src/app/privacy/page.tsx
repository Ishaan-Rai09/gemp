'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Privacy Policy',
      content: 'This Privacy Policy describes how The Gem Production ("we", "us", or "our") collects, uses, and shares information about you when you use our website, services, or otherwise interact with us. We respect your privacy and are committed to protecting your personal information.'
    },
    {
      title: '1. Information We Collect',
      content: 'We may collect several types of information, including: (a) Personal Information: Name, email address, phone number, and address when you contact us, book services, or create an account. (b) Payment Information: Credit card details or other payment information when you pay for our services. (c) Communications: Records of your communications with us. (d) Usage Information: How you use our website, including IP address, browser type, and pages visited.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use your information to: (a) Provide our services and fulfill our contractual obligations. (b) Communicate with you about your projects, bookings, and services. (c) Improve our website and services. (d) Send you updates, promotions, and newsletters if you\'ve opted in. (e) Comply with legal obligations and enforce our terms.'
    },
    {
      title: '3. Information Sharing',
      content: 'We do not sell your personal information. We may share your information with: (a) Service providers who help us operate our business. (b) Professional advisors like lawyers and accountants. (c) Legal authorities when required by law. (d) Business partners with your consent. (e) A successor entity in the event of a business transfer or merger.'
    },
    {
      title: '4. Your Creative Content',
      content: 'We respect the confidentiality of your musical projects. Your recordings, compositions, and creative content remain yours. We will not use, share, or distribute your creative works without your permission, except as necessary to provide our services or as required by law.'
    },
    {
      title: '5. Cookies and Tracking',
      content: 'Our website uses cookies and similar technologies to enhance your experience, analyze usage, and assist in our marketing efforts. You can control cookies through your browser settings, although blocking some cookies may impact your experience on our site.'
    },
    {
      title: '6. Your Rights and Choices',
      content: 'Depending on your location, you may have rights regarding your personal information, including: (a) Accessing your data. (b) Correcting inaccurate data. (c) Deleting your data. (d) Restricting or objecting to certain processing. (e) Data portability. (f) Withdrawing consent. To exercise these rights, please contact us using the information provided at the end of this policy.'
    },
    {
      title: '7. Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.'
    },
    {
      title: '8. International Transfers',
      content: 'Your information may be transferred to and processed in countries other than your country of residence, which may have different data protection laws. We will take appropriate measures to protect your information in accordance with this Privacy Policy.'
    },
    {
      title: '9. Children\'s Privacy',
      content: 'Our services are not directed to children under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.'
    },
    {
      title: '10. Changes to This Policy',
      content: 'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will post the updated policy on our website with the effective date. Your continued use of our services after any changes indicates your acceptance of the revised policy.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@thegemproduction.com or call our office at (555) 123-4567.'
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
            <h1 className="text-5xl font-bold mb-6">Privacy <span className="gradient-text">Policy</span></h1>
            <p className="text-xl text-foreground/70">
              How we collect, use, and protect your information.
            </p>
            <p className="text-sm text-foreground/50 mt-4">
              Effective Date: April 5, 2024
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
                By using The Gem Production services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 