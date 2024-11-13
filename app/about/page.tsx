/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'; 
import ab from '../../Styles/About.module.css'; 
import BackgroundBoxesDemo from '@/components/example/background-boxes-demo';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import ImageText from '@/components/ImageText';
import Languages from '@/components/Languages';
import TypewriterEffectDemo from '@/components/example/typewriter-effect-demo-2';

// import { Cover } from '@/components/ui/cover';
import CoverDemo from '@/components/example/cover-demo';
import FeatureBlock from '@/components/FeatureBlock';
// import ImageGrid from '../../components/'


// import the static assets here 
import image from '../../assets/Lake.jpg'; 


function page() {

    const testimonials = [
        {
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Sarah Chen",
          designation: "Product Manager at TechFlow",
          src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Michael Rodriguez",
          designation: "CTO at InnovateSphere",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
          name: "Emily Watson",
          designation: "Operations Director at CloudScale",
          src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
          name: "James Kim",
          designation: "Engineering Lead at DataPro",
          src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
          name: "Lisa Thompson",
          designation: "VP of Technology at FutureNet",
          src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];





  return (
    <div className={ab.aboutContainer}  >

    {/* Add in the hero container here  */}
    <div className={ab.HeroContainer}>

    <BackgroundBoxesDemo/> 


    </div>


    {/* Add in the headline container here  */}
    <div className={ab.headlineContainer}  >

        {/* Add in the text effect here  */}


    </div>
    
    {/* Add in the feature block container here  */}

    <div className={ab.featureBlockContainer}>

    <ImageText image={image} title='about.' text='' /> 



    </div>


    {/* Add in the image grid container here  */}

    <div className={ab.imageGridContainer} >




    </div>


    {/* Add in the feature block container here  */}
    <div className={ab.featureBlockContainer} >




    </div>

    <div className={ab.customerHeadline} >

      
      <TypewriterEffectDemo/> 




    </div>


    {/* Add in the customer testimonials container here  */}

    <div className={ab.testimonialContainer}>

    

    <AnimatedTestimonials testimonials={testimonials} /> 

    </div>



    <div className={ab.skillsText} > 

    {/* <Cover/>  */}
    <CoverDemo/>

    </div>


    <div className={ab.languages}>

    <Languages/> 




    </div>


    </div>

  )
}

export default page
