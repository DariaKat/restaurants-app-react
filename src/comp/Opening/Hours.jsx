import React from "react";
import styled from "styled-components";
import TextOpen from "./TextOpen";
import TitleOpen from "./TitleOpen";
import Text from "./Text";

const StyleHours = styled.div`
  display: flex;
  justify-content: space-around;
`;

function Hours() {
  return (
    <StyleHours>
      <TextOpen />
      <TitleOpen />
      <Text />
    </StyleHours>
  );
}
export default Hours;
