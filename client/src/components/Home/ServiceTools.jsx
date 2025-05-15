import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesToolsSection = () => {
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);
  const toolsRef = useRef(null);
  const headingRef = useRef(null);
  
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and applications built to grow your business online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      id: 2,
      title: "Graphic Designing",
      description: "Eye-catching visual content that captures your brand's essence",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      )
    },
    {
      id: 3,
      title: "Logo Designing",
      description: "Memorable logos that represent your brand identity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9a3 3 0 0 1 0-6h3"></path>
          <path d="M13 17a3 3 0 0 1 0 6h-3"></path>
          <path d="M22 17a3 3 0 0 0 0-6h-3"></path>
          <path d="M11 9a3 3 0 0 0 0 6h3"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "SEO",
      description: "Enhance your visibility and drive organic traffic to your site",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
        </svg>
      )
    },
    {
      id: 5,
      title: "Social Media Ads",
      description: "Instagram, Facebook and LinkedIn ads that convert",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Comprehensive strategies to boost your online presence",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10"></path>
          <path d="M18 20V4"></path>
          <path d="M6 20v-4"></path>
        </svg>
      )
    }
  ];

  const tools = [
    {
      id: 1,
      title: "Resume Builder",
      description: "Create professional resumes that get you noticed by employers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      title: "ATS Score Checker",
      description: "Optimize your resume to pass Applicant Tracking Systems",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      id: 3,
      title: "SEO Health Checker",
      description: "Analyze and improve your website's search engine performance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
      )
    }
  ];

  useEffect(() => {
  

    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );

    // Services cards animation
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );

    // Tools cards animation
    gsap.fromTo(
      ".tool-card",
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: toolsRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black">
      <div className="absolute h-full w-full bg-black">
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div> */}
      </div>
      <div className="relative container mx-auto px-10">
        <div ref={headingRef} className="text-center mb-16 ">
          <div className='pt-12'><h2 className="text-4xl font-bold text-white mb-4 ">Our Services & Tools</h2></div>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive IT solutions to help your business grow in the digital landscape.
          </p>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-10 text-center">Services We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card bg-transparent  rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl hover:-translate-y-2 border border-purple-500"
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div ref={toolsRef}>
          <h3 className="text-2xl font-semibold text-white mb-10 text-center">Tools We Provide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.id}
               className="tool-card bg-transparent  rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl hover:-translate-y-2 border border-purple-500"
              >
                <div className="text-blue-400 mb-4">{tool.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{tool.title}</h4>
                <p className="text-gray-300">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center"
          >
           Explore More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesToolsSection;