import React from "react";
import styles from "../styles/Home.module.css";

export default function contact() {
  return (
    <>
      <div>
        <p className={styles.indexContent}>
          Phone: 0450 225 113 <br />
          email: perthlawn@gmail.com <br />
          Check out our facebook page for update
          <a
            className="fbLink"
            href="https://www.facebook.com/Perthgardenandlawn"
          >
            {" "}
            CLICK HERE{" "}
          </a>
        </p>
      </div>
    </>
  );
}
