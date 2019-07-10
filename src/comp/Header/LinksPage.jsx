import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StyleLinksPage = styled(Link)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

function LinksPage({ to, children }) {
  return <StyleLinksPage to={to}>{children}</StyleLinksPage>;
}

export default LinksPage;
