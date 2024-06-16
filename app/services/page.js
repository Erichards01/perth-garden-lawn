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
import SubHeaderAnimation from "../components/SubHeaderAnimation";
import Head from "next/head";
// import { split } from "postcss/lib/list";



const header = "Services"

// const subHeaders =[{id:1 ,sub:"Cylinder & Rotary Mowing"}, {id:2 ,sub:"Gardending/Landscaping"}, {id:3 ,sub:"Green Waste Removal"}, {id:4 ,sub:"Rubbish Removal"}];
const paragraphStyles ={ color: "red"}
const subHeaders =['Cylinder & Rotary Mowing', 'Gardending/Landscaping', 'Green Waste Removal', 'Rubbish Removal']
// const subList = subHeaders.split("," );
// const sub = subList.map((subList, index) => (
//   <li key={index}>{subList}</li>
// ));

export default function services() {
 
// const sub = subHeaders.map((subHead, index) => (
//   <li key={index}>{subHead}</li>));

  return (
    <>
      <title>{header}</title>
      
      <HeaderAnimation  header={header}/>
      
      <div className={styles.servicesContent}><div className={styles.row}><Image 
      src={LawnMower1}    alt="Rotary Mower"
      className={styles.servicePics}
      
      />< SubHeaderAnimation  subHeaders={subHeaders.slice(0, 1)} /><p className={styles.serviceP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      sollicitudin ligula mi, vitae interdum augue aliquet ac. Etiam pulvinar
      eget nulla eget aliquet. </p>
       <Image 
      src={LawnMower2}    alt="Cylinder Mower"
      className={styles.servicePics}
      
      /> 
     
    </div><div className={styles.row}>
    <Image 
      src={Planting}    alt="Plant pulled out of pot"
      className={styles.servicePics}
      
      />< SubHeaderAnimation subHeaders={subHeaders.slice(1, 2)} /> 
      <p className={styles.serviceP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      sollicitudin ligula mi, vitae interdum augue aliquet ac. Etiam pulvinar
      eget nulla eget aliquet. </p> <Image 
      src={Gardening}    alt="Hedge trimming hedge"
      className={styles.servicePics}
      
      /></div><div className={styles.row}> <Image 
      src={GreenWaste}    alt="Lawn clippings in bin"
      className={styles.servicePics}
      
      />< SubHeaderAnimation subHeaders={subHeaders.slice(2, 3)}/> <p className={styles.serviceP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      sollicitudin ligula mi, vitae interdum augue aliquet ac. Etiam pulvinar
      eget nulla eget aliquet. </p> <Image 
      src={GardenBag}    alt="Lawn clippings in garden bag"
      className={styles.servicePics}
      
      /></div><div className={styles.row}>
      <Image 
      src={Boxes}    alt="Cardboard boxes in truck"
      className={styles.servicePics}
      
      />< SubHeaderAnimation subHeaders={subHeaders.slice(3, 4)}/><p className={styles.serviceP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      sollicitudin ligula mi, vitae interdum augue aliquet ac. Etiam pulvinar
      eget nulla eget aliquet. </p><Image 
      src={GarbageCan}    alt="Green garbage can"
      className={styles.servicePics}
      
      />
    </div>
      </div>
    </>
  );
}
