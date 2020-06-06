import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div style={{ display: "inline" }}>
        <input
          placeholder="Search"
          style={{
            width: "38%",
            height: "25px",
            marginLeft: "17%",
            fontSize: "0.99rem",
          }}
        ></input>
        <button
          style={{
            width: "4%",
            height: "32.359px",
            textAlign: "center",
          }}
        >
          <i style={{ color: "#C0C0C0" }} class="fas fa-search"></i>
        </button>
      </div>
    );
  }
}

export default Search;
