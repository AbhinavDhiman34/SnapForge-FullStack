import React, { useState } from 'react';
import Navbar from '../components/Global/Navbar';
import Footer from '../components/Global/Footer';

const Services = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: '',
    timeline: '',
    projectDetails: '',
    websiteUrl: '',
    goals: '',
    // SEO specific
    targetKeywords: '',
    competitors: '',
    // Web Development specific
    webFeatures: [],
    hasExistingWebsite: false,
    // App Development specific
    platform: [],
    appFeatures: [],
    // Graphic Design specific
    designType: [],
    brandColors: '',
    // Social Media Marketing specific
    platforms: [],
    targetAudience: '',
    // Tools specific
    toolInterest: []
  });

  const services = [
    { id: 'web', name: 'Web Development' },
    { id: 'app', name: 'App Development' },
    { id: 'design', name: 'Graphic Design' },
    { id: 'seo', name: 'SEO Services' },
    { id: 'social', name: 'Social Media Marketing' },
    { id: 'tools', name: 'Snap Forge Tools' },
    { id: 'full', name: 'Full Brand Solution' }
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setFormStep(1);
    window.scrollTo(0, 0);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const arrayField = formData[name] || [];
      if (checked) {
        setFormData({ ...formData, [name]: [...arrayField, value] });
      } else {
        setFormData({
          ...formData,
          [name]: arrayField.filter(item => item !== value)
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission to your backend
    console.log('Form submitted:', formData);
    setFormStep(2);
    window.scrollTo(0, 0);
  };

  // Dynamic form fields based on service selection
  const renderServiceSpecificFields = () => {
    switch (selectedService) {
      case 'web':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Web Development Details</h3>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Do you have an existing website?</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="hasExistingWebsite"
                    value="true"
                    onChange={() => setFormData({...formData, hasExistingWebsite: true})}
                    className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-700"
                  />
                  <span className="ml-2 text-gray-300">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="hasExistingWebsite"
                    value="false"
                    onChange={() => setFormData({...formData, hasExistingWebsite: false})}
                    className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-700"
                  />
                  <span className="ml-2 text-gray-300">No</span>
                </label>
              </div>
            </div>
            
            {formData.hasExistingWebsite && (
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Current Website URL</label>
                <input
                  type="text"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
                  placeholder="https://example.com"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">What features do you need?</label>
              <div className="grid grid-cols-2 gap-2">
                {['E-commerce', 'Blog', 'User Authentication', 'Payment Processing', 'Admin Dashboard', 'Contact Form', 'Portfolio', 'Custom CMS'].map(feature => (
                  <label key={feature} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="webFeatures"
                      value={feature}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-700"
                    />
                    <span className="ml-2 text-sm text-gray-300">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'app':
        return (
          
          <div className="space-y-4">
            
            <h3 className="text-lg font-medium text-gray-200">App Development Details</h3>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Target Platform</label>
              <div className="grid grid-cols-2 gap-2">
                {['iOS', 'Android', 'Web App', 'Cross-platform'].map(platform => (
                  <label key={platform} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="platform"
                      value={platform}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-700"
                    />
                    <span className="ml-2 text-sm text-gray-300">{platform}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">App Features</label>
              <div className="grid grid-cols-2 gap-2">
                {['User Authentication', 'Push Notifications', 'In-app Purchases', 'Offline Mode', 'Location Services', 'Social Integration', 'File Upload', 'Analytics'].map(feature => (
                  <label key={feature} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="appFeatures"
                      value={feature}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-700"
                    />
                    <span className="ml-2 text-sm text-gray-300">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'design':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Graphic Design Details</h3>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">What design services do you need?</label>
              <div className="grid grid-cols-2 gap-2">
                {['Logo Design', 'Brand Identity', 'Print Materials', 'Social Media Graphics', 'Packaging Design', 'UI/UX Design', 'Illustration', 'Infographics'].map(type => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="designType"
                      value={type}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-700"
                    />
                    <span className="ml-2 text-sm text-gray-300">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Brand Colors (if you have preferences)</label>
              <input
                type="text"
                name="brandColors"
                value={formData.brandColors}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
                placeholder="e.g., Blue and gold, or #336699"
              />
            </div>
          </div>
        );
        
      case 'seo':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">SEO Service Details</h3>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Website URL</label>
              <input
                type="text"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
                placeholder="https://example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Target Keywords (comma-separated)</label>
              <textarea
                name="targetKeywords"
                value={formData.targetKeywords}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
                rows="3"
                placeholder="e.g., digital marketing, SEO services, web optimization"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Main Competitors (comma-separated)</label>
              <textarea
                name="competitors"
                value={formData.competitors}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
                rows="3"
                placeholder="List your top competitors' websites"
              ></textarea>
            </div>
          </div>
        );
        
      case 'social':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Social Media Marketing Details</h3>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Which platforms are you targeting?</label>
              <div className="grid grid-cols-2 gap-2">
                {['Facebook', 'Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest', 'Other'].map(platform => (
                  <label key={platform} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="platforms"
                      value={platform}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-700"
                    />
                    <span className="ml-2 text-sm text-gray-300">{platform}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Describe your target audience</label>
              <textarea
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
                rows="3"
                placeholder="Age range, interests, demographics, etc."
              ></textarea>
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Snap Forge Tools</h3>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Which tools are you interested in?</label>
              <div className="grid grid-cols-1 gap-2">
                {['Resume Builder', 'SEO Health Checker', 'ATS Score Checker', 'Other'].map(tool => (
                  <label key={tool} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="toolInterest"
                      value={tool}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-700"
                    />
                    <span className="ml-2 text-sm text-gray-300">{tool}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'full':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Full Brand Solution</h3>
            <p className="text-sm text-gray-400">Please provide details about your comprehensive brand needs</p>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Project Overview</label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
                rows="4"
                placeholder="Describe your business and what comprehensive services you need."
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Services Needed</label>
              <div className="grid grid-cols-2 gap-2">
                {['Logo & Branding', 'Website', 'Mobile App', 'SEO', 'Social Media', 'Content Creation', 'Digital Marketing', 'Other'].map(service => (
                  <label key={service} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="servicesNeeded"
                      value={service}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-700"
                    />
                    <span className="ml-2 text-sm text-gray-300">{service}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <div className="max-w-4xl mx-auto px-4 py-28">
        {formStep === 0 && (
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-purple-400">Snap Forge Will Be More Than Happy To Serve You</h1>
            <p className="mt-2 text-gray-300">How can we help your business grow? Select a service to get started.</p>
          </div>
        )}

        {formStep === 1 && (
          <div className="mb-8">
            <button 
              onClick={() => setFormStep(0)}
              className="flex items-center text-purple-400 hover:text-purple-300"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to services
            </button>
            <h1 className="text-2xl font-bold text-purple-400 mt-4">
              {services.find(s => s.id === selectedService)?.name}
            </h1>
          </div>
        )}

        {formStep === 2 && (
          <div className="text-center mb-8">
            <svg className="w-16 h-16 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h1 className="text-3xl font-bold text-purple-400 mt-4">Thank You!</h1>
            <p className="mt-2 text-gray-300">We've received your inquiry and will get back to you shortly.</p>
            <button 
              onClick={() => {
                setFormStep(0);
                setSelectedService('');
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  message: '',
                  budget: '',
                  timeline: '',
                  projectDetails: '',
                  websiteUrl: '',
                  goals: ''
                });
              }}
              className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        )}

        {formStep === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => handleServiceSelect(service.id)}
                className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:border-purple-500 hover:shadow-purple-900/20 cursor-pointer transition-all"
              >
                <h3 className="text-lg font-medium text-purple-400">{service.name}</h3>
                <p className="mt-2 text-sm text-gray-400">
                  {service.id === 'web' && "Custom websites tailored to your business needs"}
                  {service.id === 'app' && "Mobile applications for iOS and Android platforms"}
                  {service.id === 'design' && "Creative designs to elevate your brand identity"}
                  {service.id === 'seo' && "Boost your search rankings and online visibility"}
                  {service.id === 'social' && "Grow your audience across social media platforms"}
                  {service.id === 'tools' && "Use our specialized tools to enhance your business"}
                  {service.id === 'full' && "End-to-end brand development and digital strategy"}
                </p>
                <div className="mt-4 flex justify-end">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

        {formStep === 1 && (
          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring focus:ring-purple-500/20"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring focus:ring-purple-500/20"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring focus:ring-purple-500/20"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Company/Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring focus:ring-purple-500/20"
                  placeholder="Your company name"
                />
              </div>
            </div>
            
            {renderServiceSpecificFields()}
            
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring focus:ring-purple-500/20"
                >
                  <option value="">Select a range</option>
                  <option value="Less than $1,000">Less than $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000+">$25,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring focus:ring-purple-500/20"
                >
                  <option value="">Select a timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring focus:ring-purple-500/20"
                  rows="4"
                  placeholder="Tell us more about your project or any specific requirements"
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="h-4 w-4 text-purple-600 bg-gray-800 border-gray-700"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-400">
                  I agree to the <a href="#" className="text-purple-400 hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.
                </label>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors font-medium focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
      <Footer/>
    </div>
   
  );
};

export default Services