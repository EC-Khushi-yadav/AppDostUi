import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioShowcase from './components/PortfolioShowcase';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.closest('a[href^="#"]');
      if (target) {
        e?.preventDefault();
        const targetId = target?.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>AppDost Digital - Premium Digital Product Studio | Web & Mobile App Development</title>
        <meta 
          name="description" 
          content="Transform your ideas into digital products people love. AppDost Digital offers premium web development, mobile apps, UI/UX design, and cloud deployment services. Your trusted development partner." 
        />
        <meta name="keywords" content="web development, mobile app development, UI/UX design, cloud deployment, digital products, React, React Native, startup development" />
        <meta property="og:title" content="AppDost Digital - Premium Digital Product Studio" />
        <meta property="og:description" content="Transform your ideas into digital products people love. Premium development services for web, mobile, and cloud solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://appdost.digital" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AppDost Digital - Premium Digital Product Studio" />
        <meta name="twitter:description" content="Transform your ideas into digital products people love." />
        <link rel="canonical" href="https://appdost.digital" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Portfolio Showcase */}
          <PortfolioShowcase />

          {/* About Section */}
          <AboutSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;