import React from "react";
import styled from "styled-components";

const StyleLineMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: white;
    padding: 30px 15px;
    font-family: "Sintony", sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    display: inline-block;
  }

  a:hover {
    color: #fea100;
  }
`;

function LineMenu() {
  return (
    <StyleLineMenu>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">MENU</a>
        </li>
        <li>
          <a href="#">RESERVATION</a>
        </li>
        <li>
          <a href="#">RECIPE</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <a href="#">PAGES</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </StyleLineMenu>
  );
}
export default LineMenu;
