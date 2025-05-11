import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import apple from "../assets/apple.png";
import bar from "../assets/bar.png";
import bby from "../assets/bby.png";
import begg from "../assets/begg.png";
import bsbrd from "../assets/bsbrd.png";
import meat from "../assets/meat.png";
import scoop from "../assets/scoop.png";
import sno from "../assets/sno.png";
import toil from "../assets/toil.png";
import wheat from "../assets/wheat.png";
import cup from "../assets/cup.png";

export const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleChange = () => {
    setSelectedCategory(!selectedCategory);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const categories = [
    { id: 1, to: "/fruits", icon: apple, label: "Fruit & Vegetables" },
    { id: 2, to: "/Foodpage", icon: meat, label: "Meals" },
    { id: 3, to: "/breakfast", icon: begg, label: "Breakfast & Dairy" },
    { id: 4, to: "/bakery", icon: bsbrd, label: "Breads & Bakery" },
    { id: 5, to: "/beverages", icon: cup, label: "Beverages" },
    { id: 6, to: "/Electpage", icon: sno, label: "Electronics" },
    { id: 7, to: "/snacks", icon: bar, label: "Biscuits & Snacks" },
    { id: 8, to: "/News", icon: wheat, label: "News" },
    { id: 9, to: "/household", icon: scoop, label: "Household Needs" },
    { id: 10, to: "/healthcare", icon: toil, label: "Healthcare" },
    { id: 11, to: "/Wearspage", icon: bby, label: "Wears & Elect" },
  ];

  return (
    <>
     
      <div className="md:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="bg-purple-700 text-white px-4 py-2 rounded-md shadow-md"
        >
          ☰ Categories
        </button>
      </div>

    
      <div className={`bg-white border border-gray-300 rounded-md p-4 shadow-md h-auto
        ${showSidebar ? "block" : "hidden"} 
        md:block w-full md:w-80 ml-0 md:ml-5 transition-all duration-300`}>
        
        <button 
          onClick={handleChange} 
          className="w-full flex items-center justify-start gap-2 px-4 py-2 mb-4 hover:bg-purple-800 text-black font-bold rounded transition"
        >
          🗳️ All categories
        </button>

        {selectedCategory && (
          <div className="flex flex-col space-y-2">
            {categories.map(({ id, to, icon, label }) => (
              <Link
                key={id}
                to={to}
                className="p-2 hover:bg-purple-800 cursor-pointer text-black font-bold flex items-center gap-4 rounded-md transition"
              >
                <img src={icon} alt={label} className="w-6 h-6" />
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
