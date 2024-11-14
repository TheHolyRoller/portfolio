/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { HoverEffect } from "../ui/card-hover-effect";

import algo from '../../assets/algochurn.webp'; 

// Import the images here 
import physio from '../../assets/Projects/PhysioUI.png'; 
import bot from '../../assets/Projects/PhyonBot.jpg'
import scrape from '../../assets/Projects/WebScraper.jpg'; 
import website from '../../assets/Projects/Website.png'; 
import chatBot from '../../assets/Projects/aichatbot.png'; 
import ecom from '../../assets/Projects/Ecom.png'; 




export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}



// 
export const projects = [
  { 
    image: physio.src,
    title: "Web App",
    text:
      "Full Stack Web App with contact form, translation, & booking system",
    url: "",
  },
  { 
    image: chatBot.src,
    title: "ChattyBot",
    text:
      "An AI Powered Chat Bot",
    url: "https://github.com/TheHolyRoller/gpt1",
  },
  { 
    image: website.src,
    title: "Revival",
    text:
      "A full stack website for a thriving church",
    url: "https://github.com/TheHolyRoller/website",
  },
  { 
    image: scrape.src,
    title: "Scrappy",
    text:
      "A blazingly fast Web Scraper  ",
    url: "https://github.com/TheHolyRoller/Scrape.10",
  },
  { 
    image: bot.src,
    title: "DealFinder",
    text:
      "A bot that monitors deals & prices in RT",
    url: "https://github.com/TheHolyRoller/Puppeteer1.0",
  },
  { 
    image: ecom.src,
    title: "E-commer",
    text:
      "A Full Stack Ecommerce App with all the bells and whistles",
    url: "https://github.com/TheHolyRoller/EcomWebsite",
  },
];
