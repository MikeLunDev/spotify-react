import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SpotifySideBar from "./SpotifySideBar";
import Footer from "./Footer";
import HomePage from "./HomePage";

const newLocal = <HomePage />;
export default class MainPage extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid px-0 h-100">
          <div className="row myheight mx-0 w-100">
            <Route path="/" component={SpotifySideBar} />
            <Route path="/" exact component={HomePage} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
