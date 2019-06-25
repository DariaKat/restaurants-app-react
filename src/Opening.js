import React from "react";
import "./normalize.css";
import styled from "styled-components";

const StyleOpening = styled.section`
  font-family: "Sintony", sans-serif;
  background-color: rgba(94, 94, 94, 0.973);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100px;

  .container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .inner {
    color: black;
    text-align: center;
    display: flex;
    justify-content: space-around;
  }

  .item {
    max-width: 260px;
    padding: 0px 10px;
  }

  .hours {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px 10px 15px;
  }

  .title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    padding: 20px 10px 5px;
    font-weight: bold;
    font-style: italic;
    color: rgba(36, 36, 36, 0.973);
  }

  .text {
    font-size: 18px;
    line-height: 24px;
    color: #fea100;
    font-weight: bold;
    letter-spacing: 0.1px;
  }
`;

function Opening() {
  return (
    <StyleOpening>
      <div className="container">
        <div className="inner">
          <div className="item">
            <div className="hours">Opening hours</div>
          </div>
          <div className="item">
            <div className="title">Manday to Friday</div>
            <div className="text">10am-10pm</div>
          </div>
          <div className="item">
            <div className="title">Saturday to Sunday</div>
            <div className="text">09am-11pm</div>
          </div>
        </div>
      </div>
    </StyleOpening>
  );
}
export default Opening;
