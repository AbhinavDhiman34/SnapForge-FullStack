import React from 'react';
import { 
  Facebook,
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Github
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-gray-300  pt-5">
      {/* Main Footer Content */}
      <div className=" border-t border-purple-800 pt-18 mt-10 max-w-6xl mx-auto py-16 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Company Name</h3>
            <p className="mb-4 text-gray-400">
              Creating exceptional digital experiences through innovation and design excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200 flex items-center">
                    <ArrowRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-purple-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Innovation Street, Tech City, 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-purple-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-purple-500 flex-shrink-0" />
                <span className="text-gray-400">contact@company.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-300"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Company Name. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;