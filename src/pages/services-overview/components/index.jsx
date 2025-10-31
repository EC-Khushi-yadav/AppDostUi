import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCard from './components/ServiceCard';
import ProcessSection from './components/ProcessSection';
import TechnologyStack from './components/TechnologyStack';
import InteractiveCalculator from './components/InteractiveCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const ServicesOverview = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies. From simple websites to complex enterprise solutions, we deliver scalable and performant web experiences.",
      icon: "Globe",
      gradient: "from-blue-500 to-blue-600",
      borderColor: "#3b82f6",
      features: [
        "Responsive Design & Mobile Optimization",
        "Progressive Web Apps (PWA)",
        "E-commerce & Payment Integration",
        "Content Management Systems",
        "API Development & Integration",
        "Performance Optimization & SEO"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      startingPrice: "$15,000",
      timeline: "6-12 weeks"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices with seamless performance and intuitive design.",
      icon: "Smartphone",
      gradient: "from-purple-500 to-purple-600",
      borderColor: "#8b5cf6",
      features: [
        "iOS & Android Native Development",
        "Cross-Platform Solutions (React Native)",
        "App Store Optimization",
        "Push Notifications & Analytics",
        "Offline Functionality",
        "Third-party Integrations"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
      startingPrice: "$25,000",
      timeline: "8-16 weeks"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that combine beautiful aesthetics with intuitive functionality. We create digital experiences that users love and businesses benefit from.",
      icon: "Palette",
      gradient: "from-pink-500 to-rose-600",
      borderColor: "#ec4899",
      features: [
        "User Research & Persona Development",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing & Optimization",
        "Design System Creation",
        "Accessibility Compliance"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Framer"],
      startingPrice: "$8,000",
      timeline: "4-8 weeks"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines that ensure your applications are secure, reliable, and can handle growth seamlessly.",
      icon: "Cloud",
      gradient: "from-green-500 to-emerald-600",
      borderColor: "#10b981",
      features: [
        "Cloud Architecture & Migration",
        "CI/CD Pipeline Setup",
        "Container Orchestration",
        "Monitoring & Logging",
        "Security & Compliance",
        "Performance Optimization"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Monitoring"],
      startingPrice: "$12,000",
      timeline: "4-10 weeks"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services Overview - AppDost Digital | Premium Digital Solutions</title>
        <meta name="description" content="Comprehensive digital services including web development, mobile apps, UI/UX design, and cloud infrastructure. Transform your ideas into digital reality with AppDost." />
        <meta name="keywords" content="web development, mobile app development, UI UX design, cloud services, digital transformation, AppDost" />
        <meta property="og:title" content="Services Overview - AppDost Digital" />
        <meta property="og:description" content="Premium digital solutions that transform ideas into reality. Expert web development, mobile apps, design, and cloud services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services-overview" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <ServiceHero />

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive digital solutions designed to help your business thrive 
                in the digital landscape. Each service is tailored to your specific needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services?.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <ProcessSection />

        {/* Technology Stack */}
        <TechnologyStack />

        {/* Interactive Calculator */}
        <InteractiveCalculator />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
};

export default ServicesOverview;