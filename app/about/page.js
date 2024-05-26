import React from "react";
import styles from "../styles/Home.module.css";
import HeaderAnimation from "../components/HeaderAnimation";

const header = "About"

export default function about() {
  return (
    
    <>
    <title>{header}</title>
      <HeaderAnimation header={header}/>
      <div className={styles.indexContent}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        sollicitudin ligula mi, vitae interdum augue aliquet ac. Etiam pulvinar
        eget nulla eget aliquet. Ut accumsan massa non augue congue, ut rhoncus
        velit lacinia. Sed id blandit nisi. Aenean in nulla urna. Etiam
        </p><p>accumsan, diam vitae luctus tincidunt, erat arcu tristique lacus, et
        consectetur arcu nulla sit amet tellus. Integer scelerisque tellus eget
        magna faucibus, eu dictum dui vehicula. Suspendisse vitae feugiat odio,
        vitae tempus turpis. Aenean ante metus, semper a lorem non, ultricies
        </p><p>iverra odio. Nulla sed lobortis lacus. Aliquam interdum sodales
        venenatis. Etiam condimentum diam et dictum rhoncus. Donec nec mauris
        magna. Curabitur bibendum justo arcu, ac dignissim lacus tincidunt sit
        amet. Praesent viverra euismod lectus, suscipit iaculis sapien cursus
        eu. Quisque vel enim sit amet purus semper ornare. Nunc commodo feugiat
       </p> 
      </div>
    </>
  );
}
