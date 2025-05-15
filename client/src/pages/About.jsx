import { useState } from 'react';
import { ChevronDown, Users, Award, TrendingUp, Clock, Check, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Global/Navbar';

export default function AboutPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  
  return (
    <div className="bg-black text-gray-200 min-h-screen font-sans">
      {/* Navigation Bar */}
     <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-35">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">About <span className="text-blue-400">SnapForge</span></h1>
            <p className="text-xl text-gray-400 mb-8">Innovating the digital landscape with cutting-edge solutions</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="bg-blue-400 absolute -left-4 -top-4 w-64 h-64 opacity-10 rounded-lg"></div>
                <div className="bg-gray-800 p-8 relative z-10 rounded-lg border border-gray-700">
                  <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                  <p className="text-gray-300 mb-6">
                    Founded in 2025, SnapForge IT Solutions was born from a vision to transform how businesses approach their digital presence. 
                    We recognized a gap in the market for comprehensive, client-focused IT solutions that deliver measurable results.
                  </p>
                  <p className="text-gray-300">
                    Today, we're a growing team of passionate developers, designers, and digital marketers committed to 
                    helping businesses of all sizes thrive in the digital landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-16">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Why Choose SnapForge?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-20 p-2 rounded-full mr-4">
                    <Award className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Quality-Focused Solutions</h4>
                    <p className="text-gray-400">We prioritize excellence in every project, ensuring high-quality deliverables that exceed expectations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-20 p-2 rounded-full mr-4">
                    <Users className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Client-Centric Approach</h4>
                    <p className="text-gray-400">Your business goals are our priority. We develop custom strategies tailored to your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-20 p-2 rounded-full mr-4">
                    <TrendingUp className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Result-Driven Strategies</h4>
                    <p className="text-gray-400">Our focus is on delivering measurable results that contribute to your business growth.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-20 p-2 rounded-full mr-4">
                    <Clock className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Timely Delivery</h4>
                    <p className="text-gray-400">We respect deadlines and ensure prompt delivery without compromising on quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">The principles that guide everything we do at SnapForge IT Solutions</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 transform transition-transform hover:scale-105">
              <div className="bg-blue-500 bg-opacity-20 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <Briefcase className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Excellence</h3>
              <p className="text-gray-400">We maintain the highest standards of professionalism in all our interactions and deliverables.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 transform transition-transform hover:scale-105">
              <div className="bg-blue-500 bg-opacity-20 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <Users className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
              <p className="text-gray-400">We view every client relationship as a partnership built on trust, transparency, and mutual growth.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 transform transition-transform hover:scale-105">
              <div className="bg-blue-500 bg-opacity-20 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <TrendingUp className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
              <p className="text-gray-400">We stay at the forefront of technology trends to provide cutting-edge solutions to our clients.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Comprehensive digital solutions tailored to your business needs</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="16" x="2" y="4" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 4v16" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-400 mb-4">Custom websites and applications built to grow your business online</p>
              <a href="#" className="text-blue-400 hover:underline inline-flex items-center">
                Learn more <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Graphic Designing</h3>
              <p className="text-gray-400 mb-4">Eye-catching visual content that captures your brand's essence</p>
              <a href="#" className="text-blue-400 hover:underline inline-flex items-center">
                Learn more <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 8L8 12L12 16" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 12H8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Logo Designing</h3>
              <p className="text-gray-400 mb-4">Memorable logos that represent your brand identity</p>
              <a href="#" className="text-blue-400 hover:underline inline-flex items-center">
                Learn more <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">SEO</h3>
              <p className="text-gray-400 mb-4">Enhance your visibility and drive organic traffic to your site</p>
              <a href="#" className="text-blue-400 hover:underline inline-flex items-center">
                Learn more <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.3431 2 12 3.34315 12 5V8H18C18.5523 8 19 8.44772 19 9V14C19 14.5523 18.5523 15 18 15H12V22H5C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H18Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Social Media Ads</h3>
              <p className="text-gray-400 mb-4">Instagram, Facebook and LinkedIn ads that convert</p>
              <a href="#" className="text-blue-400 hover:underline inline-flex items-center">
                Learn more <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
              <p className="text-gray-400 mb-4">Comprehensive strategies to boost your online presence</p>
              <a href="#" className="text-blue-400 hover:underline inline-flex items-center">
                Learn more <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tools We Provide</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Free resources to help you succeed in the digital world</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Resume Builder</h3>
              <p className="text-gray-400">Create professional resumes that get you noticed by employers</p>
              <button className="mt-4 bg-gray-800 hover:bg-gray-700 text-blue-400 px-4 py-2 rounded transition-colors">Try Now</button>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">ATS Score Checker</h3>
              <p className="text-gray-400">Optimize your resume to pass Applicant Tracking Systems</p>
              <button className="mt-4 bg-gray-800 hover:bg-gray-700 text-blue-400 px-4 py-2 rounded transition-colors">Try Now</button>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 9L13 4L7 10L5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Health Checker</h3>
              <p className="text-gray-400">Analyze and improve your website's search engine performance</p>
              <button className="mt-4 bg-gray-800 hover:bg-gray-700 text-blue-400 px-4 py-2 rounded transition-colors">Try Now</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">How we work with clients to ensure successful outcomes</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Discovery</h3>
              <p className="text-gray-400">We understand your business goals and challenges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Strategy</h3>
              <p className="text-gray-400">We develop a custom solution tailored to your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Implementation</h3>
              <p className="text-gray-400">We execute the plan with precision and care</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-2xl font-bold">4</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Optimization</h3>
              <p className="text-gray-400">We continuously refine for optimal results</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Get answers to common questions about our services</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What makes SnapForge different from other IT solution providers?",
                answer: "At SnapForge, we combine technical expertise with a deep understanding of business objectives. Our client-centric approach ensures that every solution is tailored to your specific needs, not just generic templates. We focus on delivering measurable results and building long-term partnerships."
              },
              {
                question: "How long does it typically take to complete a project?",
                answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while more complex applications could take 2-3 months. During our initial consultation, we'll provide you with a detailed timeline specific to your project requirements."
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Absolutely! We offer various maintenance and support packages to ensure your digital assets continue to perform optimally. Our support includes regular updates, security patches, performance monitoring, and technical assistance whenever you need it."
              },
              {
                question: "How do you ensure the security of websites and applications?",
                answer: "Security is a top priority at SnapForge. We implement industry-standard security protocols, regular security audits, encrypted data transmission, secure hosting environments, and follow best practices for code security. We also provide regular updates to patch any potential vulnerabilities."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-800 rounded-lg overflow-hidden">
                <button 
                  className="w-full text-left p-4 bg-gray-900 flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-bold">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`bg-gray-800 overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-40 p-4' : 'max-h-0'}`}>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Hear from businesses that have trusted us with their digital presence</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="text-blue-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-400 text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">"Their SEO expertise has been invaluable. Within three months, we're ranking on the first page for our key search terms. Our organic traffic has increased by 150% and continues to grow."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Robert Smith</h4>
                  <p className="text-gray-400 text-sm">Marketing Director, Quantum Retail</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="text-blue-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-400 text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">"The logo and branding package SnapForge created for us perfectly captures our company's vision. Their designers were attentive, professional, and delivered beyond our expectations."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Amanda Johnson</h4>
                  <p className="text-gray-400 text-sm">Founder, EcoLiving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Indicators */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Trust Us</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Building confidence through excellence and reliability</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-blue-400 text-4xl font-bold mb-2">100%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-blue-400 text-4xl font-bold mb-2">24/7</div>
              <p className="text-gray-300">Technical Support</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-blue-400 text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-blue-400 text-4xl font-bold mb-2">10+</div>
              <p className="text-gray-300">Expert Team Members</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold mb-2">Ready to transform your digital presence?</h3>
                <p className="text-gray-400">Schedule a free consultation with our experts today.</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold transition-colors">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Meet the professionals behind SnapForge IT Solutions</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-bold mb-1">John Doe</h3>
              <p className="text-blue-400 mb-3">CEO & Founder</p>
              <p className="text-gray-400 text-sm">10+ years of experience in digital transformation and IT leadership</p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SP</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Parker</h3>
              <p className="text-blue-400 mb-3">Lead Web Developer</p>
              <p className="text-gray-400 text-sm">Expert in front-end and back-end technologies with 8+ years of experience</p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Johnson</h3>
              <p className="text-blue-400 mb-3">Creative Director</p>
              <p className="text-gray-400 text-sm">Award-winning designer with expertise in branding and UX/UI design</p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AL</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Amy Lee</h3>
              <p className="text-blue-400 mb-3">Digital Marketing Specialist</p>
              <p className="text-gray-400 text-sm">SEO expert with proven track record in growing online visibility</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-400 mb-8">Have questions about our services? Want to discuss your project? Reach out to us and we'll get back to you promptly.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-20 p-2 rounded-full mr-4">
                    <Mail className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-400">info@snapforge.tech</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-20 p-2 rounded-full mr-4">
                    <Phone className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-20 p-2 rounded-full mr-4">
                    <MapPin className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Office</h4>
                    <p className="text-gray-400">123 Tech Street, Silicon Valley, CA 94000</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <form className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea rows="5" className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white"></textarea>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    
    </div>
  );

};
