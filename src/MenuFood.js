import React from "react";
import "./normalize.css";
import Button from "./comp/Button";
import styled from "styled-components";
import BtnLink from "./comp/Link";
import Menu from "./comp/FoodMenu/Menu";
import Price from "./comp/FoodMenu/Price";

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
  .title {
    font-size: 24px;
    line-height: 28px;
    padding: 20px 10px 5px;
    font-weight: bolder;
    text-align: center;
    color: rgba(36, 36, 36, 0.973);
  }

  .btn {
    display: flex;
    justify-content: space-around;
  }
`;

function MenuFood() {
  return (
    <StyleMenuFood>
      <div className="title">Food Menu</div>
      <Menu />
      <Price />
      <div className="btn">
        <BtnLink to="/menu">EXPLOR FOOD MENU</BtnLink>
      </div>
    </StyleMenuFood>
  );
}

export default MenuFood;
