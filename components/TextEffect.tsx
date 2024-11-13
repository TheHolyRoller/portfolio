import React, { useState, useEffect, useRef } from "react";

// Random letter and word functions
function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter(): string {
  const alphabet: string[] = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  return alphabet[rand(0, alphabet.length - 1)];
}

function getRandomWord(word: string): string {
  let finalWord = "";
  for (let i = 0; i < word.length; i++) {
    finalWord += word[i] === " " ? " " : getRandomLetter();
  }
  return finalWord;
}

const RandomWordEffect: React.FC = () => {
  // State variables
  const [word] = useState<string>("All your base are belong to us");
  const [finalWord, setFinalWord] = useState<string>(word);
  const [count, setCount] = useState<number>(0);
  const [globalCount, setGlobalCount] = useState<number>(0);
  const [isGoing, setIsGoing] = useState<boolean>(false);
  const [canChange, setCanChange] = useState<boolean>(false);

  const initialWordRef = useRef<string>(word); // Use ref to store the word
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref for interval

  // Effect to sync the word when changed
  useEffect(() => {
    initialWordRef.current = word;
  }, [word]);

  const init = () => {
    if (isGoing) return; // Prevent multiple initializations

    setIsGoing(true);
    setCount(0); // Reset count when starting the effect
    setFinalWord(getRandomWord(word)); // Initialize with random letters

    // Set interval to change letters
    intervalRef.current = setInterval(() => {
      let tempFinalWord = "";

      // Construct word with random letters or real letters
      for (let x = 0; x < initialWordRef.current.length; x++) {
        if (x <= count && canChange) {
          tempFinalWord += initialWordRef.current[x]; // Keep the original character
        } else {
          tempFinalWord += getRandomLetter(); // Keep replacing with random characters
        }
      }

      setFinalWord(tempFinalWord); // Update the final word with random letters

      // Update count and decide when to reveal actual word
      if (canChange) {
        setCount((prevCount) => prevCount + 1);
      }

      if (globalCount >= 20) {
        setCanChange(true);
      }

      if (count >= initialWordRef.current.length) {
        // Stop the interval once the word is fully revealed
        clearInterval(intervalRef.current!);
        setFinalWord(initialWordRef.current); // Display the actual word
        setCount(0);
        setGlobalCount(0);
        setCanChange(false);
        setIsGoing(false); // Reset the effect state
      }

      setGlobalCount((prevGlobalCount) => prevGlobalCount + 1);
    }, 50); // Adjust the speed of changes

    // Add timeout to stop the effect after a few seconds
    setTimeout(() => {
      clearInterval(intervalRef.current!); // Clear the interval after timeout
      setFinalWord(initialWordRef.current); // Display the actual word after timeout
      setCount(0);
      setGlobalCount(0);
      setCanChange(false);
      setIsGoing(false); // Reset the effect state
    }, 5000); // Set timeout to 5 seconds (5000 ms)
  };

  // Handle mouse enter event to start the effect
  const handleMouseEnter = () => {
    init();
  };

  // Handle mouse leave event to stop the effect
  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval
    }
    setFinalWord(initialWordRef.current); // Immediately show the correct word
    setIsGoing(false); // Reset the effect state
  };

  return (
    <div>
      <p
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ fontFamily: "Rubik, sans-serif", fontSize: "24px", fontWeight: "bold" }}
      >
        {finalWord}
      </p>
    </div>
  );
};

export default RandomWordEffect;
