/* eslint-disable @typescript-eslint/no-unused-vars */
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
    <Footer />
    </>
  );
}
