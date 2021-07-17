import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./searchitemStyle.css";

const SearchItem = ({ searchItem, onSetVideo }) => {
  return (
    <div>
      <Link to={`/video/${searchItem.id.videoId}`}>
        <div onClick={() => onSetVideo(searchItem)}>
          <img
            alt="video_thumbnail"
            src={searchItem.snippet.thumbnails.medium.url}
          />
          <p>{searchItem.snippet.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;
