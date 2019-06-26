import React from "react";
import "./normalize.css";

import styled from "styled-components";

const StyleHeader = styled.header`
  .container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
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

  .content {
    background-color: rgba(94, 94, 94, 0.973);
  }

  .btn {
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

  .btn:hover {
    border-color: #fff;
  }

  .menu li {
    display: inline-block;
  }

  .container-inner {
    display: flex;
    justify-content: space-between;
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
      <div className="content">
        <div className="container">
          <div className="container-inner">
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
            <button className="btn" href="#">
              BOOK YOURTABLE
            </button>
          </div>
        </div>
      </div>
    </StyleHeader>
  );
}

export default Header;
