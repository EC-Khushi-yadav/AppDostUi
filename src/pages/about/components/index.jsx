import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FounderStory from './components/FounderStory';
import TeamSection from './components/TeamSection';
import CompanyTimeline from './components/CompanyTimeline';
import CultureGallery from './components/CultureGallery';
import BehindTheScenes from './components/BehindTheScenes';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - AppDost Digital | Meet Our Team & Story</title>
        <meta name="description" content="Discover the story behind AppDost Digital. Meet our talented team, explore our company culture, and learn about our journey from startup to trusted digital partner." />
        <meta name="keywords" content="AppDost team, company story, digital agency culture, about us, web development team, mobile app developers" />
        <meta property="og:title" content="About Us - AppDost Digital | Meet Our Team & Story" />
        <meta property="og:description" content="Discover the story behind AppDost Digital. Meet our talented team, explore our company culture, and learn about our journey from startup to trusted digital partner." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - AppDost Digital | Meet Our Team & Story" />
        <meta name="twitter:description" content="Discover the story behind AppDost Digital. Meet our talented team, explore our company culture, and learn about our journey from startup to trusted digital partner." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <FounderStory />
        <TeamSection />
        <CompanyTimeline />
        <CultureGallery />
        <BehindTheScenes />
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 brand-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-gradient">AppDost</span>
                  <span className="text-sm text-gray-400 block -mt-1">Digital</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Building digital products people love. Your trusted partner in creating exceptional web and mobile applications that drive real business results.
              </p>
              <p className="text-sm text-gray-400">
                © {new Date()?.getFullYear()} AppDost Digital. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/homepage" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="/services-overview" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-gray-300">
                <li>hello@appdost.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;