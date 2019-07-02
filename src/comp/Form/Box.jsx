import React from "react";
import styled from "styled-components";

const StyleBox = styled.form`
  display: inline-block;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 0 auto;
  width: 800px;

  .left {
    display: inline-block;
    padding: 10px;
    margin: 20px;
    width: 300px;
  }

  .left input {
    padding: 10px 100px 10px 10px;
    margin: 5px 0px;
  }

  .div {
    margin: 10px;
    font-family: "Sintony", sans-serif;
    font-size: 16px;
  }

  .right {
    display: inline-block;
    padding: 10px;
    margin: 20px;
    width: 300px;
  }

  .right input {
    padding: 10px 100px 10px 10px;
    margin: 5px 0px;
  }
`;

function Box() {
  return (
    <StyleBox>
      <div className="inner">
        <div className="left">
          <div className="div">
            <input type="text" name="Name" placeholder="Name*" />
          </div>
          <div className="div">
            <input type="text" name="Time" placeholder="Time*" />
          </div>
          <div className="div">
            <input type="text" name="Guests" placeholder="Guests*" />
          </div>
        </div>

        <div className="right">
          <div className="div">
            <input type="text" name="Email" placeholder="Email" />
          </div>
          <div className="div">
            <input type="text" name="Date" placeholder="Date*" />
          </div>
          <div className="div">
            <input type="text" name="Phone" placeholder="Phone*" />
          </div>
        </div>
      </div>
    </StyleBox>
  );
}

export default Box;
