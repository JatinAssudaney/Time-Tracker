import React from "react";
import SearchIcon from "./search.svg";
import "./styles/SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="search">
      <input type="text" className="search__posts" />
      <img src={SearchIcon} alt="search-icon" className="search__icon" />
    </div>
  );
};

export default SearchBar;
