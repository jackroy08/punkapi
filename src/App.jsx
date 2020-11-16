import React, { useState, useEffect } from 'react';

import Beer from "./components/Beer/Beer"
import BeerList from "./components/BeerList/BeerList"
import SearchBar from "./components/SearchBar/SearchBar"
import NavBar from "./components/NavBar";
import { render } from '@testing-library/react';
import styles from "./App.module.scss";

const App = () => {

  const [beers, setBeers] = useState([{ name: "im jacks first beer" }])
 

  const getBeers = (searchTerm) => {
    if (searchTerm && searchTerm.match(/^[0-9a-zA-Z]+$/)) {
      getBeersFilter(searchTerm)
     
    }
    else {
      getBeersNoFilter()
      
    }
    
  };

  const getBeersNoFilter = () => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then((response) => response.json())
      .then((beersRes) => {
        setBeers(beersRes)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const getBeersFilter = (searchTerm) => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
      .then((response) => response.json())
      .then((beersRes) => {
        // 1. Save it to state
        setBeers(beersRes)
        //  .... so that it can be passed down as PROPS perhaps to BeerList.jsx or Beer.jsx??
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getBeers()
    document.body.style = 'background: #EEEEEE;';

  }, []);

  return (
    <div className={styles.app}>
      <NavBar placeholder="Search for beers" updateSearchText={getBeers} />
      <BeerList beers={beers} />
      {/* <div>
        {beers.map((beer) => <Beer beer={beer} />)}
      </div> */}
    </div>
  )


  // .... Below you're only returning the searchbox... can you also print a list of beers?
  // return <Beer data={this.state.name} />;
}

export default App 