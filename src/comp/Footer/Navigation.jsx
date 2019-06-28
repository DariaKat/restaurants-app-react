import React from "react";
import styled from "styled-components";

const StyleNavigation = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  .content-navig {
    font-size: 18px;
    line-height: 28px;
    padding: 30px 5px 10px 0px;
    font-weight: 600;
    color: white;
  }

  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    font-size: 16px;
    line-height: 20px;
    font-weight: 100;
    color: rgb(194, 194, 194);
    text-decoration: none;
    display: inline-block;
  }

  a:hover {
    color: #fea100;
  }
`;
function Navigation() {
  return (
    <StyleNavigation>
      <ul>
        <div className="content-navig">Navigation</div>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservation</a>
        </li>
        <li>
          <a href="#">Recipe</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
    </StyleNavigation>
  );
}
export default Navigation;
