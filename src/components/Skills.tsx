import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';

const skillIcons = [
  { icon: <FaHtml5 size={100} />, label: "HTML" },
  { icon: <FaCss3Alt size={100} />, label: "CSS" },
  { icon: <FaReact size={80} />, label: "React" },
  { icon: <FaJsSquare size={100} />, label: "JavaScript" },
];

const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-16">
      <div className="text-white w-[90%] max-w-[1200px] mx-auto p-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[140px] sm:h-[180px] md:h-[220px] w-full flex flex-col justify-center items-center bg-white/10 p-4 rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-medium">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
