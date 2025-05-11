import React from 'react';
import preshtech from "../assets/preshtech.png";

const Footer = () => {
  return (
    <div className='flex justify-center items-center gap-2 bg-purple-950'>
        <div><img className='h-12 w-12 object-contain' src={preshtech} alt="" /></div>
        <div className='text-white'>Copyright © 2025 Preshtech. All rights reserved.</div>
    </div>
  )
}

export default Footer