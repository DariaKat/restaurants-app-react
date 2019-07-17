import React from "react";
import News from "./News";
import Social from "./Social";
import styled from "styled-components";

const StyleHlebNewsSoc = styled.div`
  margin: 0 400px;
  justify-content: center;
`;

function HlebNewsSoc() {
  return (
    <StyleHlebNewsSoc>
      <div>
        <News />
        <Social />
      </div>
    </StyleHlebNewsSoc>
  );
}

export default HlebNewsSoc;
