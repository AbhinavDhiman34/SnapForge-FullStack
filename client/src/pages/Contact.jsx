import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, ArrowRight, Laptop, AppWindow, PenTool, Search, MessageSquare } from 'lucide-react';
import Navbar from '../components/Global/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        service: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const services = [
    {
      name: "Resume Builder",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      name: "SEO Health Checker",
      icon: <Search className="w-6 h-6" />
    },
    {
      name: "ATS Score Checker",
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      name: "Web Development",
      icon: <AppWindow className="w-6 h-6" />
    },
    {
      name: "App Development",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      name: "Graphic Design",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      name: "SEO",
      icon: <Search className="w-6 h-6" />
    },
    {
      name: "Social Media Marketing",
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
    

      {/* Hero Section */}
      <Navbar/>
      <div className="bg-black py-36">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question about our services or want to collaborate? We're here to help you turn your digital ideas into reality.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-900 p-3 rounded-lg mr-4">
                    <Mail className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-400">contact@snapforge.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-900 p-3 rounded-lg mr-4">
                    <Phone className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-900 p-3 rounded-lg mr-4">
                    <MapPin className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-400">123 Tech Lane, Digital City, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-900 p-3 rounded-lg mr-4">
                    <Clock className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-gray-400">Mon-Fri: 9AM - 6PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Our Services</h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center bg-gray-900 p-3 rounded-lg">
                    <div className="mr-3 text-purple-400">
                      {service.icon}
                    </div>
                    <span className="text-sm">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-900 p-9 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            {submitted ? (
              <div className="bg-purple-900/30 border border-purple-400 rounded-lg p-6 text-center">
                <div className="text-purple-400 flex justify-center mb-4">
                  <Send className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-400">Thank you for contacting Snap Forge. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-2 text-sm">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-400"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-400"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg flex items-center transition-colors duration-300"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-purple-400 mb-4">SNAP FORGE</h2>
          <p className="text-gray-400 mb-6">Transforming your digital presence with cutting-edge tools and services.</p>
          <div className="flex justify-center space-x-4">
            {/* Social Media Icons would go here */}
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                {/* Twitter icon would go here */}
                T
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                {/* Facebook icon would go here */}
                F
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                {/* Instagram icon would go here */}
                I
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                {/* LinkedIn icon would go here */}
                L
              </div>
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-8">© {new Date().getFullYear()} Snap Forge. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}