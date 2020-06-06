import React, { Component } from "react";
import Search from "./Search";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div class="nav">
        <div id="container">
        <div class="start">
          <a className="hamburger" href="#/">
            <i class="fas fa-bars"></i>
          </a>
          <a href="#/" title="YouTube Home">
            <i class="fab fa-youtube"></i> <strong>YouTube</strong>
          </a>
        </div>
        <Search />
        <div className="end">
          <a href="#/" title="Create">
            <i class="fas fa-video"></i>
          </a>
          <a href="#/" title="Youtube Apps">
            <i class="fas fa-th"></i>
          </a>
          <a href="#/" title="Notifications">
            {" "}
            <i class="fas fa-bell"></i>
          </a>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Nav;
