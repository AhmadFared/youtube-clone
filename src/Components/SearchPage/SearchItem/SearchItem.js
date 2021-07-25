import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./searchitemStyle.css";

const SearchItem = ({ searchItem, onSetVideo }) => {
  return (
    <div className="search-item">
      <Link to={`/video/${searchItem.id.videoId}`}>
        <div
          onClick={() => onSetVideo(searchItem)}
          className="search-item-video "
        >
          <img
            alt=""
            src={searchItem.snippet.thumbnails.medium.url}
            className="search-item-video-thumbnail col"
          />
          <div className="search-item-video-info col">
            <p className="search-item-video-title ">
              {searchItem.snippet.title}
            </p>
            <div className="search-item-video-channel-info">
              <div className="search-item-video-channel-avatar">
                <Avatar alt={searchItem.snippet.channelTitle} />
              </div>
              <div className="search-item-video-channel-title">
                {searchItem.snippet.channelTitle}
              </div>
            </div>
            <p className="search-item-video-description ">
              {searchItem.snippet.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;
