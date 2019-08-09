import React, { Component } from "react";
import { Alert, Badge } from "reactstrap";
import SongCarousel from "./Carousel";
import { ClipLoader } from "react-spinners";

const headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
});

const fetchParams = {
  method: "GET",
  headers: headers
};

const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
export default class MainAlbumContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errMess: undefined,
      results: null,
      isLoading: true
    };
  }

  fetchData = async query => {
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

  componentDidMount = async () => {
    let results = await Promise.all(
      this.props.query.map(async query => await this.fetchData(query))
    );
    setTimeout(() => this.setState({
      results: results,
      isLoading: false
    }), 1500);
  }

  render() {
    return (
      <>
           {this.state.isLoading && (
            <div className="main-albums-container">
            <div className="container" style={{position:"absolute", top:"40%", left:"40%"}}>
            <ClipLoader
              sizeUnit={"px"}
              size={120}
              color={"#fff"}
              loading={true}
            />
          </div> 
          </div>
             ) }
        {this.state.results && this.state.errMess === undefined && !this.state.isLoading && (
          <div className="main-albums-container">
            {this.state.results.map((list, index) => (
              <SongCarousel
                queryParams={this.props.query}
                index={index}
                key={index}
                albumList={list}
              />
            ))}
          </div>
        )}
        {this.state.errMess && !this.state.isLoading && (
          <Alert color="danger">
            <h3>
              There was an error:{" "}
              <Badge color="danger">Error code: #{this.state.errMess}</Badge>
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
