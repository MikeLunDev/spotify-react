import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
        <h1 className="header ">{this.props.queryParams[this.props.index]}</h1>
        <Slider {...settings}>
          {this.props.albumList.map(item => (
            <div key={item.album.id}>
           {/*      <Link
                to={"/AlbumPage" + item.album.id}
              > */}
              <img
                width="97%"
                height="210px"
                src={item.album.cover_medium}
                alt={item.album.title}
              />
             {/*  </Link> */}
              <Link
                className="nav-link text-white text-center"
                to={"/AlbumPage" + item.album.id}
              >
                {" "}
                {item.album.title}
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
