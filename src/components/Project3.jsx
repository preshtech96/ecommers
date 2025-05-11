import React from 'react';
import pr3 from "../assets/pr3.png";
import prj3 from "../assets/pr3.png";
import proj3 from "../assets/pr3.png";

const Project3 = () => {
  return (
    <div className="px-4 py-5">
      {/* Images Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-5">
        <img className="w-full sm:w-1/3 object-cover" src={pr3} alt="Project 1" />
        <img className="w-full sm:w-1/3 object-cover" src={prj3} alt="Project 2" />
        <img className="w-full sm:w-1/3 object-cover" src={proj3} alt="Project 3" />
      </div>

      {/* Text and Button Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-8 mt-5 gap-3 sm:gap-0">
        <h1 className="text-center sm:text-left text-sm sm:text-base">
          <span className="font-extrabold text-black">New Arrivals: </span>
          Don’t miss this opportunity at a special discount just for this week
        </h1>
        <button className="border-2 border-black px-4 py-2 rounded-[5px] hover:bg-black hover:text-white transition duration-300">
          View all
        </button>
      </div>
    </div>
  );
};

export default Project3;
