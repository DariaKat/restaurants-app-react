import React from "react";
import styled from "styled-components";

const StyleContent = styled.div`
  position: absolute;

  a {
    text-decoration: none;
    display: inline-block;
  }

  div {
    font-family: "Sintony", sans-serif;
    font-size: 32px;
    color: rgb(151, 3, 3);
    font-weight: 700;
    padding-top: 170px;
    text-shadow: white 0 0 2px;
    height: 30px;
  }

  div > p {
    font-family: "Sintony", sans-serif;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  p:last-of-type {
    font-size: 42px;
  }

  div:nth-last-child(2) {
    padding-top: 210px;
    font-size: 18px;
    font-weight: 700;
    text-shadow: white 0 0 2px;
    color: rgb(151, 3, 3);
    margin-bottom: 10px;
  }

  a {
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
      <div>
        <p>Taste your fav dish </p>
        <p>from luxury restaurant.</p>
      </div>
      <div>Call us and book your table</div>
      <a href="tel:1008005006">1-008 005 006</a>
    </StyleContent>
  );
}
export default Content;
