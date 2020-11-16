import React from 'react'
import styles from "./BeerFront.module.scss";

const BeerFront = (props) => {
    return (
        <div className={styles.cardFront}>
            <div className={styles.recipeDetails}>
            <h2>{props.beer.name}</h2>
            <img src={props.beer.image_url}/>
            <h3>{props.beer.tagline}</h3>
            </div>
        </div>
    )
}

export default BeerFront;