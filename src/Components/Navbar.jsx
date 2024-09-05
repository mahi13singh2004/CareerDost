import React, { useState } from 'react';

const Navbar = () => {
  const [info, setInfo] = useState(['Initial info']);

  const addInfo = () => {
    setInfo([...info, `New info ${info.length + 1}`]);
  };

  return (
    <div className="relative">
      <div className="w-full h-16 flex justify-between items-center px-4 sticky top-0 z-50 bg-white shadow-md">
        <h1 className='tracking-widest font-bold text-2xl'>Careerदोस्त</h1>
        <div className="flex space-x-4 items-center">
          <a
            href="https://contactus-weld.vercel.app/"
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-300 transform hover:scale-105 hover:rotate-2"
            onClick={addInfo}
            style={{ margin: '10px' }} 
          >
            Connect with Us
          </a>
          <a
            href="https://careerdostpost.vercel.app/"
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-300 transform hover:scale-105 hover:rotate-2"
            style={{ margin: '8px' }} 
          >
            Post Login Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
