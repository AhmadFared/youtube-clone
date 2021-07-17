import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import SearchItem from "./SearchItem/SearchItem";
import "./searchpageStyle.css";

const SearchPage = ({ searchList, onSetVideoItem }) => {
  console.log(searchList);
  return (
    <div className="searchPage container">
      <div className="SearchPage_filter">
        <TuneIcon />
        <h3>FILTER</h3>
      </div>
      <div className="searchList">
        {searchList.map((searchItem) => (
          <SearchItem searchItem={searchItem} onSetVideo={onSetVideoItem} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
