import React from "react";
import Price from "./Price";
import PropTypes from "prop-types";

class Icon extends React.Component {
  state = {
    food: []
  };

  render() {
    return (
      <button
        onClick={food => this.setState(console.log({ food: this.props.name }))}
      >
        <img src={`/images/${this.props.name}.png`} alt={this.props.name} />
        <p>{this.props.name}</p>
      </button>
    );
  }
}

export default Icon;
