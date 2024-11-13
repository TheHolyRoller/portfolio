import { HoverEffect } from "../ui/card-hover-effect";

import algo from '../../assets/algochurn.webp'; 

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
    image: algo.src,
    title: "Stripe",
    text:
      "A technology company that builds economic infrastructure for the internet.",
    url: "https://stripe.com",
  },
  { 
    image: algo.src,
    title: "Netflix",
    text:
      "A web design and development agency that gets the job done. Somehow.",
    url: "https://netflix.com",
  },
  { 
    image: algo.src,
    title: "Google",
    text:
      "A web design and development agency that gets the job done. Somehow.",
    url: "https://google.com",
  },
  { 
    image: algo.src,
    title: "Meta",
    text:
      "A web design and development agency that gets the job done. Somehow.",
    url: "https://meta.com",
  },
  { 
    image: algo.src,
    title: "Amazon",
    text:
      "A web design and development agency that gets the job done. Somehow.",
    url: "https://amazon.com",
  },
  { 
    image: algo.src,
    title: "Microsoft",
    text:
      "A web design and development agency that gets the job done. Somehow.",
    url: "https://microsoft.com",
  },
];
