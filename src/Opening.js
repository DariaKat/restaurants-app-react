import React from "react";
import "./normalize.css";
import styled from "styled-components";
import Hours from "./comp/Opening/Hours";

const StyleOpening = styled.section`
  font-family: "Sintony", sans-serif;
  background-color: rgba(94, 94, 94, 0.973);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100px;
  color: black;
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

function Opening() {
  return (
    <StyleOpening>
      <Hours />
    </StyleOpening>
  );
}
export default Opening;
