import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Skills = () => {
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
 
    <div className="ml-60 w-2/3 mt-20">
      <motion.div
              ref={sectionRef}
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >

      {/* Inline CSS using <style> tag */}
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes scroll-left-reverse {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-200%);
            }
          }

          .scroll {
            position: relative;
            display: flex;
            width: 700px;
            overflow: hidden;
            -webkit-mask-image: linear-gradient(90deg, transparent, #fff 30%, #fff 70%, transparent);
          }

          .scroll div {
            white-space: nowrap;
            animation: scroll-left var(--t) linear infinite;
            animation-delay: calc(var(--t) / -1);
          }

          .scroll div:nth-child(2) {
            animation: scroll-left-reverse var(--t) linear infinite;
            animation-delay: calc(var(--t) / -2);
          }

          .scroll div span {
            display: inline-flex;
            margin: 10px;
            padding: 5px 10px;
            border-radius: 5px;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            background: #333;
            color: #fff;
            transition: 0.5s;
          }

          .scroll div span:hover {
            background: #FD5C01;
            cursor: pointer;
          }
        `}
      </style>

      <div className="flex items-center w-full">
        <span className="text-customgray font-bamboy text-5xl">Skills</span>
        <hr className="ml-4 flex-grow border-t-4 border-linecolor" />
      </div>

      <div className='ml-40'>
      <div className="scroll" style={{ '--t': '40s' }}>
        <div>
        <span>Python</span>
        <span>JavaScript</span>
        <span>SQL</span>
        <span>C++</span>
        <span>ReactJS</span>
        <span>Django</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Bootstrap</span>
        <span>Tailwind CSS</span>
        <span>REST APIs</span>
        </div>
        <div>
        <span>Python</span>
        <span>JavaScript</span>
        <span>SQL</span>
        <span>C++</span>
        <span>ReactJS</span>
        <span>Django</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Bootstrap</span>
        <span>Tailwind CSS</span>
        <span>REST APIs</span>
        </div>
      </div>

      <div className="scroll" style={{ '--t': '40s' }}>
        <div>
        <span>AWS</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>Postman</span>
        <span>Bitbucket</span>
        <span>Notion</span>
        <span>MySQL</span>
        <span>MSSQL</span>
        <span>Oracle</span>
        <span>Jira</span>
        </div>
        <div>
        <span>AWS</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>Postman</span>
        <span>Bitbucket</span>
        <span>Notion</span>
        <span>MySQL</span>
        <span>MSSQL</span>
        <span>Oracle</span>
        <span>Jira</span>
        </div>
      </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Skills;
