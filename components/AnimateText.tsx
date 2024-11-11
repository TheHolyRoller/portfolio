'use client';
import React, { useEffect, useRef, useState } from "react";

const AnimatedTitle = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [title, setTitle] = useState("YOUR_TITLE_TEXT"); // Replace with the text you want to display
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleAnimation = () => {
    let iteration = 0;
    clearInterval(intervalRef.current!);

    intervalRef.current = setInterval(() => {
      setTitle((prevTitle) =>
        prevTitle
          .split("")
          .map((letter, index) =>
            index < iteration ? title[index] : letters[Math.floor(Math.random() * 26)]
          )
          .join("")
      );

      iteration += 1 / 3;
      if (iteration >= title.length) {
        clearInterval(intervalRef.current!);
      }
    }, 30);
  };

  useEffect(() => {
    // Trigger the animation on page load
    handleAnimation();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <h1 data-value={title} onMouseOver={handleAnimation}>
      {title}
    </h1>
  );
};

export default AnimatedTitle;
