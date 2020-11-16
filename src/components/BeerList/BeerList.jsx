import React from 'react';
import Beer from "../Beer/Beer";
import styles from "./BeerList.module.scss";

const BeerList = (props) => {
    const {beers} = props;
    
    

    const getBeerJsx = (beer) => (
        
    <div className={styles.card}>
        <Beer beer={beer}/>
    </div>
    


    // {beers.map((beer) => <Beer beer={beer} />)}

    );

    return <section className={styles.cards}>{beers.map(getBeerJsx)}</section>;
      
    
}

export default BeerList;