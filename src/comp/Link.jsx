import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { link } from "fs";

const StyleLink = styled(Link)`
  font-family: "Sintony", sans-serif;
  background-color: #fea100;
  color: #fff;
  line-height: 18px;
  font-size: 14px;
  font-weight: 600;
  float: right;
  border: 1px solid transparent;
  border-radius: 5px;
  position: relative;
  height: fit-content;
  margin: 15px;
  text-decoration: none;
  padding: 15px 28px 15px 28px;
  :hover {
    border-color: #fff;
  }
`;

BtnLink.propTypes = {
  children: PropTypes.string
};

BtnLink.defaultProps = {
  children: "Link"
};

function BtnLink({ children, to }) {
  return <StyleLink to={to}>{children}</StyleLink>;
}

export default BtnLink;
