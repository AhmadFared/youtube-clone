import React, { useState, useEffect } from "react";
import Youtube from "./API/Youtube";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";
import SearchPage from "./Components/SearchPage/SearchPage";
import Video from "./Components/Video/Video";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  const api = "AIzaSyB4z3O6zv-0SdJYGGQzFUQmRYmN1pfZTYA";

  // SideBar
  const [showSidebar, setShowSidebar] = useState(false);
  const onShowSidebar = () => setShowSidebar(!showSidebar);

  // Search, SearchList
  const [searchList, setSearchList] = useState([]);

  const handleSearchSubmit = async (searchTerm, api) => {
    const response = await Youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 8,
        key: api,
        q: searchTerm,
      },
    });

    setSearchList(response.data.items);
    console.log(searchList);
  };

  // PopularVideos for main page
  const [popularVideos, setPopularVideos] = useState([]);

  const fetchPopularVideos = async (api) => {
    const result = await Youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "BE",
        maxResults: 20,
        key: api,
      },
    });
    setPopularVideos(result.data.items);
  };
  useEffect(() => {
    fetchPopularVideos(api);
  }, []);

  // VideoItem
  const [videoItem, setVideoItem] = useState("");

  const onSetVideoItem = async (video) => {
    await setVideoItem(video);
  };

  return (
    <div className="app">
      <Router>
        <Header
          onShowSidebar={onShowSidebar}
          showSidebar={showSidebar}
          onSubmitSearch={handleSearchSubmit}
          api={api}
        />
        <div className="main">
          <div className="home_page row">
            <SideBar
              className="sidebar_component "
              onCloseSidebar={onShowSidebar}
              showSidebar={showSidebar}
            />
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
                onSetVideoItem={onSetVideoItem}
                api={api}
              />
            </Route>
            <Route path="/">
              <div className="main_component">
                <Main
                  videos={popularVideos}
                  onSetVideo={onSetVideoItem}
                  showSidebar={showSidebar}
                />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
