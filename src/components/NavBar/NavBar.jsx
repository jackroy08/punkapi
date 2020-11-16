import React from "react";
import SearchBar from "../SearchBar";
import styles from "./NavBar.module.scss";


const NavBar = (props) => {
  const { updateSearchText, } = props;
  

  return (
    <nav className={styles.navFlex}>
      <div >
        <h1>BREWDOG BEER</h1>
      </div>
    
      <div className={styles.searchPanel} >
        <SearchBar placeholder="   Search for Beers..." updateSearchText={updateSearchText} />
      </div>


    </nav>
  );
};

export default NavBar;
