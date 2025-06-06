import React from 'react';
import InfoCard from './InfoCard';  // Assuming you have this in the same folder
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl w-[80%] md:w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="px-6 md:p-0 grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center">
        <div className="md:col-span-5">
          <InfoCard
            image={book}
            title="Education"
            description="I have a certification in Web Development and I am focusing on technologies like React, Next.js, and Tailwind CSS"
          />
        </div>
        <div className="md:col-span-3">
          <InfoCard
            image={finance}
            title="Problem-Solving"
            description="I approach challenges with a logical and systematic mindset"
          />
        </div>
        <div className="md:col-span-3">
          <InfoCard
            image={card}
            title="Experience"
            description="I have a diverse portfolio of projects"
          />
        </div>
        <div className="md:col-span-5">
          <InfoCard
            image={pc}
            title="Technical Skills"
            description="As a Fullstack Web Developer, I specialize in Salesforce, React JS, Next.js, and Tailwind CSS. My expertise extends to creating responsive, user-friendly interfaces and efficient backend solutions."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
