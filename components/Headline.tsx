'use client'; 
import React from 'react'
import h from '../Styles/Headline.module.css'; 




function Headline() {
  return (


    <div className={h.headlineContainer} >
        

        <h1  className={h.headline} >

        I&#39;ve been building a 
        <span className="text-cyan-500"> lot of things</span>

        </h1>

        <p className={h.headlineText} >

        Come explore the fruits of my labor, from small experiments to full-blown web applications, each project showcases my love for coding and design.

        </p>
        
        
        
        </div>
  )
}

export default Headline