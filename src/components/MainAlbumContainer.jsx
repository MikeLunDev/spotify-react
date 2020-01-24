import React, { Component } from "react";
import { Alert, Badge } from "reactstrap";
import SongCarousel from "./Carousel";
import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import { handleGetSongs } from "../actions/songs";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getSongs: (query, search = false) => dispatch(handleGetSongs(query, search))
});
class MainAlbumContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount = async () => {
    if (this.props.query !== undefined) {
      this.props.query.map(query =>
        this.props.getSongs(query, this.props.search)
      );
    }
    if (this.props.library !== undefined) {
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
          !this.state.isLoading && (
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
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainAlbumContainer);
