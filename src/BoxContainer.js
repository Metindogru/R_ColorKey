import React, { Component } from "react";
import Box from "./Box.js";
import "./BoxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 30,

    allColors: [
      "purple",
      "magenta",
      "lilac",
      "pink",
      "red",
      "green",
      "blue",
      "orange",
      "brown",
      "tomato",
      "violet",
      "gray",
      "yellow",
      "black",
      "gold",
      "turquoise",
      "navy",
      "sky blue",
    ],
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
