import React, { useState } from "react";
import styles from "./SearchBar.module.scss";


const SearchBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { placeholder, updateSearchText } = props;

  const input =  <input type="text" placeholder={placeholder} onInput={e => updateSearchText(e.target.value)} /> ;

  return (
    <div className={styles.search} >
      {input}
      <span  onClick={() => setIsOpen(!isOpen)}>
        
      </span>
    </div>
  );
};

export default SearchBar;
