import React from "react";
import Price from "./Price";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyleButton = styled.button`
  color: rgba(36, 36, 36, 0.973);
  padding: 10px 15px;
  font-family: "Sintony", sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: ${props => (props.isActive ? "#fea100" : "black")};

  p {
    padding: 0px 10px;
    margin: 0;
  }
`;

class Icon extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onNameChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    isActive: false
  };

  render() {
    return (
      <StyleButton
        isActive={this.props.isActive}
        onClick={event => this.props.onNameChange(this.props.name)}
      >
        <img src={`/images/${this.props.name}.png`} alt={this.props.name} />
        <p>{this.props.name}</p>
      </StyleButton>
    );
  }
}

export default Icon;
