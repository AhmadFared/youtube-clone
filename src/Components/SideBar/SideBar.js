import React from "react";

import SidebarItem from "./SidebarItem/SidebarItem";
import SidebarDefaultItem from "./SideBarDefault/SidebarDefaultItem";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import "./sidebarStyle.css";

const SideBar = ({ showSidebar }) => {
  return (
    <>
      {showSidebar ? (
        <div className="sidebar">
          <div className="main-sidebar">
            <div className="home-tab sidebar-item-row">
              <SidebarItem Icon={HomeIcon} title="Home" />
            </div>
            <div className="explore-tab sidebar-item-row">
              <SidebarItem Icon={ExploreIcon} title="Explore" />
            </div>
            <div className="subscriptions-tab sidebar-item-row">
              <SidebarItem Icon={SubscriptionsIcon} title="Subscriptions" />
            </div>
          </div>
          <hr id="sidebar-hr" />
          <div className="details-sidebar">
            <SidebarItem Icon={VideoLibraryIcon} title="Library" />
            <SidebarItem Icon={HistoryIcon} title="History" />
            <SidebarItem Icon={WatchLaterIcon} title="Watch later" />
            <SidebarItem Icon={ThumbUpIcon} title="Liked videos" />
          </div>
        </div>
      ) : (
        <div className="sidebar-default">
          <div className="home-tab sidebar-item-row">
            <SidebarDefaultItem Icon={HomeIcon} title="Home" />
          </div>
          <div className="explore-tab sidebar-item-row">
            <SidebarDefaultItem Icon={ExploreIcon} title="Explore" />
          </div>
          <div className="subscriptions-tab sidebar-item-row">
            <SidebarDefaultItem
              Icon={SubscriptionsIcon}
              title="Subscriptions"
            />
            <SidebarDefaultItem Icon={VideoLibraryIcon} title="Library" />
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
