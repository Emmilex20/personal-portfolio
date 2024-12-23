/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">

      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

      <div className="relative">
        <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Emmanuel Agina</h1>
        </div>

        <motion.div className="hidden md:block absolute left-[50px] md:left-[280px] top-[20px] md:top-[170px]" drag>
          <Image src={cursor} height="120" width="120" alt="cursor" draggable="false" />
        </motion.div>

        <motion.div className="hidden md:block absolute right-[20px] md:right-[220px] top-[20px]" drag>
          <Image src={lightning} height="100" width="100" alt="lightning" draggable="false" />
        </motion.div>

        <p className="text-center text-base md:text-xl max-w-[90%] md:max-w-[500px] mx-auto mt-8 text-white/80 px-4">
          I am a full-stack developer focused on creating websites that provide the best experience for users.
        </p>

        <Image
          src={profilepic}
          alt="profile picture"
          className="h-auto w-3/4 md:w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
