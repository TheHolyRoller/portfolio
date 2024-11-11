'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

const AnimatedTitle = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [title, setTitle] = useState("YOUR_TITLE_TEXT"); // Replace with the text you want to display
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  const handleMouseOver = () => {
    let iteration = 0;
    clearInterval(intervalRef.current!);
    setIsAnimating(true);

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
        setIsAnimating(false);
      }
    }, 30);
  };

  return (
    <h1 data-value={title} onMouseOver={handleMouseOver}>
      {title}
    </h1>
  );
};

export default AnimatedTitle;
