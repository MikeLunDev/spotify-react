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
                  <Link aria-current="page" className="activeLink" href="/">
                    Trending
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <Link href="/">Podcast</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <Link href="/">Moods And Genres</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <Link href="/">NewReleases</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="listTopItem">
                  <Link href="/">Discover</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
