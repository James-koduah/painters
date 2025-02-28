import React from 'react';
import { Paintbrush, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Paintbrush className="h-8 w-8 text-blue-400" />
              <div className="ml-2">
                <h3 className="text-xl font-bold">Nevada Pro Painting</h3>
                <p className="text-xs text-gray-400">LLC</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional painting services for residential and commercial properties throughout Nevada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:info@nevadapropainting.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Interior Painting</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Exterior Painting</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cabinet Refinishing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Deck & Fence Staining</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Commercial Painting</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Phone: (775) 867-5309</li>
              <li className="text-gray-400">Email: info@nevadapropainting.com</li>
              <li className="text-gray-400">Hours: Mon-Fri 7AM-6PM, Sat 8AM-2PM</li>
            </ul>
            <a 
              href="#contact" 
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Nevada Pro Painting LLC. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-gray-400 transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;