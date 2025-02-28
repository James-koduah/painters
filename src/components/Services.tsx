import React from 'react';
import { Home, Building, Droplet, Sun, Palette, Shield } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Interior Painting",
      description: "Transform your home's interior with our premium painting services. We handle everything from walls and ceilings to trim and cabinets."
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Exterior Painting",
      description: "Protect and beautify your home's exterior with our durable, weather-resistant paints that stand up to Nevada's harsh climate."
    },
    {
      icon: <Droplet className="h-8 w-8 text-blue-600" />,
      title: "Cabinet Refinishing",
      description: "Give your kitchen or bathroom a fresh look with our cabinet refinishing services. A cost-effective alternative to full replacement."
    },
    {
      icon: <Sun className="h-8 w-8 text-blue-600" />,
      title: "Deck & Fence Staining",
      description: "Protect your outdoor wooden surfaces from sun damage and extend their life with our professional staining services."
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-600" />,
      title: "Color Consultation",
      description: "Not sure which colors will work best? Our professional color consultants will help you choose the perfect palette for your space."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Commercial Painting",
      description: "We provide high-quality commercial painting services with minimal disruption to your business operations."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of painting services for both residential and commercial properties throughout Nevada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;