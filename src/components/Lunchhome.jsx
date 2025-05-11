import React from 'react';
import bdb from "../assets/bdb.png";
import { Sidebar } from './Sidebar';
import { Link } from 'react-router-dom';

const Lunchhome = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <Sidebar />
      <div className="w-full flex flex-col px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-5 py-4">
          
          <div className="flex flex-row justify-center sm:flex-row sm:flex-wrap gap-2 font-bold">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/fruits">Fruits & Vegetables</Link>
            <Link to="/beverages">Beverages</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

         
          <div className="flex flex-row justify-around sm:flex-row gap-2 pr-0 md:pr-10">
            <Link to="/trending" className="font-bold">Trending Products</Link>
            <Link to="/sale" className="text-red-600">
              Almost finished{" "}
              <span className="bg-red-600 text-white px-2 rounded-[5px]">SALE</span>
            </Link>
          </div>
        </div>

        
        <img className="w-full rounded-lg object-cover" src={bdb} alt="banner" />
      </div>
    </div>
  );
};

export default Lunchhome;
