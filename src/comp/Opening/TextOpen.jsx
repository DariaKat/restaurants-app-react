import React from "react";
import styled from "styled-components";

const StyleTextOpen = styled.div`
  display: flex;

  justify-content: space-around;
  div {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
    margin: 25px 100px;
    padding: 15px 10px 15px;
  }
`;

function TextOpen() {
  return (
    <StyleTextOpen>
      <div>Opening hours</div>
    </StyleTextOpen>
  );
}

export default TextOpen;
