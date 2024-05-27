import React from "react";
import styles from "../styles/Home.module.css";
import HeaderAnimation from "../components/HeaderAnimation";

const header = "Contact"



export default function contact() {
  return (
    <><title>{header}</title>
    <HeaderAnimation header={header} />
      <div>
        <div className={styles.indexContent}>
        <p>  Phone: 0450 225 113 </p>
        <p> email: perthlawn@gmail.com </p>
        <p>Check out our facebook page for update
          <a
            className="fbLink"
            href="https://www.facebook.com/Perthgardenandlawn"
          >
            {" "}
            CLICK HERE{" "}
          </a></p>
        </div>
      </div>
    </>
  );
}
