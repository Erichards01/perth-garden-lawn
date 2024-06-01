"use client"

import React, { Children, useState } from 'react'
import { motion } from "framer";
// import { useState } from 'react';
import styles from "../styles/Home.module.css";
import Link from 'next/link';




export default function HeaderAnimation({header}) {
// const [headerStyle, setHeaderStyle] = useState("white")
// // const styles = {
// //   backgroundColor: "Perth Garden and Lawn Services" ? "#51983c" : ,
// // };
// function BackgroundC() {
//   const header = "Perth Garden and Lawn Services" 
// }
// const header = homePage
// const homePage = "Perth Garden and Lawn Services"

// style={{backgroundColor: "white" : "#51983c"}}
  return (
    <motion.div  className={styles.content} id={styles.heroHeader}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 8.5, delay: 0, ease: "easeOut"}}>
      {<Link /> === "Perth Garden and Lawn Services"
      ?
  <h1 style={{backgroundColor: "black"}}>{header}</h1> 
  :
  <h1 style={{backgroundColor: "#51983c "}}>{header}</h1>  }
   </motion.div>
  )
}
