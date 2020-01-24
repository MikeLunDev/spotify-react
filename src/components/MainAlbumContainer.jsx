import React, { Component } from "react";
import { Alert, Badge } from "reactstrap";
import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import { handleGetSongs } from "../actions/songs";
import SongCarousel from "./Carousel";
import LibraryCarousel from "./LibraryCarousel";
import { Link } from "react-router-dom";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getSongs: (query, search = false) => dispatch(handleGetSongs(query, search))
});
class MainAlbumContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      arrayOfValues: null,
      arrayOfKeys: null
    };
  }

  componentDidMount = async () => {
    if (this.props.query !== undefined) {
      this.props.query.map(query =>
        this.props.getSongs(query, this.props.search)
      );
    }
    if (this.props.library !== undefined) {
      const arrayOfKeys = Object.keys(localStorage);
      const arrayOfValues = Object.values(localStorage)
        .map(item => JSON.parse(item))
        .map(item => {
          const { cover_medium, title, id, cover_small } = item;
          return {
            album: {
              cover_medium,
              title,
              id,
              cover_small
            },
            ...item.tracks.data
          };
        });
      this.setState({ arrayOfKeys, arrayOfValues });
    }
    setTimeout(
      () =>
        this.setState({
          isLoading: false
        }),
      1000
    );
  };

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div className="main-albums-container">
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
          </div>
        )}
        {this.props.songs &&
          this.props.error.message === "" &&
          !this.state.isLoading &&
          this.props.library === undefined && (
            <div className="main-albums-container">
              {Object.entries(this.props.songs).map((titleAndList, index) => {
                return (
                  <SongCarousel
                    key={index}
                    albumList={titleAndList[1]}
                    title={titleAndList[0]}
                    audioref={this.props.audioref}
                  />
                );
              })}
            </div>
          )}
        {this.props.library &&
          this.props.error.message === "" &&
          !this.state.isLoading &&
          this.state.arrayOfValues !== null &&
          this.state.arrayOfKeys !== null && (
            <div className="main-albums-container">
              {this.state.arrayOfKeys.map((key, index) => (
                <LibraryCarousel
                  key={index}
                  albumList={[this.state.arrayOfValues[index]]}
                  title={key}
                  audioref={this.props.audioref}
                />
              ))}
            </div>
          )}
        {this.props.error.fetchError && !this.state.isLoading && (
          <Alert color="danger">
            <h3>
              There was an error: <br />
              <Badge color="danger">
                Error code:{" "}
                {`${this.props.error.statusCode}, ${this.props.error.message}`}
              </Badge>
              <br />
              <br />
              Please contact us at{" "}
              <Badge color="success">lunatimichele@gmail.com</Badge> with the
              error code.
              <br />
            </h3>
            <h5>Thanks for your patience, we hope to see you again!</h5>
          </Alert>
        )}
        {this.props.library && localStorage.length === 0 && (
          <Alert color="danger">
            <h3>
              There is no song yet in your library: <br />
              Click on the heart of an album page to add it to
              <Badge color="success">Your Library</Badge>
              <br />
              <Link to="/" className="underline-go-home">
                Go back to HomePage
              </Link>
            </h3>
          </Alert>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainAlbumContainer);
