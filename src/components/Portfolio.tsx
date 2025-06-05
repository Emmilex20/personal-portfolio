"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/project.png";
import TodoImg from "../assets/To-do.jpg";
import WeatherImg from "../assets/Weather-img.jpg";
import AiPro from "../assets/Ai-pro.jpg";
import calculator from "../assets/calculator.jpg"
import quiz from "../assets/quiz.jpg"
import clock from "../assets/clock.jpg"
import imageCarousel from "../assets/imageCarousel.png"
import recipe from "../assets/recipe.jpg"

const projects = [
  {
    title: "Advanced Calculator",
    desc: "This project is a modern calculator application designed with a stylish glassmorphism user interface, featuring smooth gradients, transparency, and blur effects to create an elegant and visually appealing experience. It is built using pure HTML, CSS, and JavaScript, and includes functionality for basic arithmetic calculations along with a light and dark mode toggle to enhance usability. The calculator is fully responsive, ensuring it works seamlessly across all device sizes, from desktops to mobile screens. Interactive button animations and a copy-to-clipboard feature add to the overall user-friendly design, showcasing my skills in front-end development and UI design.",
    devStack: "HTML, CSS, JavaScript",
    link: "https://advanced-calculator-ten.vercel.app/",
    git: "https://github.com/Emmilex20/Advanced-Calculator",
    src: calculator,
  },
  {
    title: "Digital Clock Timer",
    desc: "This Multi Countdown Timer Web App is a dynamic and intuitive tool built with HTML, CSS, and vanilla JavaScript, designed to manage multiple countdowns simultaneously. Each timer can be individually labeled, started, paused, or reset, offering users complete control over their time management. The app supports desktop notifications and sound alerts to notify users when a timer ends, and it automatically saves all timer states using localStorage, allowing them to resume even after a page refresh. Users can toggle between light and dark themes for a personalized experience and view a detailed history of completed timers. Additionally, the app includes features to export and import countdown history, making it easy to back up or transfer data. With a clean, responsive interface and practical functionality, this project showcases strong frontend skills, effective use of browser APIs, and a focus on user-centric design.",
    devStack: "HTML, CSS, JavaScript",
    link: "https://digital-clock-timer-five.vercel.app/",
    git: "https://github.com/Emmilex20/Digital-clock-timer",
    src: clock,
  },
  {
    title: "Quiz App",
    desc: "An interactive quiz application built with React that challenges users with timed multiple-choice questions. Users can choose the number of questions they wish to attempt, receive instant feedback on their answers, and view detailed explanations for each question. The app tracks correct and wrong answers, displays a progress bar and countdown timer, and celebrates completion with a confetti animation. Clean UI, intuitive flow, and responsive design make it ideal for both learning and fun.",
    devStack: "React, TailwindCSS",
    link: "https://quiz-app-2n35.vercel.app/",
    git: "https://github.com/Emmilex20/Quiz-app",
    src: quiz,
  },
  {
    title: "Recipe Search App",
    desc: "Recipe Search App is a sleek and responsive web application that allows users to search for meals, view detailed recipes with ingredients, and explore dishes by category. Built with React, Vite, Tailwind CSS, and TheMealDB API, it features live search suggestions, category filtering, and local search history for a seamless user experience. The app also includes visually engaging recipe cards, a modern UI, and a clean footer with social links—designed to be both functional and visually appealing.",
    devStack: "React, TailwindCSS",
    link: "https://recipe-search-rose.vercel.app/",
    git: "https://github.com/Emmilex20/Recipe-Search",
    src: recipe,
  },
  {
    title: "Image Carousel",
    desc: "I built a fully responsive and visually engaging Image Slider component using React and Tailwind CSS. It features smooth fade transitions, clickable thumbnails, descriptive captions, and intuitive navigation with arrows and dots. The slider also supports swipe gestures on mobile devices, ensuring a seamless user experience across all screen sizes. This project highlights clean React hooks usage, elegant Tailwind styling, and attention to both performance and usability.",
    devStack: "React, TailwindCSS",
    link: "https://image-slider-hazel.vercel.app/",
    git: "https://github.com/Emmilex20/image-slider",
    src: imageCarousel,
  },
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
