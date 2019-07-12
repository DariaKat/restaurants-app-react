import React from "react";
import styled from "styled-components";

const StyleTitleOpen = styled.div`
  div {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    padding: 20px 10px 5px;
    font-weight: bold;
    font-style: italic;
    color: rgba(36, 36, 36, 0.973);
    display: flex;
  }
`;

function TitleOpen() {
  return (
    <StyleTitleOpen>
      <div>Monday to Friday</div>
      <div>Saturday to Sunday</div>
    </StyleTitleOpen>
  );
}

export default TitleOpen;
