import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-side">
          <div>
            <ul>
              <li>Home</li>
              <li>Trending</li>
              <li>Subscriptions</li>
              <hr />
              <li>Library</li>
              <li>History</li>
              <li>Your Videos</li>
              <li>Purchases</li>
              <li>Watch Later</li>
              <li>Show More</li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
