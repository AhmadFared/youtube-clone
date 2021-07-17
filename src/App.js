import React, { useState } from "react";
import Youtube from "./API/Youtube";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";
import SearchPage from "./Components/SearchPage/SearchPage";
import Video from "./Components/Video/Video";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const onShowSidebar = () => setShowSidebar(!showSidebar);

  const [searchList, setSearchList] = useState([]);

  const handleSearchSubmit = async (searchTerm) => {
    const response = await Youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyAgF0Q0s7HHyE2y129w1HKP_l-RPA23Mn4",
        q: searchTerm,
      },
    });
    setSearchList(response.data.items);
  };

  const [videoItem, setVideoItem] = useState("");

  const onSetVideoItem = async (video) => {
    await setVideoItem(video);
  };
  ////////////////////////
  console.log(videoItem);
  ////////////////////////
  return (
    <div className="app">
      <Router>
        <Header
          onShowSidebar={onShowSidebar}
          showSidebar={showSidebar}
          onSubmitSearch={handleSearchSubmit}
        />
        <div className="main">
          <div className="home_page row">
            {showSidebar && (
              <SideBar
                className="sidebar_component "
                onCloseSidebar={onShowSidebar}
              />
            )}
          </div>

          <Switch>
            <Route path="/search/:searchTerm">
              <SearchPage
                searchList={searchList}
                onSetVideoItem={onSetVideoItem}
              />
            </Route>

            <Route path="/video/:title">
              <Video
                video={videoItem}
                videos={searchList}
                onSetVideo={onSetVideoItem}
              />
            </Route>
            <Route path="/">
              <div className="main_component">
                <Main />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
