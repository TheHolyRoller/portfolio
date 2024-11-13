import React, { useEffect, useRef } from "react";

// Make sure to import baffle
import baffle from "baffle";



const TextRevealEffect: React.FC = () => {
  const dataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize baffle on the div with the class 'data'
    const text = baffle(dataRef.current!);
    
    // Configure the baffle effect
    text.set({
      characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
      speed: 120,
    });

    // Start the effect and reveal the text after 4 seconds
    text.start();
    text.reveal(4000);

    // Cleanup the effect on component unmount
    return () => {
      text.stop(); // Stop the baffle effect if the component is removed
    };
  }, []);

  return (
    <div className="container">
      {/* The div with class 'data' will have the baffle effect applied */}
      <div className="data" ref={dataRef}>
        IAMHARSH-WEB DEVELOPER
      </div>
    </div>
  );
};

export default TextRevealEffect;
