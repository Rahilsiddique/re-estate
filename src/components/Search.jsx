import React from "react";
import FilterSearch from "./searchComponents/SearchFilter.jsx";
import SearchBar from "./searchComponents/SearchBar.jsx";

const Search = () => {
  return (
    <div>
      <SearchBar />
      <FilterSearch />
    </div>
  );
};

export default Search;
