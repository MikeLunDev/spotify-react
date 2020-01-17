import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SpotifySideBar from "./SpotifySideBar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AlbumPage from "./AlbumPage";
import { FaWindowClose } from "react-icons/fa";
import ShowSearch from "./ShowSearch";

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: undefined
    };
  }

  handleChange = input => {
    this.setState({
      searchText: input.currentTarget.value
    });
  };

  render() {
    return (
      <Router>
        <div className="container-fluid px-0 h-100">
          <div className="row myheight mx-0 w-100">
            <Route path="/" component={SpotifySideBar} />
            <Route
              path="/"
              exact
              render={() => (
                <HomePage query={["Country", "Jay-Z", "mannarino", "Dr Dre"]} />
              )}
            />
            <Route
              path="/search"
              exact
              render={() => (
                <div id="search" className="open">
                  <Link to="/">
                    <FaWindowClose className="close" />
                  </Link>
                  <input
                    type="search"
                    autoFocus
                    onChange={this.handleChange}
                    value={this.state.searchText}
                    placeholder="Write an artist/band"
                  />
                  <button type="submit" className="btn btn-lg btn-primary ">
                    <Link
                      className="text-white"
                      to={"/search/" + (this.state.searchText || "")}
                    >
                      Search
                    </Link>
                  </button>
                </div>
              )}
            />
            <Route path="/search/:SearchText" component={ShowSearch} />
            <Route path="/AlbumPage/:AlbumId" component={AlbumPage} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
