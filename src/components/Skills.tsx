"use client"; // Add this at the top of the file

import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";

const skillIcons = [
  { icon: <FaHtml5 size={100} />, label: "HTML", description: "Markup language for structuring web content." },
  { icon: <FaCss3Alt size={100} />, label: "CSS", description: "Styling language for designing web pages." },
  { icon: <FaReact size={80} />, label: "React", description: "JavaScript library for building user interfaces." },
  { icon: <FaJsSquare size={100} />, label: "JavaScript", description: "Programming language for dynamic web content." },
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the same card
  };

  const handleOutsideClick = () => {
    setActiveIndex(null);
  };

  return (
    <div
      className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-16 relative"
      onClick={handleOutsideClick}
    >
      <div
        className="text-white w-[90%] max-w-[1200px] mx-auto p-6 text-center"
        onClick={(e) => e.stopPropagation()} // Prevent outside click when clicking inside cards
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className={`h-[140px] sm:h-[180px] md:h-[220px] w-full flex flex-col justify-center items-center bg-white/10 p-4 rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg relative ${
                activeIndex === index ? "ring-4 ring-orange-400" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              {skill.icon}
              <p className="mt-4 text-lg font-medium">{skill.label}</p>
              {activeIndex === index && (
                <div className="absolute top-full mt-4 bg-black/80 text-white p-4 rounded-md shadow-md w-full text-sm">
                  {skill.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
