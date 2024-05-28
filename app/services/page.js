import React from "react";
import styles from "../styles/Home.module.css";
import HeaderAnimation from "../components/HeaderAnimation";
import Image from "next/image";
import LawnMower1 from "../../public/lawnmower1.jpg";
const header = "Services"

export default function services() {
  return (
    <>
      <title>{header}</title>
      <HeaderAnimation  header={header}/>
      <div className={styles.indexContent}>
      <p>Cylinder & Rotary Mowing </p> <Image 
      src={LawnMower1}    alt=""
      className={styles.content}
      style={{ height: "300px", width: "auto", marginRight: "20px" }}
      />
    
      
      <p>Gardending/Landscaping </p> 
      <p>Green Waste/Rubbish</p>
      <p>Removal Garden Bag Service</p> 
      </div>
    </>
  );
}
