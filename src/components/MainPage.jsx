import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SpotifySideBar from "./SpotifySideBar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AlbumPage from "./AlbumPage"


export default class MainPage extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid px-0 h-100">
          <div className="row myheight mx-0 w-100">
            <Route path="/" component={SpotifySideBar} />
            <Route
              path="/"
              exact
              render={() => <HomePage query={["Rancore", "Jay-Z", "mannarino", "Dr Dre", "bob marley"]} />}
            />
            <Route path="/AlbumPage:AlbumId" exact component={AlbumPage} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
