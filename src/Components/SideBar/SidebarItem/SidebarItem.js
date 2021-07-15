import React from "react";

import "./sidebarItemStyle.css";

const SidebarItem = ({ Icon, title }) =>{
  
  return(
    <div className="sidebar-item">
      <Icon />
      <h3>{title} </h3>
    </div>
  )
};

export default SidebarItem;
