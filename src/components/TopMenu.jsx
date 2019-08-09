import React, { Component } from "react";

export default class TopMenu extends Component {
  render() {
    return (
      <div className="topMenu">
        <div className="row">
          <div className="col-12 listMenu">
            <ul className="list-inline text-center ">
              <li className="list-inline-item ">
                <div className="listTopItem">
                  <a aria-current="page" className="activeLink" href="#">
                    Trending
                  </a>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <a href="#">Podcast</a>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <a href="#">Moods And Genres</a>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <a href="#">NewReleases</a>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <a href="#">Discover</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
