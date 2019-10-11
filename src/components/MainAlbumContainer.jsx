import React, { Component } from "react";
import { Alert, Badge } from "reactstrap";
import SongCarousel from "./Carousel";
import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import { handleGetSongs } from "../actions/songs";

/* const headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
});

const fetchParams = {
  method: "GET",
  headers: headers
};

const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q="; */

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getSongs: query => dispatch(handleGetSongs(query))
});
class MainAlbumContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  /*  fetchData = async query => {
    try {
      var response = await fetch(url + query, fetchParams);
      var json = await response.json();
      return response.ok
        ? json.data.slice(0, 15)
        : this.setState({ errMess: json.message });
    } catch (err) {
      return this.setState({
        errMess: "Error on fetch" + err
      });
    }
  };
 */
  componentDidMount = async () => {
    this.props.query.map(query => this.props.getSongs(query));
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
              {Object.entries(this.props.songs).map((titleAndList, index) => (
                <SongCarousel
                  key={index}
                  albumList={titleAndList[1]}
                  title={titleAndList[0]}
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
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainAlbumContainer);
