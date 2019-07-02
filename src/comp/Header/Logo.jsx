import React from "react";
import styled from "styled-components";

const StyleLogo = styled.a`
  margin: 0px 20px;
  padding: 0px 10px;
`;

function Logo() {
  return (
    <StyleLogo href="#">
      <img src="/images/logo.png" />
    </StyleLogo>
  );
}

export default Logo;
