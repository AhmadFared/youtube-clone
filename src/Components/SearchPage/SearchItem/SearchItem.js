import React from "react";

import "./searchitemStyle.css";

const SearchItem = ({ videoItem }) => {
  
  return (
  <div>
    <div >
      <img alt="video_thumbnail" src={videoItem.snippet.thumbnails.medium.url}/>
      <p>{videoItem.snippet.title}</p>
    </div>
    </div>)};


export default SearchItem;
