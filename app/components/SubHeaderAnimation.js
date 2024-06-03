"use client"


import { motion, AnimatePresence } from "framer";
// import { useState } from 'react';
import styles from "../styles/Home.module.css";
// const subHeaders =[{id:1 ,sub:"Cylinder & Rotary Mowing"}, {id:2 ,sub:"Gardending/Landscaping"}, {id:3 ,sub:"Green Waste Removal"}, {id:4 ,sub:"Rubbish Removal"}];
// const subHeaders =["Cylinder & Rotary Mowing", "Gardending/Landscaping", "Green Waste Removal", "Rubbish Removal"]
// ;

//  const subHeadings = subHeaders.map((subHead, index) => 
//   <p  key={index }>{subHead} </p>)

export default function  SubHeaderAnimation ({subHeaders}) {

 
  return (
   
    <>
   
        <motion.p  className={styles.serviceSubHeaders}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 3, delay: 0, ease: "easeOut"}} >
           {subHeaders} 
             </ motion.p ></>)}
    
    
 
{/* <> <AnimatePresence>
{subHeaders.map((subHead,index) => (
 
    <motion.p  className={styles.serviceSubHeaders}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 3, delay: 0, ease: "easeOut"}} key={index} >
       {subHead.sub} 
         </ motion.p >))}</AnimatePresence></>)}



    
; */}
// export default function  SubHeaderAnimation ({subHeaders}) {



 
   
//     return (
   
//   <>
 
//       <motion.p  className={styles.serviceSubHeaders}
//       initial={{opacity: 0}}
//       whileInView={{opacity: 1}}
//       transition={{duration: 3, delay: 0, ease: "easeOut"}} >
//          {subHeaders} 
//            </ motion.p ></>)}
  
  
  
      
      


