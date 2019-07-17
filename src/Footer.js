import React from "react";
import "./normalize.css";
import styled from "styled-components";
import Content from "./comp/Footer/Content";
import MasloApp from "./comp/Footer/MasloApp";

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
`;

function Footer() {
  return (
    <StyleFooter>
      <MasloApp />
      <Content />
    </StyleFooter>
  );
}

export default Footer;
