import React, { useState } from "react";
import { Link } from "react-router-dom";

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

const Header = ({ onShowSidebar, onSubmitSearch, api }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = () => {
    onSubmitSearch(searchTerm, api);
    setSearchTerm("");
  };

  return (
    <div className="navbar header">
      <div className="logo col-2">
        <MenuIcon className="navbar-item-icon icon" onClick={onShowSidebar} />
        <Link to="/home">
          <a className="navbar-brand">
            <img src={logo} className="logo-img" />
          </a>
        </Link>
      </div>
      <div className="searchbar col-6">
        {/* <form onSubmit={() => onSubmit()} className="searchbox"> */}
        <input
          className="search col"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Link to={`/search/${searchTerm}`}>
          <a onClick={() => onSubmit()}>
            <div className="search-icon-container">
              <SearchIcon id="search-icon" style={{ fontSize: 20 }} />
            </div>
          </a>
        </Link>
        {/* </form> */}

        <div className="icon search-mic-icon-container">
          <MicIcon id="search-mic-icon" />
        </div>
      </div>
      <div className="details col-2">
        <VideoCallIcon className="icon" />
        <AppsIcon className="icon" />
        <NotificationsIcon className="icon" />
        <Avatar
          alt="harry potter avatar"
          src={avatar}
          className="icon avatar-icon"
        />
      </div>
    </div>
  );
};

export default Header;
