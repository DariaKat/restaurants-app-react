import React from "react";
import styled from "styled-components";

const StyleText = styled.div`
  justify-content: space-around;

  div {
    font-size: 18px;
    line-height: 24px;
    margin: 0px 100px;
    color: #fea100;
    font-weight: bold;
    letter-spacing: 0.1px;
    display: flex;
    margin: 18px 100px 25px;
    justify-content: space-around;
  }
`;

function Text() {
  return (
    <StyleText>
      <div>10am-10pm</div>
      <div>09am-11pm</div>
    </StyleText>
  );
}
export default Text;
