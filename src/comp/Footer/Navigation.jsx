import React from "react";
import styled from "styled-components";
import LinksNavig from "./LinksNavig";

const StyleNavigation = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 20px;

  div {
    font-size: 18px;
    line-height: 28px;
    padding: 25px 5px 10px 0px;
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
      <div>Navigation</div>
      <li>
        <LinksNavig to="/home">Home</LinksNavig>
      </li>
      <li>
        <LinksNavig to="/menu">Menu</LinksNavig>
      </li>
      <li>
        <LinksNavig to="/reservation">Reservation</LinksNavig>
      </li>
      <li>
        <LinksNavig to="/recipe">Recipe</LinksNavig>
      </li>
      <li>
        <LinksNavig to="/blog">Blog</LinksNavig>
      </li>
      <li>
        <LinksNavig to="/contactus">Contact us</LinksNavig>
      </li>
    </StyleNavigation>
  );
}
export default Navigation;
