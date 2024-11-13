/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react'; 
import ct from '../../Styles/Contact.module.css'; 

import TextEffect from '../../components/TextEffect'; 
import HeroComponent from '@/components/Heros/HeroComponent';
import SignupFormDemo from '@/components/example/signup-form-demo';


function page() {
  return (



    <div className={ct.contactPage} >

      {/* Add in the hero component here  */}

      <div className={ct.heroContainer} >

      <HeroComponent/> 
      
      </div>

      {/* Add in the text Effect container here  */}
      {/* <div className={ct.textEffectContainer}  >  

    <TextEffect/> 


      </div> */}



      {/* Add in the Contact form Container here  */}
        
      <div className={ct.contactFormContainer}>



    <SignupFormDemo/> 


      </div>

        
        </div>
  )
}

export default page