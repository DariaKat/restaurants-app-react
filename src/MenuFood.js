import React from "react";
import "./normalize.css";
import styled from "styled-components";

const StyleMenuFood = styled.section`
  font-family: "Sintony", sans-serif;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 500px;
  color: black;
  .title {
    font-size: 24px;
    line-height: 28px;
    padding: 20px 10px 5px;
    font-weight: bolder;
    text-align: center;
    color: rgba(36, 36, 36, 0.973);
  }
  a {
    text-decoration: none;
    display: inline-block;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .item {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .item p {
    padding: 0px 10px;
    margin: 0;
  }

  .item ul {
    padding: 0px 10px;
    margin: 0px auto;
    background-position: center;
  }

  .item li {
    display: inline-block;
  }

  .item a {
    color: rgba(36, 36, 36, 0.973);
    padding: 10px 15px;
    font-family: "Sintony", sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
  }

  .item a:hover {
    color: #fea100;
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

  .container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;

function MenuFood() {
  return (
    <StyleMenuFood>
      <div className="container">
        <div className="inner">
          <div className="title">Food Menu</div>
          <nuv className="item">
            <ul>
              <li>
                <a href="#">
                  <img src="/images/all.png" />
                  <p>All</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/break.png" />
                  <p>Breakfast</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/lunch.png" />
                  <p>Lunch</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/snaks.png" />
                  <p>Snaks</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/Pizza.png" />
                  <p>Pizza</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/soups.png" />
                  <p>Soups</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/dinner.png" />
                  <p>Dinner</p>
                </a>
              </li>
            </ul>
          </nuv>
          <div className="price">
            <div className="price-left">
              <div className="price-eat">
                <div className="price-name">
                  <div className="price-title">
                    Ultimate organic fruit salad
                  </div>
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
                  <div className="price-title">
                    Ultimate organic fruit salad
                  </div>
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
            <button>EXPLOR FOOD MENU</button>
          </div>
        </div>
      </div>
    </StyleMenuFood>
  );
}
export default MenuFood;
