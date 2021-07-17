import React from "react";
import VideosList from "./RecommendedVideos/VideosList";

import "./videoStyle.css";

const Video = ({ video, videos, onSetVideo }) => {
  if (!video) return <div>Video is on the Way...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video">
      <div>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </div>
      <div>
        <h1>
          {video.snippet.title} - {video.snippet.channelTitle}
        </h1>
        <h2>{video.snippet.channelTitle}</h2>
        <h3>{video.snippet.description}</h3>
      </div>
      <div>
        <VideosList videos={videos} onSetVideo={onSetVideo} />
      </div>
    </div>
  );
};

export default Video;
