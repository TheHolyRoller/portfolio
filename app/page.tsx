/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
// import Nav from '../components/ui/navbar-menu'; 
import * as Nav from '../components/ui/navbar-menu'; 
import {MenuItem} from '../components/ui/navbar-menu'; 

import NavbarDemo from '../components/nav-demo'; 

import ImagesSliderDemo from "@/components/example/images-slider-demo";

import SidebarDemo from "@/components/example/sidebar-demo";

import TextGenerateEffectDemo from "@/components/example/text-generate-effect-demo-2";

import FocusCardsDemo from "@/components/example/focus-cards-demo";

import ShootingStarsAndStarsBackgroundDemo from "@/components/example/shooting-stars-and-stars-background-demo";

import FloatingDockDemo from "@/components/example/floating-dock-demo";


import FloatingNavDemo from "@/components/example/floating-navbar-demo";

import NextNav from "@/components/NextNav";


import CardImage from '../components/CardImage'; 


export default function Home() {

// grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]

  return (
    <div className="relative">


    {/* <NavbarDemo/>  */}

    <CardImage/>
    


    {/* Add in the Image Card here  */}



    {/* <FloatingNavDemo/>  */}

    <div style={{width: '100vw', outline: '0px solid lime', margin: 'auto', display: 'grid', placeContent: 'center'}} >

    {/* <ImagesSliderDemo/>  */}
    </div>

    <div className="" style={{outline: '0px solid lime', margin:'3rem auto', width: '80vw', display: 'grid', placeContent: 'center'}} >
      
    {/* <TextGenerateEffectDemo/>  */}
    </div>

    <div style={{margin: '2rem auto', paddingBottom: '3rem'}} >

    {/* <FocusCardsDemo/>  */}
    </div>
    {/* <ShootingStarsAndStarsBackgroundDemo/>  */}

    <div style={{}} >



    </div>

     
    </div>
  );
}
