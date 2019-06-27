import React from "react";
import "./normalize.css";
import BtnLink from "./comp/Link";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StyleHeader = styled.header`
  background-color: rgba(94, 94, 94, 0.973);
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-around;

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
  .logo {
    margin: 0px 20px;
    padding: 0px 10px;
  }
  .menu li {
    display: inline-block;
  }

  .menu a {
    color: white;
    padding: 30px 15px;
    font-family: "Sintony", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }

  .menu a:hover {
    color: #fea100;
  }
`;

function Header() {
  return (
    <StyleHeader>
      <div className="logo">
        <a href="#">
          <img src="/images/logo.png" />
        </a>
      </div>
      <nav className="menu">
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
      </nav>
      <BtnLink to="/book">BOOK YOURTABLE</BtnLink>
    </StyleHeader>
  );
}

export default Header;
