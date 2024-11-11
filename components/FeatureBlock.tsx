'use client'

import Image from 'next/image';
import React from 'react'

import m from '../Styles/FeatureBlock.module.css'; 
import yoda from '../assets/yoda.jpg'; 




function FeatureBlock() {
  return (

    <div id={m.backgroundcontainer} >
    
    {/* Add in the main component container here  */}
    
    <div id={m.componentcontainer} >
    
    <div id={m.componentsubcontainer}>
    
    {/* Add in the list to organise and arrange the component */}
    <ul id={m.componentsectionlist}>
    
    
    <li id={m.listcomponentitem}>
    
    
    {/* No styling so far  */}
    <div id={m.imagesectioncontainer}>
    
    {/* Add in the subcontainer here  */}
    <div id={m.imagesubcontainer}>

      
      {/* {props.image} */}
      
    <Image
    src={yoda}
    id={m.image}
    width={700}
    height={1200} 
    alt='alt'
    
    /> 

    
    </div>
        
    </div>
        
        

    </li>
    
    
    
    
    <li id={m.textlistitem}>
    
    {/* Add in the text section container here  */}
    <div id={m.textsectioncontainer}>
     
    <div id={m.textsectionsubcontainer}>
    
    
    
    {/* Add in the Text container here  */}
    <div id={m.textsectionblockcontainer}>
    
    {/* Add in the container for the text block here  */}
    
    {/*  */}
    <div id={m.textsectioncontainer}> 
    
    {/* Add in the container for the text here  */}
       
    {/* Add in the container for the Header here  */}
 
    <h3 id={m.textsectionheader}>

        Random Facts        
      
        
    </h3>


    <div id={m.toptextcontainer}>
    
  <ul>
    <li className={m.textItem}>

    I drink a lot of tea
    </li>
    <li className={m.textItem}>

    I&#39;m into interior design
    </li>
    <li className={m.textItem}>

    Gardening is my zen time
    </li>
    <li className={m.textItem}>

    I love to cook (and eat)
    </li>
    <li className={m.textItem}>

    I&#39;m a bit of a clean freak
    </li>
    <li className={m.textItem}>

    I want to live on Pandora
    </li>
    <li className={m.textItem}>

    I&#39;m slightly addicted to Twitter
    </li>
    <li className={m.textItem}>

    Yoda is my mentor
    </li>
  </ul>

Yoda rocks

    </div>
    
        
    </div>  
    {/* <div id='buttontextsectioncontainer' style={{marginBottom: '20vh'}}   >

<button> <h1>Hi </h1></button> 
 
 
</div>  */}
    
   
        
    </div>
    
    
    {/* Add in the button section container here  */}

   

    
    {/* Text Sub Container  */}
    </div>

    {/* Text Section Main Container */}
    </div>

        
    </li> 
        
    {/* Component Section list  */}
    </ul>
        
    {/* Add in the main Image container here  */}
 

    
    {/* Component Sub Container   */}
    </div>
    
    
    {/* Component Container  */}
    </div>

    {/* <div id={m.visibletext}>

    </div> */}
      
      {/* Background Container  */}
    </div>
  );
  
  
}

export default FeatureBlock
