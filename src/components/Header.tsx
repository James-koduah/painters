import React, { useState, useEffect } from 'react';
import { Paintbrush, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Paintbrush className="h-8 w-8 text-blue-600" />
            <div className="ml-2">
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Nevada Pro Painting</h1>
              <p className={`text-xs  ${isScrolled ? 'text-gray-900' : 'text-white'}`}>LLC</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 font-medium`}>Home</a>
            <a href="#services" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 font-medium`}>Services</a>
            <a href="#gallery" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 font-medium`}>Gallery</a>
            <a href="#testimonials" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 font-medium`}>Testimonials</a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 font-medium`}>Contact</a>
            <a href="tel:+17758675309" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="text-gray-800 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#gallery" className="text-gray-800 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#testimonials" className="text-gray-800 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="tel:+17758675309" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-fit">
              <Phone className="h-4 w-4 mr-2" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;