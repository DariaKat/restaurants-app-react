import React from "react";
import "./normalize.css";
import styled from "styled-components";
import Content from "./comp/Slider/Content";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const StyleSlider = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100px;
  vertical-align: 40px;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const content = [
  { description: "proprammistu ploho", url: "./images/4.jpg" },
  { description: "proprammistu ploho", url: "./images/2.jpg" },
  { description: "proprammistu ploho", url: "./images/6.jpg" }
];

class Slide extends React.Component {
  render() {
    return (
      <StyleSlider>
        <Content />
        <Slider>
          {content.map((article, index) => (
            <div key={index}>
              <img src={article.url} alt={article.description} />
            </div>
          ))}
        </Slider>
      </StyleSlider>
    );
  }
}
export default Slide;
