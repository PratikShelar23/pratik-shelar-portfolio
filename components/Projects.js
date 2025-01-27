import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const containerRef = useRef(null); // Ref to the container for horizontal scroll

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "45%", transition: { duration: 1, ease: "easeInOut" } },
  };


  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const isEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
      setIsAtEnd(isEnd);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleArrowClick = () => {
    const container = scrollContainerRef.current;
    if (container) {
      if (!isAtEnd) {
        container.scrollLeft += container.clientWidth / 2;// Move right if not at the end
      } else {
        container.scrollLeft -= container.clientWidth / 2 // Move left if at the end
      }
    }
  };

  return (
    <>
      <motion.div
        id="project"
        className="ml-60 mt-20 w-2/3 relative"
        initial="hidden"
        animate={controls} // Pass controls to animate here
        variants={containerVariants}
        ref={ref} // Ensure ref is attached to the parent container
      >
        <div className="flex items-center w-full">
          <motion.span  
            className="text-customgray text-5xl font-bamboy"
            variants={titleVariants}
            animate={controls}
          >
            Projects
          </motion.span>
          <motion.hr
            className="ml-4 mt-1 flex-grow border-t-4 border-linecolor"
            variants={lineVariants}
          />
        </div>

        <motion.div
          className="flex w-4/5 overflow-x-auto scrollbar-hide px-6 ml-20 mt-10"
          variants={containerVariants}
          style={{ scrollBehavior: "smooth" }}
          ref={scrollContainerRef} // Attach the ref here
        >
          {/* Card 1 */}
          <motion.a
            href="https://craas.sutradhar.tech/test/karwai/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-10"
            variants={itemVariants}
          >
            <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700">
              <div
                className="w-56 h-72 text-gray-800"
                style={{
                  backgroundImage: "url('images/karwai101.jpg')",
                  backgroundSize: "180% 100%",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute bg-gray-50 -bottom-28 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl">
                  KARWAI 101
                </span>
                <p className="text-neutral-800">
                  Karwai 101 manages Section 101 of the Indian Evidence Act,
                  addressing the burden of proof.
                </p>
              </div>
            </div>
          </motion.a>

          {/* Card 2 */}
          <motion.a
            href="https://github.com/PratikShelar23/BE-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-10"
            variants={itemVariants}
          >
            <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700">
              <div
                className="w-56 h-72 bg-lime-400 text-gray-800"
                style={{
                  backgroundImage: "url('images/just_mark.jpg')",
                  backgroundSize: "140% 120%",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute bg-gray-50 -bottom-40 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl">
                  ATTENDANCE MARKING SYSTEM
                </span>
                <p className="text-neutral-800">
                  Engineered innovative attendance system featuring geofencing
                  technology for students to log attendance within designated
                  zones.
                </p>
              </div>
            </div>
          </motion.a>

           {/* Card 3 */}
           <motion.a
            href="https://pratikshelar23.github.io/Personal-Job-Scheduler/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-10"
            variants={itemVariants}
          >
            <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700">
              <div
                className="w-56 h-72 bg-lime-400 text-gray-800"
                style={{
                  backgroundImage: "url('images/jobscheduler.jpg')",
                  backgroundSize: "120% 100%",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute bg-gray-50 -bottom-56 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl">
                PERSONAL JOB SCHEDULER
                </span>
                <p className="text-neutral-800">
                A streamlined application for managing interview processes. schedule interview rounds, and set automated reminders for upcoming sessions. Simplifies tracking and ensures no opportunity is missed.
                </p>
              </div>
            </div>
          </motion.a>

           {/* Card 4 */}
          <motion.a
            href="https://pratikshelar23.github.io/Netflix-clone-frontend-project/" 
            target="_blank"
            rel="noopener noreferrer"
            className="ml-10"
            variants={itemVariants}
          >
            <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700">
              <div
                className="w-56 h-72 bg-lime-400 text-gray-800"
                style={{
                  backgroundImage: "url('images/clone.jpg')",
                  backgroundSize: "190% 100%",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute bg-gray-50 -bottom-40 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl">
                NETFLIX CLONE
                </span>
                <p className="text-neutral-800">
                Netflix clone using HTML, CSS, and JavaScript. Create a visually stunning and responsive website that emulates the Netflix user experience.
                </p>
              </div>
            </div>
          </motion.a>
          </motion.div>

                 {/* Fading effect on the right side */}
                 <div className="absolute right-0 top-12 w-12 h-full "></div>

   {/* Scroll indicator: Chevron Arrow */}
        <div
          className={`absolute ${isAtEnd ? "left-0" : "right-0"} top-1/2 transform -translate-y-1/2 mr-4 cursor-pointer text-gray-600 hover:text-gray-900`}
          style={{ transition: "left 0.3s, right 0.3s" }}
          onClick={handleArrowClick}
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isAtEnd ? "M14 6l-6 6 6 6" : "M10 6l6 6-6 6"}
              />
            </svg>
          </div>

        </motion.div>
      
    </>
  );
};

export default Projects;
