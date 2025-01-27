import React, { useState, useEffect } from 'react';
import GuessWordGame from './game'; 


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showGame, setShowGame] = useState(false); 
  const [color, setColor] = useState('#000');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const colors = [
      'red-500', 'green-500', 'blue-500', 'yellow-500', 'purple-500', 'pink-500', 'orange-500'
    ];

    const intervalId = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor); // Change color to a random value
    }, 1000); // Change color every 500ms

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setLoaded(true); 
  }, []);

  const scrollToSection = (id, offset) => {
    const sectionTop = document.getElementById(id).offsetTop;
    window.scrollTo({
      top: sectionTop - offset,
      behavior: 'smooth',
    });
  };


  return (
    <>
      <div
        className={`h-16 w-full flex justify-evenly border-b-2 border-gray-800 fixed top-0 left-0 z-50 transition-all duration-500 transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }  ${
          scrolled
            ? 'bg-slate/10 backdrop-blur-md'
            : 'bg-slate/10 backdrop-blur-sm'
        }`}

      >
      
        <h1 className="m-5 text-xl font-Montserrat_medium font-semibold text-cumtomtextcolor items-center">Pratik</h1>
        <div className="m-5 flex justify-center mt-5 gap-14 text-xl text-cumtomtextcolor ">
        <span onClick={() => scrollToSection('home', 150)}className="cursor-pointer font-Montserrat_medium hover:text-black hover:scale-105 transition-transform duration-300"
          >
            Home
          </span>
          <span onClick={() => scrollToSection('about', 65)}className="cursor-pointer font-Montserrat_medium hover:text-black hover:scale-105 transition-transform duration-300"
          >
            About
          </span>
          <span onClick={() => scrollToSection('project', 80)}className="cursor-pointer font-Montserrat_medium hover:text-black hover:scale-105 transition-transform duration-300"
          >
            Project
          </span>
        </div>
        <h1
      className={`m-5 text-xl font-Montserrat_medium text-${color} cursor-pointer animate-pulse hover:scale-110 transition-all duration-500`}
      onClick={() => setShowGame(true)} // Open the game modal
    >
      Play Game
    </h1>
      </div>
       {/* GuessWordGame Modal */}
       {showGame && <GuessWordGame onClose={() => setShowGame(false)} />}
    </>
  );
};

export default Navbar;
