import React from "react";
import styles from "../styles/Home.module.css";
import HeaderAnimation from "../components/HeaderAnimation";
import Image from "next/image";
import LawnMower1 from "../../public/lawnmower1.jpg";
import LawnMower2 from "../../public/Lawnmower2.jpeg";
import Planting from "../../public/Planting1.jpeg"
import Gardening from "../../public/Gardening2.jpg"
import GarbageCan from "../../public/GarbageCan.jpg"
import GardenBag from "../../public/GardenBag1.jpg"
import GreenWaste from "../../public/GreenWaste.jpg"
import Boxes from "../../public/RemovalBoxes.jpeg"

const header = "Services"

export default function services() {
  return (
    <>
      <title>{header}</title>
      
      <HeaderAnimation  header={header}/>
      
      <div className={styles.servicesContent}><div className={styles.row}><Image 
      src={LawnMower1}    alt="Rotary Mower"
      className={styles.servicePics}
      
      />
      <p className={styles.serviceParagraph}>Cylinder & Rotary Mowing </p> <Image 
      src={LawnMower2}    alt="Cylinder Mower"
      className={styles.servicePics}
      
      />
    </div><div className={styles.row}>
    <Image 
      src={Planting}    alt="Plant pulled out of pot"
      className={styles.servicePics}
      
      />
      <p className={styles.serviceParagraph}>Gardending/Landscaping </p> <Image 
      src={Gardening}    alt="Hedge trimming hedge"
      className={styles.servicePics}
      
      /></div><div className={styles.row}> <Image 
      src={GreenWaste}    alt="Lawn clippings in bin"
      className={styles.servicePics}
      
      /> <p className={styles.serviceParagraph}>Green Waste Removal</p> <Image 
      src={GardenBag}    alt="Lawn clippings in garden bag"
      className={styles.servicePics}
      
      /></div><div className={styles.row}>
      <Image 
      src={Boxes}    alt="Cardboard boxes in truck"
      className={styles.servicePics}
      
      /><p className={styles.serviceParagraph}>Rubbish Removal</p><Image 
      src={GarbageCan}    alt="Green garbage can"
      className={styles.servicePics}
      
      />
    </div>
      </div>
    </>
  );
}
