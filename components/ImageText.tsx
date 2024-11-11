/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
// import { Typography } from '@mui/material';

// import BluePrints from '../assets/PrayerNight/BluePrints.jpg';
// import img from '../Styles/TextImage.module.css';
import img from '../Styles/ImageText.module.css'; 



// Define the prop types
interface ImageTextProps {
  image: StaticImageData | string;
  title: string;
  text: string;
}

const aboutText = "I'm a web developer passionate about turning complex problems into simple solutions. When I'm not coding, I enjoy mountain biking, swimming, and rock climbing."; 

const introText = "I'm a web developer based in sunny Tirana, Albania."; 




const ImageText: React.FC<ImageTextProps> = ({image}) => {




  return (
    <div id={img.backgroundcontainer}>
      {/* Main component container */}
      <div id={img.componentcontainer}>
        <div id={img.componentsubcontainer}>
          {/* List to organize component sections */}
          <ul id={img.componentsectionlist}>
            <li id={img.textlistitem}>
              {/* Text section container */}
              <div id={img.textsectioncontainer}>

                <div id={img.textsectionsubcontainer}>

                  <div id={img.textsectionblockcontainer}>

                    <div id={img.textsectioncontainer}>
                      {/* <Typography id={img.textsectiontypography}>
                      </Typography> */}
                      <h1 id={img.textsectionheader}>

                        about.

                      </h1>


                      {/* Add in the sub text section here  */}

                      <div id={img.textSubSection} >

                        
                        {/* Im a web developer based in Tirana, Albania */}
                        {introText}


                      </div>


                      <div id={img.toptextcontainer}>


                      {/* I'm a web developer passionate about turning complex problems into simple solutions. When I'm not coding, I enjoy mountain biking, swimming, and rock climbing, which fuel my creativity and problem-solving mindset. */}
                      {aboutText}



                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li id={img.listcomponentitem}>
              {/* Image section container */}
              <div id={img.imagesectioncontainer}>
                <div id={img.imagesubcontainer}>
                  <Image
                    src={image}
                    id={img.image}
                    width={700}
                    height={700}
                    alt="Image"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
