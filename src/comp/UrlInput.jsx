import React from "react";
import styled from "styled-components";

const StyleUrlInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "grey"};
  margin: 10px;
  font-family: "Sintony", sans-serif;
  font-size: 16px;
  padding: 10px 110px 10px 10px;
  margin: 5px 0px;
  border-radius: 3px;
  padding: ${props =>
    props.size === "small" ? "10px 100px 10px 10px" : "10px 110px 10px 10px"};
`;

class UrlInput extends React.Component {
  render() {
    return (
      <StyleUrlInput
        placeholder={this.props.name}
        size={this.props.size}
        type={this.props.type}
      />
    );
  }
}

export default UrlInput;
