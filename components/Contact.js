import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Contact = () => {
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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      
        // Create a new FormData object
        const submitData = new FormData(e.target);
      
        submitData.append("access_key", "97a39d66-b8e7-4333-b2c6-5eaa9e984f74");
      
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: submitData,
          });
      
          const data = await response.json();
      
          if (data.success) {
            alert("Form Submitted Successfully");
            setFormData({
              name: '',
              email: '',
              message: ''
            });
          } else {
            console.error("Error:", data);
            alert(data.message);
          }
        } catch (error) {
          console.error("Error submitting the form:", error);
          alert("There was an error submitting the form.");
        }
      };
      
      
  return (
    <>
     <motion.div
                  ref={sectionRef}
                  initial="hidden"
                  animate={controls}
                  variants={containerVariants}
                >
    <div id='contactme' className='ml-60 w-2/3 mt-20'>
        <div className='flex items-center w-full'>
        <span className='text-customgray text-5xl font-bamboy'>Contact Me </span>   
        <hr className="ml-4 mt-4 flex-grow border-t-4 border-linecolor" />
        </div>
        <p className='ml-14 mt-6 font-semibold text-xl text-cumtomtextcolor'>I would like to hear about your project and how I can help. Please fill the form, and I'll get back to you as soon as possible</p>
    </div>
    
    <div className='flex justify-center items-center mt-20 ml-10'>
        <div className=' w-2/6'>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-customtextcolor">Name</label>
          <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-2 p-2 w-full border-b-4 border-linecolor text-cumtomtextcolor focus:outline-none"
          style={{
            background: 'transparent', // Transparent background

          }}
          required
        />

        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-customtextcolor">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-2 w-full border-b-4 border-linecolor text-cumtomtextcolor focus:outline-none"
            style={{
              background: 'transparent', // Transparent background
          
            }}            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-customtextcolor">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-2 scrollbar-hide p-2 w-full border-b-4 border-linecolor text-cumtomtextcolor focus:outline-none"
            style={{
              background: 'transparent', // Transparent background
          
            }}            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-2 p-2 w-40 border-linecolor font-semibold border-r-4 border-l-4  text-customtextcolor focus:outline-none focus:border-slate-400"
          >
            Send Message
          </button>
        </div>
      </form>
        </div>
        </div>
        </motion.div>
    </>
  )
}

export default Contact