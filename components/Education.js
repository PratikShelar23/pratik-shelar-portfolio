import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Education = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  
    useEffect(() => {
      if (isSectionInView) {
        controls.start("visible");
      }
    }, [isSectionInView, controls]);
  
    // Animation Variants
    const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      },
    };

  return (
    <>
          <motion.div
                  ref={sectionRef}
                  initial="hidden"
                  animate={controls}
                  variants={containerVariants}
                >
    <div className='ml-60 w-2/3 mt-20'>
    <div className='flex items-center w-full'>
      <span className='text-customgray text-5xl font-bamboy'>Education </span>   
      <hr className="ml-4 flex-grow border-t-4 border-linecolor" />
    </div>
      <div className='mt-10 ml-14 w-[900px] text-cumtomtextcolor text-xl'>
    
        <ul className='font-medium'>

        <li className='mb-3'>
          <div className='flex justify-between'>
            <span>BE, Pune</span>
            <span>Maharashtra, India</span>
          </div>
          <div className='flex justify-between'>
              <span>TCOER – E&TC</span>
              <span> CGPA: 7.8 </span>
          </div>
          </li>
          <hr className="flex-grow border-t-2 w-full border-gray-500" />
          <li className='mb-3 mt-3'>
          <div className='flex justify-between'>
            <span>Diploma, Pune</span>
            <span>Maharashtra, India</span>
          </div>
          <div className='flex justify-between'>
              <span>AISSMS – Computer</span>
              <span> Percentage: 68% </span>
          </div>
          </li>
          <hr className="flex-grow border-t-2 w-full border-gray-500" />

          <li className='mb-3 mt-3'>
          <div className='flex justify-between'>
            <span>SSC, Pune</span>
            <span>Maharashtra, India</span>
          </div>
          <div className='flex justify-between'>
              <span>PMEM English High School</span>
              <span> Percentage: 70% </span>
          </div>
          </li>

          
        </ul>

        </div>
      </div>
      </motion.div>
  </>
  )
}

export default Education