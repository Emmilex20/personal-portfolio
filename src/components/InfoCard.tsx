import React from 'react';
import Image, { StaticImageData } from "next/image";

// Define the type for the props
interface InfoCardProps {
  image: StaticImageData;  // Type for the imported image
  title: string;
  description: string;
}

// Functional component with typed props
const InfoCard: React.FC<InfoCardProps> = ({ image, title, description }) => (
  <div className="w-full md:w-[95%] relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
    <div className="flex flex-row p-6">
      <Image src={image} alt={title} className="w-auto h-[130px]" />
      <div className="flex flex-col mt-4">
        <h2 className="text-2xl font-bold text-white/80 mb-2">{title}</h2>
        <p className="text-lg text-white/70">{description}</p>
      </div>
    </div>
  </div>
);

export default InfoCard;
