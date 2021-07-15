import React from "react";

import SidebarItem from "./SidebarItem/SidebarItem";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import logo from "./youtube-logo.svg";

import "./sidebarStyle.css";

const SideBar = () => {
	return (
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
			<div className="details-sidebar">
			  <SidebarItem Icon={VideoLibraryIcon} title="Library" />
			  <SidebarItem Icon={HistoryIcon} title="History" />
			  <SidebarItem Icon={WatchLaterIcon} title="Watch later" />
			  <SidebarItem Icon={ThumbUpIcon} title="Liked videos" />
			</div>
		</div>
	);
};

export default SideBar;
