import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const StyleKolbasaNavig = styled.div`
  margin: 15px 100px;
`;

function KolbasaNavig() {
  return (
    <StyleKolbasaNavig>
      <Navigation />
    </StyleKolbasaNavig>
  );
}

export default KolbasaNavig;
