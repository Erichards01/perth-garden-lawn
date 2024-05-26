import React from "react";
import styles from "../styles/Home.module.css";
import HeaderAnimation from "../components/HeaderAnimation";

const header = "Services"

export default function services() {
  return (
    <>
      <title>{header}</title>
      <HeaderAnimation  header={header}/>
      <div className={styles.indexContent}>
      <p>Cylinder & Rotary Mowing </p> 
      <p>Gardending/Landscaping </p> 
      <p>Green Waste/Rubbish</p>
      <p>Removal Garden Bag Service</p> 
      </div>
    </>
  );
}
