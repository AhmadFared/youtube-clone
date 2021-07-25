import React, { useState } from "react";
import SingleVideo from "./RelatedVideo/SingleVideo";
import "./relatedvideosStyle.css";

const RelatedVideos = ({ videos, onSetVideoItem }) => {
  return (
    <div>
      {videos.map((video) => (
        <SingleVideo video={video} onSetVideo={onSetVideoItem} />
      ))}
    </div>
  );
};

export default RelatedVideos;
