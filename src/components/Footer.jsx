import React from 'react';
import preshtech from "../assets/preshtech.png";

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center gap-2 bg-purple-950 p-4 text-center sm:text-left'>
      <div>
        <img className='h-12 w-12 object-contain' src={preshtech} alt="Preshtech Logo" />
      </div>
      <div className='text-white text-sm sm:text-base'>
        © 2025 Preshtech. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
