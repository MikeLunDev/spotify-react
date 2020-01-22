import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import playImg from "../assets/Play.png";

export default class SongCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-fluid">
        <h1 className="header ">{this.props.title}</h1>
        <Slider {...settings}>
          {this.props.albumList.map(item => (
            <div key={item.album.id}>
              <div className="media-obj text-center">
                <img
                  width="97%"
                  height="210px"
                  src={item.album.cover_medium}
                  alt={item.album.title}
                />
                <div className="middle">
                  <Link
                    className="nav-link text-white text-center"
                    to={"/AlbumPage/" + item.album.id + "/play"}
                  >
                    <img src={playImg} alt="play button" width="40px" />
                  </Link>
                </div>
              </div>
              <div className="pr-2 pt-1">
                <div
                  className="pt-1 text-white"
                  to={"/AlbumPage/" + item.album.id}
                >
                  {" "}
                  {item.title_short}
                </div>
                <Link
                  className="cta-album-title"
                  to={"/AlbumPage/" + item.album.id}
                >
                  {" "}
                  {item.album.title.length > 40
                    ? item.album.title.substring(0, 40).concat("...")
                    : item.album.title}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
