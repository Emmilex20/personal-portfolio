"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/project.png";
import TodoImg from "../assets/To-do.jpg";
import WeatherImg from "../assets/Weather-img.jpg";
import AiPro from "../assets/Ai-pro.png";

const projects = [
  {
    title: "E-commerce Hair Products",
    desc: "A modern, responsive e-commerce platform for hair products, featuring dynamic product listings, a shopping cart with real-time price updates, secure Stripe payment integration, and a sleek UI. Built with React, Tailwind CSS, Node.js, MongoDB, and Redux Toolkit, this project demonstrates expertise in creating user-friendly and functional e-commerce solutions.",
    devStack: "MongoDB, Express, React, Node.js",
    link: "https://complete-hair-client-app.vercel.app/",
    git: "https://github.com/Emmilex20/complete-hair-client-app",
    src: proj4,
  },
  {
    title: "Interactive E-learning Platform",
    desc: "A responsive and user-friendly platform for engaging online learning experiences, featuring interactive courses, quizzes, and progress tracking. Built with Next.js and Tailwind CSS, this project highlights expertise in creating modern, scalable, and intuitive e-learning solutions.",
    devStack: "Next.js, Tailwind",
    link: "https://e-learning-website-beige.vercel.app/",
    git: "https://github.com/Emmilex20/E-learning_website",
    src: proj2,
  },
  {
    title: "Portfolio Website",
    desc: "A sleek and responsive personal portfolio showcasing projects, skills, and experience. Built with Next.js and Tailwind CSS, the site features an interactive design, smooth navigation, and optimized performance, highlighting creativity and technical expertise in web development.",
    devStack: "React, Tailwind",
    link: "#",
    git: "#",
    src: proj3,
  },
  {
    "title": "To-Do App",
    "desc": "A beautifully designed and intuitive task management application built with React. This app allows users to add, complete, and delete tasks with a seamless UI, real-time updates, and smooth animations. Styled with modern CSS techniques, it offers a clean, responsive experience across all devices.",
    "devStack": "React",
    "link": "https://todo-list-kappa-ebon.vercel.app/",
    "git": "https://github.com/Emmilex20/Todo-list",
    "src": TodoImg,
},
  {
    "title": "Weather App",
    "desc": "A beautifully designed and intuitive weather application built with React. This app provides real-time weather updates, including temperature, humidity, and wind speed, for any location worldwide. With a sleek and responsive UI, users can easily search for cities and get accurate forecasts. Styled with modern CSS techniques, the app ensures a smooth and engaging user experience.",
    "devStack": "React",
    "link": "https://weather-app-eta-seven-28.vercel.app",
    "git": "https://github.com/Emmilex20/Weather-App",
    "src": WeatherImg,
},
  {
    "title": "AI Fitness-Trainer App",
    "desc": "An intelligent and interactive fitness-trainer web application built with Next.js, designed to deliver personalized workout guidance and health insights. The app utilizes AI to recommend exercises tailored to user preferences, goals, and fitness levels, while offering real-time feedback and progress tracking. Featuring a sleek, modern, and responsive interface, the application ensures a smooth and engaging user experience across all devices. Styled with advanced CSS techniques and optimized through Next.js capabilities, it seamlessly combines performance, functionality, and visual appeal for a comprehensive digital fitness journey.",
    "devStack": "NextJs",
    "link": "https://emmycode-ai.vercel.app/",
    "git": "https://github.com/Emmilex20/emmycode-ai",
    "src": AiPro,
},
];

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
      <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1200px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${index % 2 === 1 ? " md:flex-row-reverse gap-12" : "md:flex-row"}`}
          >
            <div className="space-y-4 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4"></div>
              <div>
                <a
                  href={project.link}
                  className="text-orange-400 hover:underline mr-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.git}
                  className="text-orange-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={`Screenshot of ${project.title}`}
                className="h-[350px] w-[500px] object-cover border rounded border-orange-400"
                priority
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
