import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import SearchItem from "./SearchItem/SearchItem";
import "./searchpageStyle.css";

const SearchPage = ({ searchList, onSetVideoItem }) => {
  return (
    <div className="search-page container">
      <div className="search-page-filter">
        <TuneIcon className="search-page-filter-icon" />
        <p className="search-page-filter-text">FILTERS</p>
      </div>
      <hr id="search-page-filter-hr" />

      <div className="search-list">
        {searchList.map((searchItem) => (
          <SearchItem searchItem={searchItem} onSetVideo={onSetVideoItem} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
