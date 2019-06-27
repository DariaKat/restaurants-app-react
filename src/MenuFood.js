import React from "react";
import "./normalize.css";
import Button from "./comp/Button";
import styled from "styled-components";
import BtnLink from "./comp/Link";
import Menu from "./comp/FoodMenu/Menu";

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

  .price {
    display: inline-block;
    display: flex;
    justify-content: space-around;
  }

  .price-eat {
    padding: 10px;
    margin: 10px;
    width: 500px;
  }

  .price-name {
    display: inline-block;
  }

  .price-title {
    font-size: 18px;
    padding: 0px 10px;
    font-weight: bolder;
  }

  .price-text {
    font-size: 14px;
    line-height: 20px;
    padding: 0px 10px;
    font-weight: bolder;
    color: rgba(56, 56, 56, 0.973);
  }

  .price-dol {
    float: right;
    font-size: 18px;
    font-weight: bolder;
    color: #fea100;
  }

  .btn {
    display: flex;
    justify-content: space-around;
  }

  .btn button {
    font-family: "Sintony", sans-serif;
    background-color: #fea100;
    color: #fff;
    line-height: 18px;
    margin: 15px;
    padding: 15px 28px 15px 28px;
    font-weight: 600;
    font-size: 14px;
    float: right;
    border: 1px solid transparent;
    border-radius: 5px;
    position: relative;
    height: fit-content;
  }

  .btn button:hover {
    border: 2px solid #ebca93;
  }
`;

function MenuFood() {
  return (
    <StyleMenuFood>
      <div className="title">Food Menu</div>
      <Menu />
      <div className="price">
        <div className="price-left">
          <div className="price-eat">
            <div className="price-name">
              <div className="price-title">Ultimate organic fruit salad</div>
              <div className="price-text">
                survived not only five centuries but the leap
              </div>
            </div>
            <div className="price-dol">$50.00</div>
          </div>
          <div className="price-eat">
            <div className="price-name">
              <div className="price-title">Plain pancakes</div>
              <div className="price-text">
                Donec eget augue at diam euismod viverra
              </div>
            </div>
            <div className="price-dol">$68.00</div>
          </div>
          <div className="price-eat">
            <div className="price-name">
              <div className="price-title">Toasted jam</div>
              <div className="price-text">
                Phasellus a ex accumsan, sollicitudin
              </div>
            </div>
            <div className="price-dol">$22.00</div>
          </div>
          <div className="price-eat">
            <div className="price-name">
              <div className="price-title">Toasted jam copy</div>
              <div className="price-text">
                Phasellus a ex accumsan, sollicitudin copy
              </div>
            </div>
            <div className="price-dol">$39.00</div>
          </div>
        </div>
        <div className="price-right">
          <div className="price-eat">
            <div className="price-name">
              <div className="price-title">Ultimate organic fruit salad</div>
              <div className="price-text">
                survived not only five centuries but the leap
              </div>
            </div>
            <div className="price-dol">$50.00</div>
          </div>
          <div className="price-eat">
            <div className="price-name">
              <div className="price-title">Plain pancakes</div>
              <div className="price-text">
                Donec eget augue at diam euismod viverra
              </div>
            </div>
            <div className="price-dol">$68.00</div>
          </div>
          <div className="price-eat">
            <div className="price-name">
              <div className="price-title">Toasted jam</div>
              <div className="price-text">
                Phasellus a ex accumsan, sollicitudin
              </div>
            </div>
            <div className="price-dol">$22.00</div>
          </div>
          <div className="price-eat">
            <div className="price-name">
              <div className="price-title">Toasted jam copy</div>
              <div className="price-text">
                Phasellus a ex accumsan, sollicitudin copy
              </div>
            </div>
            <div className="price-dol">$39.00</div>
          </div>
        </div>
      </div>
      <div className="btn">
        <BtnLink to="/menu">EXPLOR FOOD MENU</BtnLink>
      </div>
    </StyleMenuFood>
  );
}

export default MenuFood;
