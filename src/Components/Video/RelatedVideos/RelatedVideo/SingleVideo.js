import React from "react";
import { Link } from "react-router-dom";

import "./singlevideoStyle.css";

const SingleVideo = ({ video, onSetVideo }) => {
  return (
    <>
      {video.snippet && (
        <div className="related-video-container">
          <Link to={`/video/${video.id.videoId}`}>
            <div onClick={() => onSetVideo(video)} className="related-video">
              <img
                className="related-video-thumbnail"
                alt="video_thumbnail"
                src={video.snippet ? video.snippet.thumbnails.medium.url : ""}
              />
              <div className="related-video-details">
                <p className="related-video-title">
                  {video.snippet ? video.snippet.title : ""}
                </p>
                <p className="related-video-channel-title">
                  {video.snippet ? video.snippet.channelTitle : ""}
                </p>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default SingleVideo;
