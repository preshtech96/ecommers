import React from "react";
import move from "../assets/move.png";
import pment from "../assets/pment.png";
import percent from "../assets/percent.png";
import qual from "../assets/qual.png";

const features = [
  {
    img: move,
    title: "Delivery from 1 hour",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur necessitatibus.",
  },
  {
    img: pment,
    title: "Payment only online",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur necessitatibus.",
  },
  {
    img: percent,
    title: "New stock and sales",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur necessitatibus.",
  },
  {
    img: qual,
    title: "Quality assurance",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur necessitatibus.",
  },
];

const Project2 = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md: py-5 px-5 border-b-2">
      {features.map((item, index) => (
        <div key={index} className="flex items-start gap-2 w-full md:w-1/2 lg:w-1/4">
          <img className="h-12 w-12 object-contain" src={item.img} alt={item.title} />
          <div>
            <h1 className="font-extrabold">{item.title}</h1>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project2;
