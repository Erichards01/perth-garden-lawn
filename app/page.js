// "use client"

import styles from "./styles/Home.module.css";
import Image from "next/image";
import heroImg from "../public/Lawn3.jpg";
import logoMower from "../public/LogoMower.jpg";
import logoLeaf from "../public/LogoLeaf.jpg";
import logoBin from "../public/LogoBin.jpg";
// import { motion } from "framer";
import HeaderAnimation from "./components/HeaderAnimation";


const header = "Perth Garden and Lawn Services"



export default function Home() {   

  return (
    <><title>{header}</title>
      <div className={styles.heroContainer}>
        <Image
          src={logoMower}
          placeholder="blur"
          alt=""
          className={styles.content}
          style={{ height: "100px", width: "100px", marginRight: "20px" }}
        />
        <Image
          src={logoLeaf}
          placeholder="blur"
          alt=""
          className={styles.content}
          style={{ height: "100px", width: "100px", marginRight: "20px" }}
        />
        <Image
          src={logoBin}
          placeholder="blur"
          alt=""
          className={styles.content}
          style={{ height: "100px", width: "100px", marginRight: "20px" }}
        />
        <HeaderAnimation header={header} />
        {/* <motion.div  className={styles.content} id={styles.heroHeader}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 2.5, delay: 0, ease: "easeOut"}}>
          <h1>
          Perth Garden and Lawn Services</h1>
       </motion.div> */}
        <Image
          src={heroImg}
          placeholder="blur"
          alt="lawn photograph"
          className={styles.backgroundImage}
          style={{
            position: "absolute",
            margin: "0",
            padding: "0",
            outline: "0",
          }}
        />
      </div>
      
      <div className={styles.indexContent}>
        <p>Fully Insured Business</p> 
        <p> Quality Work </p> 
        <p> Competitive Rates</p> 
      </div>
    </>
  );
}
