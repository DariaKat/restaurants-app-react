import React from "react";
import styled from "styled-components";

const StyleContent = styled.div`
  a {
    text-decoration: none;
    display: inline-block;
  }

  .title {
    font-family: "Sintony", sans-serif;
    font-size: 32px;
    color: rgb(151, 3, 3);
    font-weight: 700;
    padding-top: 170px;
    text-shadow: white 0 0 2px;
    height: 30px;
  }

  .title p {
    font-family: "Sintony", sans-serif;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .title-p {
    font-size: 42px;
  }

  .text {
    padding-top: 210px;
    font-size: 18px;
    font-weight: 700;
    text-shadow: white 0 0 2px;
    color: rgb(151, 3, 3);
    margin-bottom: 10px;
  }

  .phone {
    color: #fff;
    font-family: "Sintony", sans-serif;
    font-size: 24px;
    line-height: 18px;
    color: rgb(97, 0, 0);
    font-weight: 600;
  }
`;

function Content() {
  return (
    <StyleContent>
      <div className="title">
        <p className="title-p">Taste your fav dish </p>
        <p>from luxury restaurant.</p>
      </div>
      <div className="text">Call us and book your table</div>
      <a href="tel:1008005006" className="phone">
        1-008 005 006
      </a>
    </StyleContent>
  );
}
export default Content;
