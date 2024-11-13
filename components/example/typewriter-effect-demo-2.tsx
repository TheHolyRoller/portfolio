"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function TypewriterEffectDemo() {
  const words = [
    {
      text: "What ",
    },
    {
      text: "Customers",
    },
    {
      text: "are",
    },
    {
      text: "Saying",
    },
   
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] ">
    
      <TypewriterEffect words={words} />
     
    </div>
  );
}
