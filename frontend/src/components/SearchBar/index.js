import React from "react";
import SearchIcon from "./search.svg";

export const index = () => {
  return (
    <div className="search">
      <input type="text" className="search__posts" />
      <img src={SearchIcon} alt="search-icon" className="search__icon" />
    </div>
  );
};

export default index;
