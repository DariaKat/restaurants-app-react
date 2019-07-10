import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StyleLinksNavig = styled(Link)`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 100;
  color: rgb(194, 194, 194);
  text-decoration: none;
`;

function LinksNavig({ to, children }) {
  return <StyleLinksNavig to={to}>{children}</StyleLinksNavig>;
}

export default LinksNavig;
