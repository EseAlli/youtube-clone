import React, { Component } from "react";
import Search from "./Search";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div id="container">
        <div className="start">
          <a className="hamburger" href="#/">
            <i className="fas fa-bars"></i>
          </a>
          <a href="#/" title="YouTube Home">
            <i className="fab fa-youtube"></i> <strong>YouTube</strong>
          </a>
        </div>
        <Search />
        <div className="end">
          <a href="#/" title="Create">
            <i className="fas fa-video"></i>
          </a>
          <a href="#/" title="Youtube Apps">
            <i className="fas fa-th"></i>
          </a>
          <a href="#/" title="Notifications">
            {" "}
            <i className="fas fa-bell"></i>
          </a>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Nav;
