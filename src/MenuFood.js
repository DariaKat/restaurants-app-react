import React from "react";
import "./normalize.css";
import styled from "styled-components";
import Menu from "./comp/FoodMenu/Menu";
import Price from "./comp/FoodMenu/Price";
import Title from "./comp/FoodMenu/Title";
import Btn from "./comp/FoodMenu/Btn";

const StyleMenuFood = styled.section`
  font-family: "Sintony", sans-serif;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 500px;
  color: black;
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
`;

class MenuFood extends React.Component {
  state = {
    item: "lunch"
  };

  render() {
    return (
      <StyleMenuFood>
        <Title />
        <Menu
          item={this.state.item}
          onItemChange={item => this.setState({ item: item })}
        />
        <Price item={this.state.item} />
        <Btn />
      </StyleMenuFood>
    );
  }
}

export default MenuFood;
