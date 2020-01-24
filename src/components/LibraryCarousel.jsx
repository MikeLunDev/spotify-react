import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import playImg from "../assets/Play.png";
import { connect } from "react-redux";
import { handleAddSongToPlaylist } from "../actions/playlist";
import { handleIsPlaying } from "../actions/isPlaying";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addToPlaylist: (track, album) =>
    dispatch(handleAddSongToPlaylist(track, album)),
  togglePlay: id => dispatch(handleIsPlaying(id))
});

class LibraryCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    const { cover_medium, id } = this.props.albumList[0].album;
    this.setState({ cover_medium, id, album: this.props.albumList[0].album });
    delete this.props.albumList[0].album;
  };

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
          {Object.values(this.props.albumList[0]).map(item => (
            <div key={this.state.id}>
              <div className="media-obj text-center">
                <img
                  width="97%"
                  height="210px"
                  src={this.state.cover_medium}
                  alt={this.props.title}
                />
                <div className="middle">
                  <div
                    className="nav-link text-white text-center"
                    to={"/AlbumPage/" + this.state.id + "/play"}
                    onClick={() => {
                      this.props.addToPlaylist(item, this.state.album);
                      this.props.togglePlay(item.id);
                      this.props.audioref.current.audio.play();
                    }}
                  >
                    <img src={playImg} alt="play button" width="40px" />
                  </div>
                </div>
              </div>
              <div className="pr-2 pt-1">
                <div
                  className="pt-1 text-white"
                  to={"/AlbumPage/" + this.state.id}
                >
                  {" "}
                  {item.title_short}
                </div>
                <Link
                  className="cta-album-title"
                  to={"/AlbumPage/" + this.state.id}
                >
                  {" "}
                  {this.props.title.length > 40
                    ? this.props.title.substring(0, 40).concat("...")
                    : this.props.title}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
})(LibraryCarousel);
