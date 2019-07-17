import React from "react";
import styled from "styled-components";

const StyleTitle = styled.section`
  font-size: 24px;
  line-height: 28px;
  padding: 20px 10px 5px;
  font-weight: bolder;
  text-align: center;
  color: rgba(36, 36, 36, 0.973);
`;
function Title() {
  return (
    <StyleTitle>
      <div>Food Menu</div>
    </StyleTitle>
  );
}

export default Title;
