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

  :hover {
    color: #fea100;
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
    const foo = this.props.isActive ? "(Выбрано)" : "";

    return (
      <StyleButton onClick={event => this.props.onNameChange(this.props.name)}>
        <img src={`/images/${this.props.name}.png`} alt={this.props.name} />
        <p>{this.props.name + foo}</p>
      </StyleButton>
    );
  }
}

const StyledIcon = styled(Icon)`
  button {
    color: ${props => (props.isActive ? "red" : "")};

    :hover {
      color: #fea100;
    }
  }
`;

export default StyledIcon;
