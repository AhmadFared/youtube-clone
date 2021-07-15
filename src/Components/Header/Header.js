import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Avatar from "@material-ui/core/Avatar";

import logo from "./youtube-logo.svg";
import avatar from "./harry-avatar.jpg";
import "./headerStyle.css";

const Header = ({ showSidebar, onShowSidebar, onSubmitSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div className="navbar header">
        <div className="logo ">
          <MenuIcon className="navbar-item-icon" onClick={onShowSidebar} />
          <Link to="/home">
            <a className="navbar-brand">
              <img src={logo} className="logo-img" />
            </a>
          </Link>
        </div>
        <div className="searchbar">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search"
            placeholder="Search"
            type="text"
          />
          <Link to={`/search/${searchTerm}`}>
            <SearchIcon
              className="icon"
              onClick={() => onSubmitSearch(searchTerm)}
            />
          </Link>
          <MicIcon className="icon" />
        </div>
        <div className="details">
          <VideoCallIcon className="icon" />
          <AppsIcon className="icon" />
          <NotificationsIcon className="icon" />
          <Avatar alt="harry potter avatar" src={avatar} className="icon" />
        </div>
      </div>
    </Router>
  );
};

export default Header;
