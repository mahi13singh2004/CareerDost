import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

const App = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #e0f2f1, #b3e5fc, #f5f5f5)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={gradientStyle} className="w-full h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
