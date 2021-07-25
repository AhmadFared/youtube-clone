import React from "react";

import "./sidebardefaultitemStyle.css";

const SidebarDefaultItem = ({ Icon, title }) => {
  return (
    <div
      className="sidebar-default-item "
      id={title === "Home" && "sidebar-default-item-active"}
    >
      <Icon className="sidebar-default-item-icon" />
      <h3 className="sidebar-default-item-text ">{title}</h3>
    </div>
  );
};

export default SidebarDefaultItem;
