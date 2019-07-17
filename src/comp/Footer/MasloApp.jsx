import React from "react";
import App from "./App";
import styled from "styled-components";
import KolbasaNavig from "./KolbasaNavig";
import HlebNewsSoc from "./HlebNewsSoc";

const StyleMasloApp = styled.div`
  width: 100%;
  display: flex;
`;

function MasloApp() {
  return (
    <StyleMasloApp>
      <KolbasaNavig />
      <HlebNewsSoc />
      <div>
        <App />
      </div>
    </StyleMasloApp>
  );
}

export default MasloApp;
