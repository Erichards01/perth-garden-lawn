"use client"

import React, { Children } from 'react'
import { motion } from "framer";

import styles from "../styles/Home.module.css";



export default function HeaderAnimation({header}) {
  return (
    <motion.div  className={styles.content} id={styles.heroHeader}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 8.5, delay: 0, ease: "easeOut"}}>
 <h1>{header}</h1>
     
   </motion.div>
  )
}
