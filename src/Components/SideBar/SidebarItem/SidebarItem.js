import React from "react";

import "./sidebarItemStyle.css";

const SidebarItem = ({ Icon, title }) => {
  return (
    <div
      className="sidebar-item row"
      id={title === "Home" && "sidebar-item-active"}
    >
      <Icon style={{ fontSize: 24 }} className="sidebar-item-icon col" />
      <h3 className="sidebar-item-text col-8">{title}</h3>
    </div>
  );
};

export default SidebarItem;
