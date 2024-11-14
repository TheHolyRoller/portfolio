import React, { useEffect, useState } from "react";
// import styles from "./HeroComponent.module.css"; // Import CSS Module
import styles from '../../Styles/HeroComponent.module.css'; 

const HeroComponent: React.FC = () => {
  const [profText, setProfText] = useState<string>("Programmer"); // State for profession text
  const textArray = ["Artist", "Designer", "Developer", "Coder"];
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setProfText(textArray[currentIndex]);
      currentIndex = (currentIndex + 1) % textArray.length;
    }, 3000);

    // Call changeText initially
    setProfText(textArray[0]);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.hero}>
      <div className={`${styles.screen} ${styles.blcScr}`}></div>
      <div className={`${styles.screen} ${styles.witScr}`}></div>
      <div className={styles.introText}>CoderooZ</div>
      <div className={styles.heroIntro}>
        <img
          src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg"
          alt="Scenic View"
          className={styles.heroImg}
        />
        <div className={styles.heroText}>
          <p>I am a</p>
          <p className={styles.prof}>{profText}</p>
        </div>
      </div>
      {/* <div className={styles.otherContent} style={{fontSize: '1rem'}} >Other content</div> */}
    </div>
  );
};

export default HeroComponent;
