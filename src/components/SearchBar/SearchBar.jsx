import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search movies, actors..."
          value={query}
          onChange={handleInputChange}
          className={styles.input}
        />
        <FaSearch className={styles.icon} />
      </div>
    </div>
  );
};
