import React from "react";
import MainAlbumContainer from "./MainAlbumContainer";
import TopMenu from "./TopMenu";

class MyLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className="col-6 col-sm-8 col-md-9 col-lg-9 col-xl-10 pl-4 position-relative"
        id="parent"
      >
        <TopMenu />
        <MainAlbumContainer
          audioref={this.props.audioref}
          search={true}
          query={[this.props.match.params.SearchText]}
        />
      </div>
    );
  }
}

export default MyLibrary;
