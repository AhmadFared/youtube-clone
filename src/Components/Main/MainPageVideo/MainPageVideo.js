import React from "react";

import "./mainpagevideoStyle.css";

const MainPageVideo = () => {
  
  return (
    <div className="mainpagevideo">
      <img src={videoimage} alt="" />
      <div className="videoCard__info">
	<Avatar className="video-card-avatar" alt={channel} src={channelImage} />
	<div className="video-text">
	  <h4>{title}</h4>
	  <p>{channel}</p>
	  <p>{views}  {timestamp} </p>
	</div>
      </div>
    </div>
  )
};

export default MainPageVideo ;
