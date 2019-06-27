import React from "react";
import styled from "styled-components";

const StyleMenu = styled.ul`
  height: 70px;
  display: flex;
  justify-content: space-between;
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

  p {
    padding: 0px 10px;
    margin: 0;
  }

  ul {
    padding: 0px 10px;
    margin: 0px auto;
    background-position: center;
  }

  li {
    display: inline-block;
  }

  a {
    color: rgba(36, 36, 36, 0.973);
    padding: 10px 15px;
    font-family: "Sintony", sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
  }

  a:hover {
    color: #fea100;
  }
`;

function Menu() {
  return (
    <StyleMenu>
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
    </StyleMenu>
  );
}
export default Menu;
