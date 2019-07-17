import React from "react";
import styled from "styled-components";
import LinksPage from "./LinksPage";

const StyleLineMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

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
      <LinksPage to="/home">HOME</LinksPage>
      <LinksPage to="/menu">MENU</LinksPage>
      <LinksPage to="/reservation">RESERVATION</LinksPage>
      <LinksPage to="/recipe">RECIPE</LinksPage>
      <LinksPage to="/blog">BLOG</LinksPage>
      <LinksPage to="/pages">PAGES</LinksPage>
    </StyleLineMenu>
  );
}
export default LineMenu;
