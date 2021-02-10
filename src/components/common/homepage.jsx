import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import New from "./new";
class Homepage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar />
        <New />
      </div>
    );
  }
}

export default Homepage;
