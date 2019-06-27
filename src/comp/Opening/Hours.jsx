import React from "react";
import styled from "styled-components";

const StyleHours = styled.div`
  display: flex;
  margin: 0px 100px;
  justify-content: space-around;
  .hours {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
    margin: 20px 100px;
    padding: 10px 10px 15px;
  }

  .title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    margin: 0px 100px;
    padding: 20px 10px 5px;
    font-weight: bold;
    font-style: italic;
    color: rgba(36, 36, 36, 0.973);
  }

  .text {
    font-size: 18px;
    line-height: 24px;
    margin: 0px 100px;
    color: #fea100;
    font-weight: bold;
    letter-spacing: 0.1px;
  }
`;

function Hours() {
  return (
    <StyleHours>
      <div>
        <div className="hours">Opening hours</div>
      </div>
      <div>
        <div className="title">Manday to Friday</div>
        <div className="text">10am-10pm</div>
      </div>
      <div>
        <div className="title">Saturday to Sunday</div>
        <div className="text">09am-11pm</div>
      </div>
    </StyleHours>
  );
}
export default Hours;
