import React from "react";
import "./normalize.css";
import styled from "styled-components";
import Navigation from "./comp/Footer/Navigation";
import News from "./comp/Footer/News";
import Social from "./comp/Footer/Social";
import App from "./comp/Footer/App";
import Content from "./comp/Footer/Content";

const StyleFooter = styled.footer`
  background-color: rgba(94, 94, 94, 0.973);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 320px;
  vertical-align: 40px;

  a {
    text-decoration: none;
    display: inline-block;
  }

  .content-all {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .content-all: nth-last-child {
    max-width: 900px;
    padding: 0px 20px;
    margin: 20px 60px;
  }
`;

function Footer() {
  return (
    <StyleFooter>
      <div className="content-all">
        <div>
          <Navigation />
        </div>
        <div>
          <News />
          <Social />
        </div>
        <App />
      </div>
      <Content />
    </StyleFooter>
  );
}

export default Footer;
