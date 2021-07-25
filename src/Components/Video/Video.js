import React, { useState, useEffect } from "react";
import RelatedVideos from "./RelatedVideos/RelatedVideos";
import Youtube from "../../API/Youtube";

import "./videoStyle.css";
import { Avatar } from "@material-ui/core";

const Video = ({ video, onSetVideoItem, api }) => {
  let videoID = "";

  if (video.id.videoId) {
    videoID = video.id.videoId;
  } else {
    videoID = video.id;
  }

  const videoSrc = `https://www.youtube.com/embed/${videoID}`;

  const [relatedVideos, setRelatedVideos] = useState([]);

  const fetchRelatedVideos = async (videoID, api) => {
    const res = await Youtube.get("search", {
      params: {
        part: "snippet",
        relatedToVideoId: videoID,
        maxResults: 8,
        key: api,
        type: "video",
      },
    });
    setRelatedVideos(res.data.items);
  };
  useEffect(() => {
    fetchRelatedVideos(videoID, api);
  }, [videoID]);
  if (!video) return <div>Video is on the Way...</div>;

  return (
    <div className="video row">
      <div className="video-details col-8">
        <div className="video-player">
          <iframe
            frameBorder="0"
            title="Video Player"
            src={videoSrc}
            className="video-player-frame "
          />
        </div>
        <div className="video-info">
          <h1 className="video-title">{video.snippet.title}</h1>
          <hr id="video-details-hr" />
          <div className="video-channel">
            <Avatar />
            <h2 className="video-channel-title">
              {video.snippet.channelTitle}
            </h2>
          </div>
          <h3 className="video-description">{video.snippet.description}</h3>
        </div>
      </div>
      <div className="video-related-videos col">
        <RelatedVideos videos={relatedVideos} onSetVideoItem={onSetVideoItem} />
      </div>
    </div>
  );
};

export default Video;
