import React, { Component } from "react";
import { FiHeart } from "react-icons/fi";
import { FaEllipsisH, FaHeart } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { IoIosMusicalNote } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import { FaPlay, FaPause } from "react-icons/fa";
import { handleGetAlbum } from "../actions/albums";
import { handleAddSongToPlaylist } from "../actions/playlist";
import { handleIsPlaying } from "../actions/isPlaying";
import { connect } from "react-redux";
/* 
WHITHOUT REDUX

const headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
});

const fetchParams = {
  method: "GET",
  headers: headers
};

const url = "https://deezerdevs-deezer.p.rapidapi.com/album/"; 
fetchData = async id => {
    try {
      var response = await fetch(url + id, fetchParams);
      var json = await response.json();
      console.log("results of id", json);
      return response.ok ? json : this.setState({ errMess: json.message });
    } catch (err) {
      return this.setState({
        errMess: "Error on fetch" + err
      });
    }
  };

*/

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getAlbum: id => dispatch(handleGetAlbum(id)),
  addToPlaylist: (track, album) =>
    dispatch(handleAddSongToPlaylist(track, album)),
  togglePlay: id => dispatch(handleIsPlaying(id))
});

class AlbumPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      results: null,
      errMess: undefined,
      isOpen: false,
      hoverId: undefined
    };
  }

  getAlbumId = () => this.props.match.params.AlbumId;

  componentDidMount = async () => {
    let albumId = this.getAlbumId();
    await this.props.getAlbum(albumId);
    setTimeout(
      () =>
        this.setState(
          {
            isLoading: false
          },
          () => {
            if (window.location.href.includes("/play")) {
              this.playAlbum();
            }
          }
        ),
      1000
    );
  };

  componentWillUnmount = () => {
    if (this.state.isOpen) {
      if (localStorage.getItem(this.props.album.title) === null) {
        //if the album is already there
        localStorage.setItem(
          this.props.album.title,
          JSON.stringify(this.props.album)
        );
      }
    }
  };

  toggle = () => {
    if (localStorage.getItem(this.props.album.title) !== null) {
      localStorage.removeItem(this.props.album.title);
      this.setState({
        isOpen: false
      });
    } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };

  giveMinutes = seconds => {
    let minutes = 0;
    if (seconds >= 60) {
      while (seconds >= 60) {
        seconds -= 60;
        minutes++;
      }
      return seconds > 9 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`;
    } else return `0:${seconds}`;
  };

  handleHover = index => {
    this.setState({
      hoverId: index
    });
  };
  handleLeave = () => {
    this.setState({
      hoverId: undefined
    });
  };

  playAlbum = () => {
    this.props.album.tracks.data
      .slice()
      .reverse()
      .forEach(track => {
        this.props.addToPlaylist(track, this.props.album);
      });
    this.props.togglePlay(this.props.album.tracks.data[0].id);
  };

  render() {
    console.log("render", localStorage.getItem(this.props.album.title));
    return (
      <div
        className="col-6 col-sm-8 col-md-9 col-lg-9 col-xl-10 pl-4 position-relative"
        id="parent"
      >
        <div className="main-albums-container">
          <div className="container-fluid">
            <div className="row ">
              {this.state.isLoading && (
                <div
                  className="container"
                  style={{ position: "absolute", top: "40%", left: "40%" }}
                >
                  <ClipLoader
                    sizeUnit={"px"}
                    size={120}
                    color={"#fff"}
                    loading={true}
                  />
                </div>
              )}
              {!this.state.isLoading &&
                this.props.album &&
                !this.props.error.fetchError && (
                  <>
                    <div
                      id="picture"
                      className="col-xs-12 col-lg-3 col-xl-4 pt-3"
                    >
                      <div className="text-center py-2">
                        <img
                          className="img-fluid mt-4 albumPicture shadow-lg rounded"
                          src={this.props.album.cover_medium}
                          alt="album cover"
                        />
                        <h4 className="myAlbumTitle pt-3 pb-0 mb-0">
                          {this.props.album.title}
                        </h4>
                        <p className="albumUnderLink2">
                          {this.props.album.artist.name}
                        </p>
                        <button className="play mt-3" onClick={this.playAlbum}>
                          PLAY
                        </button>
                        <div className="py-2">
                          <p className="dateAndSongs">
                            {this.props.album.release_date.substring(0, 4)} -{" "}
                            {this.props.album.nb_tracks} SONGS
                          </p>
                        </div>
                        <div className="pt-4 mr-4">
                          {this.state.isOpen ||
                          localStorage.getItem(this.props.album.title) !==
                            null ? (
                            <FaHeart
                              size="23px"
                              onClick={this.toggle}
                              className="mx-4"
                              style={{ color: "white" }}
                            />
                          ) : (
                            <FiHeart
                              size="23px"
                              onClick={this.toggle}
                              className="mx-4"
                              style={{ color: "white" }}
                            />
                          )}
                          <FaEllipsisH
                            size="19px"
                            className="ml-1"
                            style={{ color: "white" }}
                          />
                        </div>
                        {localStorage.length === 0 && !this.state.isOpen && (
                          <div className="pt-4 text-center text-white">
                            Click on the heart to add the album in your library
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-xs-12 col-lg-9 col-xl-8 pt-5 pr-2 mb-2 pb-3 pl-lg-5 pl-xl-0 pl-md-0">
                      <ul className="list-unstyled w-100 ">
                        {this.props.album.tracks.data.map((track, index) => (
                          <li
                            onMouseEnter={() => this.handleHover(index)}
                            onMouseLeave={this.handleLeave}
                            key={index}
                            className="albumList px-2 py-1 w-100"
                          >
                            <div className="row">
                              <div className="col-12 py-0 ">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    {this.state.hoverId >= 0 &&
                                    this.state.hoverId === index ? (
                                      track.id === this.props.isPlaying ? (
                                        <FaPause
                                          onClick={() => {
                                            this.props.togglePlay("");
                                            this.props.audioref.current.audio.pause();
                                          }}
                                          size="21px"
                                          className="mr-2 mb-2 d-inline-block pt-2"
                                          style={{ color: "#1ba94e" }}
                                        />
                                      ) : (
                                        <FaPlay
                                          onClick={() => {
                                            this.props.addToPlaylist(
                                              track,
                                              this.props.album
                                            );
                                            this.props.togglePlay(track.id);
                                            this.props.audioref.current.audio.play();
                                          }}
                                          size="21px"
                                          className="mr-2 mb-2 d-inline-block pt-2"
                                          style={{ color: "white" }}
                                        />
                                      )
                                    ) : (
                                      <IoIosMusicalNote
                                        size="22px"
                                        style={{
                                          color:
                                            track.id === this.props.isPlaying
                                              ? "#1ba94e"
                                              : "white"
                                        }}
                                        className="mr-2 mb-2 d-inline-block pt-1"
                                      />
                                    )}
                                    <p
                                      className="albumTrackTitle "
                                      style={{
                                        color:
                                          track.id === this.props.isPlaying
                                            ? "#1ba94e"
                                            : "white"
                                      }}
                                    >
                                      {track.title}
                                    </p>
                                  </div>
                                  <div>
                                    {this.state.hoverId >= 0 &&
                                      this.state.hoverId === index && (
                                        <FaEllipsisH
                                          size="13px"
                                          className="mr-5"
                                          style={{ color: "white" }}
                                        />
                                      )}
                                    <p className="secondsDuration">
                                      {this.giveMinutes(track.duration)}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="col-12 pb-2 pt-0 mt-0">
                                <a className="albumUnderLink " href="/">
                                  {track.artist.name}
                                </a>
                                <GoPrimitiveDot className="mx-2" size="9px" />
                                <a className="albumUnderLink2 " href="/">
                                  {this.props.album.title}
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
})(AlbumPage);
