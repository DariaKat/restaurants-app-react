import React from "react";
import styled from "styled-components";
import BtnLink from "../Link";

const StyleBtn = styled.div`
  font-family: "Sintony", sans-serif;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
`;

function Btn() {
  return (
    <StyleBtn>
      <BtnLink to="/menu">EXPLOR FOOD MENU</BtnLink>
    </StyleBtn>
  );
}

export default Btn;
