import React, { Component } from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";
import "./Home.css";
import VideoList from "./VideoList";
// import axios from 'axios'

class Home extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    this.Videos();
    console.log(process.env);
  }

  Videos = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=NG&key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(res);
    this.setState({ video: res.data });
    console.log(this.state.videos);
  };
  render() {
    return (
      <div className="home">
        <Nav />
        <SideBar />

        <div className="home-content">
          <hr style={{ color: "#fff" }} />
          <div className="video-list">
            <VideoList />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
