import React from "react";
import { Link } from "react-router-dom";
import loc from "../assets/loc.png";
import searchbtn from "../assets/searchbtn.png";
import acc from "../assets/acc.png";
import lov from "../assets/lov.png";
import cert from "../assets/cert.png";
import preshtech from "../assets/preshtech.png";

export const Nav = () => {
  return (
    <div>
      
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center bg-purple-900 p-2 text-center md:text-left">
        <h1 className="text-white font-bold text-sm md:text-base">
          <span>FREE </span>delivery & 40% Discount for next 3 orders! Place your 1st order in
        </h1>
        <h1 className="text-zinc-300 text-sm md:text-base">
          Until the end of the sales:
          <span className="text-white font-bold"> 47</span> days
          <span className="text-white font-bold"> 06</span> hours
          <span className="text-white font-bold"> 55</span> minutes
          <span className="text-white font-bold"> 51</span> secs
        </h1>
      </div>

      
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-20 py-3 border-b border-gray-300 gap-2 text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link to="#">About Us</Link>
          <Link to="#">My account</Link>
          <Link to="#">Wishlist</Link>
          <h1 className="text-center sm:text-left">
            We deliver to you daily from{" "}
            <span className="font-bold text-orange-700">8:00 am to 6:00 pm</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <h1>English</h1>
          <h1>USD</h1>
          <h1>Order Tracking</h1>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center gap-10 py-4 px-4 lg:px-10">
        
        <div className="flex items-center gap-5">
          <img src={preshtech} alt="group" className="w-20 h-20 object-contain" />
          <img src={loc} alt="location" className="w-5 h-5" />
          <h1 className="text-sm">Deliver to all</h1>
        </div>

        
        <div className="flex bg-gray-400 rounded-[5px] w-[70%] min-w-[250px]">
          <input
            className="w-full rounded-[5px] h-10 placeholder:text-white placeholder:pl-5 border-none outline-none placeholder:font-bold text-sm p-2 bg-gray-400 text-white"
            type="text"
            placeholder="Search for product, brands or categories..."
          />
          <img className="p-2 w-10 h-10" src={searchbtn} alt="Search" />
        </div>

       
        <div className="flex items-center gap-5">
          <img src={acc} alt="Account" className="w-6 h-6" />
          <Link to="#" className="text-sm">Signin Account</Link>
          <img src={lov} alt="Wishlist" className="w-6 h-6" />
          <img src={cert} alt="Cart" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
