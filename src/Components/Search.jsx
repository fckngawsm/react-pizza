import React from "react";

function Search({ searchValue, setSearchValue }) {
  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="search__input"
      type="text"
      placeholder="Найти пиццу..."
    />
  );
}

export default Search;
