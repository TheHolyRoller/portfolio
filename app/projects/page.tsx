/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react'
import p from '../../Styles/Projects.module.css'; 

import CardHoverEffectDemo from '@/components/example/card-hover-effect-demo';
import ImagesSliderDemo from '@/components/example/images-slider-demo';
// import { ImagesSlider } from '@/components/ui/images-slider';
import ImageSlider from '../../components/example/imageSlider'; 

import TextEffect from '../../components/TextEffect'; 
// import CardHoverEffectDemo from '@/components/example/card-hover-effect-demo';
import Headline from '@/components/Headline';

function page() {
  return (
    <div className={p.projectsContainer} >



        {/* Add in the Hero Container here  */}
        <div className={p.heroContainer} >

        <ImageSlider/>
        

        </div>

        <div className={p.headlineContainer} >

        <Headline/>
        </div>

        {/* Add in the Card Hover effect here */}
        <div  className={p.hoverEffectContainer}>

        <CardHoverEffectDemo/>
        
        </div>
        
        
        
        </div>
  )
}

export default page