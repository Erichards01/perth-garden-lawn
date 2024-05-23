"use client"

import React from 'react'
import { motion } from "framer";

import styles from "../styles/Home.module.css";



export default function HeaderAnimation() {
  return (
    <motion.div  className={styles.content} id={styles.heroHeader}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 2.5, delay: 0, ease: "easeOut"}}>
 <h1>Perth Garden and Lawn Services</h1> 
     
   </motion.div>
  )
}
