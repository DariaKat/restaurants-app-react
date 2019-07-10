import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import PropTypes from "prop-types";

const StyleMenu = styled.ul`
  height: 70px;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
  margin: 0px auto;
  background-position: center;
  margin: 20px 0px;
`;

class Menu extends React.Component {
  state = {
    food: []
  };

  static propTypes = {
    item: PropTypes.string.isRequired,
    onItemChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <StyleMenu>
        <Icon
          isActive={this.props.item === "breakfast"}
          name="breakfast"
          onNameChange={name => this.props.onItemChange(name)}
        />
        <Icon
          isActive={this.props.item === "lunch"}
          name="lunch"
          onNameChange={name => this.props.onItemChange(name)}
        />
        <Icon
          isActive={this.props.item === "soups"}
          name="soups"
          onNameChange={name => this.props.onItemChange(name)}
        />
        <Icon
          isActive={this.props.item === "pizza"}
          name="pizza"
          onNameChange={name => this.props.onItemChange(name)}
        />
        <Icon
          isActive={this.props.item === "snaks"}
          name="snaks"
          onNameChange={name => this.props.onItemChange(name)}
        />
        <Icon
          isActive={this.props.item === "dinner"}
          name="dinner"
          onNameChange={name => this.props.onItemChange(name)}
        />
      </StyleMenu>
    );
  }
}

export default Menu;
