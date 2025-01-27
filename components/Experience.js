import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Experience = () => {
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

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "45%", transition: { duration: 1, ease: "easeInOut" } },
  };

  const experienceItems = [
    {
      company: "Sutradhar Pvt. Ltd.",
      duration: "Dec 2024 - Present",
      role: "Jr. Software Developer",
      details: [
        "Perform end-to-end data migration, managing large datasets, optimizing data transformation processes, and minimizing system downtime during transitions.",
        "Continuously optimize backend performance, focusing on reducing response times, improving database queries, and enhancing system efficiency.",
        "Collaborate with cross-functional teams, including frontend developers, to ensure smooth integration and consistent user experiences.",
      ],
    },
    {
      company: "Sutradhar Pvt. Ltd.",
      duration: "July 2024 - Dec 2024",
      role: "Software Developer - Intern",
      details: [
        "Contributed to a live project for the Maharashtra Federation, built and maintained responsive dashboards and components.",
        "Developed a multi-user login system with separate dashboards for different user types (federation and society logins).",
        "Developed dynamic and responsive user interfaces using ReactJS, leveraging concepts such as state management, component lifecycle, React Hooks, React Router, and Context API.",
        "Integrated RESTful APIs using Axios and Fetch API for seamless data fetching.",
        "Improved user interface with Tailwind CSS, enhancing responsiveness and performance.",
      ],
    },
        // {
    //   company: "Codera Embedded Systems and Softwares Pvt. Ltd.",
    //   duration: "Aug 2023 - Mar 2024",
    //   role: "Full Stack Developer - Intern",
    //   details: [
    //     "Developed an Enterprise Resource Planning system using Python, Django.",
    //     "Integrated AWS services such as AWS EC2, AWS RDS, and S3 bucketfor seamless data processing and storage.",
    //     "Implemented user authentication and authorization using AWS IAM.",
    //     "Conducted thorough testing and debugging to ensure system reliability and performance.",
    //     "Collaborated with a team to design and implement the system architecture.",
    //   ],
    // },
    // {
    //   company: "IBM",
    //   duration: "Jan 2023 - Feb 2023 ",
    //   role: "Frontend Web Developer - Intern",
    //   details: [
    //     "Developing code using JavaScript.",
    //     "Knowledge of JavaScript frameworks to create rich interactive content.",
    //     "Develop front-end web application using HTML/CSS and JavaScript.",
    //     "Have worked with web debugging tools (Chrome Developer Console)",
    //     "Redesign and develop an existing web sites",
    //   ],
    // },
  ];

  return (
    <div className="ml-60 w-4/6 mt-10">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Title Section */}
        <div className="flex items-center w-full">
          <span className="text-customgray font-bamboy text-5xl">Experience</span>
          <hr className="ml-4 flex-grow border-t-4 border-linecolor" />
        </div>

        {/* Experience Section */}
        <div className="mt-10 relative">
          {/* Animated Vertical Line */}
          <motion.div
            className="absolute left-[1.7px] top-6 w-[2px] bg-linecolor"
            initial="hidden"
            animate={controls}
            variants={lineVariants}
          />

          {experienceItems.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="relative mb-8 pl-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Conditional Circle */}
                <div
                  className={`absolute left-[-6px] top-2 w-4 h-4 rounded-full ${
                    index === 0 ? "bg-ballcolor animate-pulse" : "bg-white border-2 border-gray-300"
                  }`}
                ></div>

                {/* Experience Content */}
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold font-poppins text-black">{item.company}</h3>
                  <span className="text-base font-semibold font-poppins text-black">
                    {item.duration}
                  </span>
                </div>
                <p className="mt-2 text-black font-poppins italic font-light">{item.role}</p>
                <ul className="mt-2 text-justify font-poppins list-disc text-black ml-12">
                  {item.details.map((detail, i) => (
                    <li key={i} className="mb-2">
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
