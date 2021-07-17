import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./videoslistStyle.css";

const VideosList = ({ videos, onSetVideo }) => {
  console.log(videos);
  return (
    <>
      {videos &&
        videos.map((videoItem) => (
          <Link to={`/video/${videoItem.id.videoId}`}>
            <div>
              <div onClick={() => onSetVideo(videoItem)}>
                <img
                  alt="video_thumbnail"
                  src={videoItem.snippet.thumbnails.medium.url}
                />
                <p>{videoItem.snippet.title}</p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};

export default VideosList;
