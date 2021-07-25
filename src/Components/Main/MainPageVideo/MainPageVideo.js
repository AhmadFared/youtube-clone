import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import "./mainpagevideoStyle.css";

const MainPageVideo = ({ video, onSetVideo, showSidebar }) => {
  return (
    <div className="main-page-item row ">
      <Link to={`/video/${video.id.videoId}`}>
        <div
          onClick={() => onSetVideo(video)}
          className={
            showSidebar ? "main-page-video-sidebar-on" : "main-page-video"
          }
        >
          <img
            alt="video_thumbnail"
            src={video.snippet.thumbnails.medium.url}
            className={
              showSidebar
                ? "main-page-video-thumbnail-sidebar-on"
                : "main-page-video-thumbnail"
            }
          />
          <div className="main-page-video-info ">
            <div className="main-page-video-channel-avatar">
              <Avatar alt={video.snippet.channelTitle} />
            </div>
            <div className="main-page-video-info-txt ">
              <p className="main-page-video-title">
                {video.snippet.localized.title}
              </p>
              <p className="main-page-video-channel-title">
                {video.snippet.channelTitle}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainPageVideo;
