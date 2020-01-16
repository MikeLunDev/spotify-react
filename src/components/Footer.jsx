import React, { Component } from "react";
import { connect } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
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
    if (this.state.index + 1 < this.props.playlist.length) {
      //if the playlist is not at his last song
      this.setState({ index: this.state.index + 1 });
    }
  };

  action = type => {
    console.log(type);
    switch (type) {
      case "onClickPrevious":
        this.handleBack();
        return;
      case "onClickNext":
        this.handleForward();
        return;
      default:
        return;
    }
  };

  render() {
    return (
      <footer className="row footer">
        <div className="col-xs-0 col-md-3">
          {this.props.playlist.length > 0 && (
            <div className="row h-100 pt-2 pb-5 d-flex justify-content-md-start">
              <div className="col-xs-0 col-md-2">
                <img
                  className="pl-2"
                  src={this.props.playlist[this.state.index].cover_small}
                  alt="album cover"
                  style={{ position: "relative" }}
                />
              </div>
              <div className="col-12 col-md-10 w-100">
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
        <div className="col-xs-12 col-md-9">
          <AudioPlayer
            //autoPlayAfterSrcChange
            onClickPrevious={e => this.action("onClickPrevious")}
            onClickNext={evt => this.action("onClickNext")}
            style={{
              marginBottom: "30px",
              backgroundColor: "#333333",
              boxShadow: "none",
              outline: "none",
              textDecoration: "none"
            }}
            volume={1}
            autoPlay
            showSkipControls
            progressUpdateInterval={100}
            src={
              this.props.playlist[this.state.index] &&
              this.props.playlist[this.state.index].preview
            }
          />
        </div>
      </footer>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
