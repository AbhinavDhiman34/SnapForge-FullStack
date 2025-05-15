import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronRight, Users, Zap } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    subtitle: false,
    title: false,
    description: false,
    stats: false,
    team: false,
    values: false
  });
  
  const aboutRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  
  useEffect(() => {
    // Simple intersection observer to replace GSAP
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.getAttribute('data-section');
          if (targetId) {
            setIsVisible(prev => ({ ...prev, [targetId]: true }));
          }
          observer.unobserve(entry.target); // Only trigger once
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all sections
    if (subtitleRef.current) {
      subtitleRef.current.setAttribute('data-section', 'subtitle');
      observer.observe(subtitleRef.current);
    }
    
    if (titleRef.current) {
      titleRef.current.setAttribute('data-section', 'title');
      observer.observe(titleRef.current);
    }
    
    if (descriptionRef.current) {
      descriptionRef.current.setAttribute('data-section', 'description');
      observer.observe(descriptionRef.current);
    }
    
    if (statsRef.current) {
      statsRef.current.setAttribute('data-section', 'stats');
      observer.observe(statsRef.current);
    }
    
    if (teamRef.current) {
      teamRef.current.setAttribute('data-section', 'team');
      observer.observe(teamRef.current);
    }
    
    if (valuesRef.current) {
      valuesRef.current.setAttribute('data-section', 'values');
      observer.observe(valuesRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={aboutRef} className="bg-black text-gray-100 py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p 
            ref={subtitleRef} 
            className={`text-purple-500 uppercase tracking-wider font-medium mb-2 transition-all duration-700 transform ${isVisible.subtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Discover Our Story
          </p>
          <h2 
            ref={titleRef} 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent transition-all duration-700 delay-100 transform ${isVisible.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            About Our Company
          </h2>
          <div 
            ref={descriptionRef} 
            className={`max-w-3xl mx-auto transition-all duration-700 delay-200 transform ${isVisible.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-gray-300 text-lg md:text-xl">
              We're a team of passionate individuals dedicated to creating exceptional digital experiences.
              Our journey began with a vision to transform how people interact with technology.
            </p>
          </div>
        </div>
        
        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { number: '10+', text: 'Years Experience' },
            { number: '250+', text: 'Projects Completed' },
            { number: '95%', text: 'Client Satisfaction' },
            { number: '24', text: 'Team Members' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`bg-gray-900 p-6 rounded-lg text-center transform transition-all duration-700 delay-${index * 100} hover:scale-105 hover:shadow-lg hover:shadow-purple-900/20 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-4xl font-bold text-purple-500 mb-2">{stat.number}</p>
              <p className="text-gray-400">{stat.text}</p>
            </div>
          ))}
        </div>
        
        {/* Team Section */}
        <div ref={teamRef} className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center">Meet Our <span className="text-purple-500">Team</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <div 
                key={item} 
                className={`bg-gray-900 rounded-lg overflow-hidden transition-all duration-700 delay-${index * 100} transform ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-700">
                  <img src={`/api/placeholder/300/300`} alt="Team member" className="w-full h-64 object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-1">Team Member {item}</h4>
                  <p className="text-purple-400 mb-4">Position Title</p>
                  <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel justo.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Values Section */}
        <div ref={valuesRef}>
          <h3 className="text-3xl font-bold mb-10 text-center">Our <span className="text-purple-500">Values</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Star className="h-8 w-8 text-purple-500" />, title: 'Excellence', description: 'We strive for excellence in everything we do, pushing boundaries and exceeding expectations.' },
              { icon: <Users className="h-8 w-8 text-purple-500" />, title: 'Collaboration', description: 'We believe in the power of teamwork and foster a collaborative environment to achieve greater results.' },
              { icon: <Zap className="h-8 w-8 text-purple-500" />, title: 'Innovation', description: 'We embrace change and constantly explore new ideas to drive meaningful innovations.' }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`p-6 bg-gray-900 rounded-lg border border-gray-700 flex flex-col items-center text-center transition-all duration-700 delay-${index * 100} transform ${isVisible.values ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <div className="p-3 bg-purple-900/30 rounded-full mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200">
            Get to know us better
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;