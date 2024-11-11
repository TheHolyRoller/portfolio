/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import c from '../Styles/CardGrid.module.css'; 
import Image from 'next/image';
import Port from '../assets/Portrait.jpg'; 
import smile from '../assets/Smiling.jpg'; 
import Rock from '../assets/Screenshot_20220109-223101_Snapchat.jpg'; 
import lap from '../assets/DogPic.jpg'; 
import hock from '../assets/Hockey.jpg'; 
import selfie from '../assets/GoodSelfie.jpg'; 
import work from '../assets/workspace.jpg'; 




function CardGrid() {
  return (
    <div className={c.cardGridContainer}>   

    <div className={c.cardGrid}>
        
        
        {/*  Add in the card grid items in here  */}
        <div className={c.gridItem}>

        <Image className={c.image}  src={work} alt="alt" width={50} height={50} />



        </div>
        <div className={c.gridItem}>

            <Image className={c.image} src={work} alt="alt" width={50} height={50} />



</div>
<div className={c.gridItem}>

    <Image className={c.image} src={work} alt="alt" width={50} height={50} />



</div>
<div className={c.gridItem}>

            <Image className={c.image} src={work} alt="alt" width={50} height={50} />



</div>
<div className={c.gridItem}>

        <Image className={c.image} src={work} alt="alt" width={50} height={50} />



</div>
<div className={c.gridItem}>

<Image className={c.image} src={work} alt="alt" width={50} height={50} />


</div>
        
        
       </div>        
        {/* CardGrid */}
        
        
        
        
        </div>
  )
}

export default CardGrid