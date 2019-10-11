import React, { Component } from "react";
import { FaPlay } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { connect } from "react-redux";
import { handleIsPlaying } from "../actions/isPlaying";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  togglePlaying: () => dispatch(handleIsPlaying())
});
class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  handleBack = () => {
    if (this.state.index != 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };

  handleForward = () => {
    console.log(this.props);
    if (this.state.index + 1 < this.props.playlist.length) {
      this.setState({ index: this.state.index + 1 });
    }
  };

  render() {
    return (
      <footer className="row footer">
        <div className="col-md-4">
          {this.props.playlist.length > 0 && (
            <div className="row no-gutters pt-1">
              <div className="col-3">
                <img
                  className="img-fluid ThumnailImage rounded pl-2 pb-2"
                  src={this.props.playlist[this.state.index].cover_small}
                  alt="album cover"
                  style={{ heigth: "10px" }}
                />
              </div>
              <div className="col-8">
                <a className=" pt-0 pl-2">
                  {this.props.playlist[this.state.index].title_short}
                </a>{" "}
                <br />
                <a className="albumTitleThumb pl-2">
                  {this.props.playlist[this.state.index].artist.name}
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-4 text-center pt-4">
          <FaFastBackward
            onClick={this.handleBack}
            size="21px"
            className="mr-2 mb-2 d-inline-block pt-2"
            style={{ color: "white", cursor: "pointer" }}
          />
          {!this.props.isPlaying && (
            <FaPlay
              onClick={this.props.togglePlaying}
              size="21px"
              className="mx-5 mb-2 d-inline-block pt-2"
              style={{ color: "white", cursor: "pointer" }}
            />
          )}
          {this.props.isPlaying && (
            <FaPause
              onClick={this.props.togglePlaying}
              size="21px"
              className="mx-5 mb-2 d-inline-block pt-2"
              style={{ color: "white", cursor: "pointer" }}
            />
          )}
          <FaFastForward
            onClick={this.handleForward}
            size="21px"
            className="mr-2 mb-2 d-inline-block pt-2"
            style={{ color: "white", cursor: "pointer" }}
          />
        </div>
        {/* THUMNAIL IMAGE */}
        <div className="col-md-4"></div>
      </footer>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
