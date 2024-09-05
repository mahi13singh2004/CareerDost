import React, { useState, useEffect } from 'react';

const features = [
  { title: "AI CHATBOT", description: "Interactive AI-driven chat support." },
  { title: "CAREER COUNSELLOR", description: "Expert advice for career planning." },
  { title: "RESOURCES", description: "Extensive library of resources for required exams." },
  { title: "WEBINARS", description: "Live and recorded webinars from experts." },
  { title: "A-Z ABOUT COLLEGES", description: "Comprehensive college information ranging to all fields." },
  { title: "NEP ALIGNED", description: "Career paths aligned with NEP 2020." },
  { title: "24*7 ACTIVE SUPPORT", description: "Round-the-clock support." },
];

const SwipeableCard = ({ feature, bounce }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className={`w-72 h-72 bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 p-8 rounded-full shadow-lg flex flex-col items-center justify-center text-center transition-transform transform ${bounce ? 'animate-spin' : ''} hover:scale-105 hover:transition-transform hover:duration-300`}
        style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
      >
        <h2 className="text-3xl font-bold mb-4 text-black" style={{ userSelect: 'none' }}>
          {feature.title}
        </h2>
        <p className="text-xl text-white" style={{ userSelect: 'none' }}>
          {feature.description}
        </p>
      </div>
    </div>
  );
};


const Hero = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true);
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2000); // Change feature every 2 seconds
  
    return () => clearInterval(interval); 
  }, []);
  

  useEffect(() => {
    if (bounce) {
      const timer = setTimeout(() => setBounce(false), 500); 
      return () => clearTimeout(timer); 
    }
  }, [bounce]);

  return (
    <div className='w-full h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-16'>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:pr-12">
        <h1 className='text-5xl md:text-6xl font-extrabold text-gray-800 mb-8 leading-tight' style={{ userSelect: 'none' }}>
          Find Your Career Unicorn!
        </h1>
        <p className='text-xl md:text-2xl text-gray-800 mb-10' style={{ userSelect: 'none' }}>
          Chart your best career course with our AI innovations and expert career support, and much more.
        </p>
        <a href="https://signin-six-coral.vercel.app/" className="m-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400">
          Get Started NOW!
        </a>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center mt-8 md:mt-0 p-8"> 
        <SwipeableCard feature={features[currentFeatureIndex]} bounce={bounce} />
      </div>
    </div>
  );
};

export default Hero;
