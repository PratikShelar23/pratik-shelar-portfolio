'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Descn from "@/components/Descn";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
      <>
      <Navbar />
      <Descn />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact /> 
      <Footer />
      </>
  );
}
