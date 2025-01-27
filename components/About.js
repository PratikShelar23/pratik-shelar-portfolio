import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        id="about"
        className="ml-60 w-4/6"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="flex items-center w-full">
          <span className="text-customgray font-bamboy text-5xl">About</span>
          <hr className="ml-4 flex-grow border-t-4 border-linecolor" />
        </div>
        <p className="ml-10 mt-6 font-semibold text-lg text-cumtomtextcolor text-justify leading-loose">
          I am a 2024 graduate with a strong passion for web development, API creation, and design.
          I am deeply committed to learning and growing in my field, driven by a relentless desire
          to expand my skill set and explore new technologies. My dedication and perseverance
          enable me to tackle challenges head-on, ensuring I never give up until I find a solution.
          With a creative mindset and a love for innovation, I aim to build impactful and
          user-friendly digital experiences.
        </p>
      </motion.div>
    </>
  );
};

export default About;
