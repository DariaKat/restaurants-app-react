import React from "react";
import styled from "styled-components";
import UrlInput from "../UrlInput";

const StyleBox = styled.form`
  display: inline-block;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 0 auto;
  width: 800px;

  div {
    display: inline-block;
    padding: 5px;

    width: 300px;
  }
`;

function Box() {
  return (
    <StyleBox>
      <div>
        <UrlInput name="Name*" size="large" type="text" />

        <UrlInput name="Time*" size="large" type="text" />

        <UrlInput name="Guests*" size="large" type="text" />
      </div>

      <div>
        <UrlInput name="Email*" size="large" type="text" />

        <UrlInput name="Date*" size="large" type="data" />

        <UrlInput name="Phone*" size="large" type="text" />
      </div>
    </StyleBox>
  );
}

export default Box;
