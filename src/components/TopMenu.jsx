import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopMenu extends Component {
  render() {
    return (
      <div className="topMenu">
        <div className="row">
          <div className="col-12 listMenu">
            <ul className="list-inline text-center ">
              <li className="list-inline-item ">
                <div className="listTopItem">
                  <Link aria-current="page" className="activeLink" to="/">
                    Trending
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <Link to="/">Podcast</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <Link to="/">Moods And Genres</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <Link to="/">NewReleases</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <Link to="/">Discover</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
