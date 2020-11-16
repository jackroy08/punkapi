import React, { useState } from 'react';
import BeerFront from "../BeerFront/BeerFront"
import BeerBack from "../BeerBack/BeerBack"
import styles from "./Beer.module.scss";



const Beer = (props) => {
  const {beer} = props;
  const [isFaceDown, setIsFaceDown] = useState(false);
  const flipStyles = isFaceDown ? styles.faceDown : "";

  return (
    <section className={`${styles.recipeCard} ${flipStyles}`} onClick={() => setIsFaceDown(!isFaceDown)}>
      {/* <p>{props.beer.name}</p>
      <p>{props.beer.tagline}</p> */}
      <div className={styles.front}>
        <BeerFront beer={beer} />
      </div>
      <div className={styles.back}>
        <BeerBack beer={beer} />
      </div>
    </section>
  );
}

export default Beer;