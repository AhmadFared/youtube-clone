import React from "react";
import MainPageVideo from "./MainPageVideo/MainPageVideo";
import "./mainStyle.css";

const Main = ({ videos, onSetVideo, showSidebar }) => {
  return videos.map((video) => (
    <MainPageVideo
      video={video}
      onSetVideo={onSetVideo}
      showSidebar={showSidebar}
    />
  ));
};

export default Main;
