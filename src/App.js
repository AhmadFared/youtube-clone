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
  return (
    <div className="app">
      <Router>
        <Header
          onShowSidebar={onShowSidebar}
          showSidebar={showSidebar}
          onSubmitSearch={handleSearchSubmit}
        />
        <div className="main_page row">
          {showSidebar && (
            <SideBar
              className="sidebar_component col"
              onCloseSidebar={onShowSidebar}
            />
          )}
        </div>
        <Switch>
          <Route path="/search/:searchTerm">
	    <SearchPage searchList={searchList} />
          </Route>
          <Route path="/">
            <Main className="main_component col" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
