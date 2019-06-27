import React from "react";
import "./normalize.css";
import styled from "styled-components";
import Content from "./comp/Slider/Content";

const StyleSlider = styled.section`
  background-image: url("/images/1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 500px;
  vertical-align: 40px;
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;
  position: relative;
`;

function Slider() {
  return (
    <StyleSlider>
      <Content />
    </StyleSlider>
  );
}
export default Slider;
