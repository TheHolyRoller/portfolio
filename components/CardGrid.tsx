/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import c from '../Styles/CardGrid.module.css'; 
import Image from 'next/image';
import Port from '../assets/Portrait.jpg'; 
import Rock from '../assets/Screenshot_20220109-223101_Snapchat.jpg'; 
import hock from '../assets/Hockey.jpg'; 
import selfie from '../assets/GoodSelfie.jpg'; 
import work from '../assets/workspace.jpg'; 

import group from '../assets/Me/GroupPhoto.png'; 
import me from '../assets/Me/me.jpg'; 
import hay from '../assets/Me/Hay.png'; 
import drone from '../assets/Me/Drone.png';
import smile from '../assets/Me/Smiling.jpg'; 
import lap from '../assets/Me/DogPic.jpg';
import instaGroup from '../assets/Me/InstaGroupCropped.jpg';
 

import walk from '../assets/Me/InstaWalking.jpg';  



function CardGrid() {
  return (
    <div className={c.cardGridContainer}>   

    <div className={c.cardGrid}>
        
        
        {/*  Add in the card grid items in here  */}
        <div className={c.gridItem}>

        <Image className={c.image}  src={me} alt="alt" width={200} height={50} />



        </div>
        <div className={c.gridItem}>

            <Image className={c.image} src={hay} alt="alt"width={200} height={50} />



</div>
<div className={c.gridItem}>

    <Image className={c.image} src={group} alt="alt"width={200} height={50} />



</div>
<div className={c.gridItem}>

            <Image className={c.image} src={drone} alt="alt"width={200} height={50} />



</div>
<div className={c.gridItem}>

        <Image className={c.image} src={smile} alt="alt"width={200} height={50} />



</div>
<div className={c.gridItem}>

<Image className={c.image} src={instaGroup} alt="alt"width={200} height={100} />


</div>
        
        
       </div>        
        {/* CardGrid */}
        
        
        
        
        </div>
  )
}

export default CardGrid