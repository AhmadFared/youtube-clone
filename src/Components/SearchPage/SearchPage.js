import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import SearchItem from "./SearchItem/SearchItem";
import "./searchpageStyle.css";

const SearchPage = ({ searchList }) => {
  return (
    <div className="searchPage container">
      <div className="SearchPage_filter">
        <TuneIcon />
        <h3>FILTER</h3>
      </div>
      <div className="SearchIList">
        {searchList &&
          searchList.map((searchItem) => (
            <SearchItem videoItem={searchItem} />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
