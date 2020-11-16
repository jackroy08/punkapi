import React from 'react'
import styles from "./BeerBack.module.scss";

const BeerBack = (props) => {
    return (
        <div className={styles.cardBack}>
            <section className={styles.recipeDetails}>
                <h2>{props.beer.name}</h2>
                <h3>{props.beer.abv}%</h3>
                <p>{props.beer.description}</p>
                <div className={styles.stats}>
                    <div className={styles.stat}><h6>IBU</h6><p>{props.beer.ibu}</p></div>
                    <div className={styles.stat}><h6>EBC</h6><p>{props.beer.ebc}</p></div>
                    <div className={styles.stat}><h6>FG</h6><p>{props.beer.target_fg}</p></div>



                </div>
                <div className={styles.stats}>

                    <div className={styles.stat}><h6>OG</h6><p>{props.beer.target_og}</p></div>
                    <div className={styles.stat}><h6>SRM</h6><p>{props.beer.srm}</p></div>
                    <div className={styles.stat}><h6>PH</h6><p>{props.beer.ph}</p></div>


                </div>
            </section>
        </div>
    )
}

export default BeerBack;