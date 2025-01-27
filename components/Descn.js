import Image from 'next/image';
import { useEffect, useState } from 'react';

const Descn = () => {

  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const [animateContact, setAnimateContact] = useState(false);


  useEffect(() => {
    
    setTimeout(() => setAnimateText(true), 100); 
    setTimeout(() => setAnimateImage(true), 100);
    setTimeout(() => setAnimateContact(true), 2000); 

  }, []);
  
  const scrollToContactMe = () => {
    const aboutSectionTop = document.getElementById('contactme').offsetTop;
    window.scrollTo({
      top: aboutSectionTop - 60, 
      behavior: 'smooth', 
    });
  };
  return (
    <div id='home' className="flex h-[430px] w-full">
       <style>
        {`
          /* Default hidden state */
          .hidden-element {
            opacity: 0;
            visibility: hidden;
          }

                /* Luminance animation */
          .luminance-effect {
            background: 50% 100% / 50% 50% no-repeat radial-gradient(ellipse at bottom, #fff, transparent, transparent);
            -webkit-background-clip: text;
            background-clip: text;            
            animation: reveal 3s ease-in-out forwards 0.2s, glow 2.5s linear infinite 2s;
          }

          /* Falling text animation */

                    @keyframes reveal {
            80% {
              letter-spacing: 8px;
            }
            100% {
              background-size: 300% 300%;
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }


          @keyframes glow {
            40% {
              text-shadow: 0 0 8px #fff;
            }
          } 

          @keyframes falling {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .falling-text {
            animation: falling 1s ease-out forwards;
            opacity: 1;
            visibility: visible;
          }

          /* Sliding image animation */
          @keyframes slideIn {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .slide-in {
            animation: slideIn 0.7s ease-out forwards;
            opacity: 1;
            visibility: visible;
          }
            .animate-fadeIn {
              animation: fadeIn 1s ease-out forwards;
            }

        /* CSS for changing cursor on hover */
        .contact-me-span:hover {
          cursor: url('/images/quill-pen-ai-line.png'), auto; 
        }
        `}
      </style>

      <div className="h-72 w-1/2 justify-center align-middle text-center ml-24 mt-20">
        <div className="flex">
          <h5
            className={`text-2xl text-customtextcolor flex ml-[150px] mb-5 font-poppins mt-6 ${
              animateText ? 'falling-text' : 'hidden-element'
            }`}
          >
            Hello, I'm Pratik
          </h5>
        </div>

          <h2 className={`font-bold text-7xl ml-[48px] mb-2 mt-2 text-customgray font-bamboy luminance-effect ${
            animateText ? 'luminance-effect' : 'hidden-element'
          }`}>Full stack </h2>
          <h2 className={`font-bold text-7xl ml-20 text-customgray font-bamboy luminance-effect ${
            animateText ? 'luminance-effect' : 'hidden-element'
          }`}>Developer</h2> <br />
    
          <span onClick={scrollToContactMe} className={`contact-me-span text-xl mr-[340px] mt-10 text-white font-semibold border-b-4 border-linecolor pb-2 cursor-pointer ${animateContact ? 'animate-fadeIn' : 'hidden-element'}`}>Contact me </span>

      </div>
      {/* <div className="h-[500px] w-1/2 bg-slate-400"
        style={{
          clipPath: 'polygon(0% 0%, 70% 15%, 70% 70%, 0 100%)',
          //top-left(x) top-left(y), top-right(y) 
          
        }}
>    */}
<Image
  className={`w-fit h-fit transition-all duration-700 ${
    animateImage ? 'slide-in' : 'hidden-element'
  }`}
  src="/images/newpp.png"
  alt="profile pic"
  width={310}
  height={384}
  style={{
    background: 'transparent',
  }}
/>


        
      </div>
    // </div>
  );
};

export default Descn;
