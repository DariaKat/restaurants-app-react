import React from "react";
import "./normalize.css";
import BtnLink from "./comp/Link";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "./comp/Header/Logo";
import LineMenu from "./comp/Header/LineMenu";

const StyleHeader = styled.header`
  background-color: rgba(94, 94, 94, 0.973);
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-around;
`;

function Header() {
  return (
    <StyleHeader>
      <Logo />
      <LineMenu />
      <BtnLink to="/book">BOOK YOURTABLE</BtnLink>
    </StyleHeader>
  );
}

export default Header;
