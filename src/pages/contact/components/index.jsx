import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import QuickContactForm from './components/QuickContactForm';
import ProjectBriefForm from './components/ProjectBriefForm';
import ConsultationBooking from './components/ConsultationBooking';
import LocationMap from './components/LocationMap';
import FAQSection from './components/FAQSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Methods */}
      <ContactMethods />
      
      {/* Quick Contact Form */}
      <QuickContactForm />
      
      {/* Project Brief Form */}
      <ProjectBriefForm />
      
      {/* Consultation Booking */}
      <ConsultationBooking />
      
      {/* Location & Map */}
      <LocationMap />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of satisfied clients who've transformed their ideas into successful digital products with AppDost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-50 animation-brand">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary animation-brand">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;