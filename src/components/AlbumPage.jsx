import React, { Component } from "react";
import { FiHeart } from "react-icons/fi";
import { FaEllipsisH, FaHeart } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
});

const fetchParams = {
  method: "GET",
  headers: headers
};

const url = "https://deezerdevs-deezer.p.rapidapi.com/album/";

export default class AlbumPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      results: null,
      errMess: undefined,
      isOpen: false
    };
  }

  componentDidMount = async () => {
    let albumId = this.props.match.params.AlbumId;
    let results = await this.fetchData(albumId);
    setTimeout(
      () =>
        this.setState({
          results: results,
          isLoading: false
        }),
      1500
    );
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
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

  render() {
    return (
      <div
        className="col-6 col-sm-8 col-md-9 col-lg-9 col-xl-10 pl-4 position-relative"
        id="parent"
      >
        <div className="main-albums-container">
          <div className="container-fluid">
            <div className="row">
              {this.state.isLoading && (
                <div className="container" style={{position:"absolute", top:"40%", left:"40%"}}>
                  <ClipLoader
                    sizeUnit={"px"}
                    size={120}
                    color={"#fff"}
                    loading={true}
                  />
                </div>
              )}
              {!this.state.isLoading &&
                this.state.results &&
                this.state.errMess === undefined && (
                  <>
                    <div id="picture" className="col-xs-12 col-lg-3 col-xl-4">
                      <div className="text-center py-2">
                        <img
                          className="img-fluid mt-4"
                          src={this.state.results.cover_big}
                          alt="album picture"
                        />
                        <h4 className="myPictureTitle pt-3">
                          {this.state.results.title}
                        </h4>
                        <p>{this.state.results.artist.name}</p>
                        <button className="play mt-3">PLAY</button>
                        <div className="py-2">
                          <span
                            style={{ fontSize: "13px" }}
                            className="text-muted font-weight-bold"
                          >
                            {this.state.results.release_date.substring(0, 4)} -{" "}
                            {this.state.results.nb_tracks} SONGS
                          </span>
                        </div>
                        <div className="pt-4">
                          {!this.state.isOpen ? (
                            <FiHeart
                              size="30px"
                              onClick={this.toggle}
                              className="mx-3"
                            />
                          ) : (
                            <FaHeart
                              size="30px"
                              onClick={this.toggle}
                              className="mx-3"
                            />
                          )}
                          <FaEllipsisH size="30px" className="mr-3" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-lg-9 col-xl-8">
                      <ul className="list-unstyled w-100">
                        {this.state.results.tracks.data.map((track, index) => (
                          <li key={index} className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h5 className="text-white py-2">
                                  {track.title}
                                </h5>
                              </div>
                              <div>
                                <p className="text-muted">
                                  {track.duration} sec
                                </p>
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
