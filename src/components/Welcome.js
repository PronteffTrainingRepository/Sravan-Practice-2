import React, { Component } from "react";

class Welcome extends Component {
  state = {};
  render() {
    return <h1>{this.props.name} this is from class component</h1>;
  }
}

export default Welcome;
