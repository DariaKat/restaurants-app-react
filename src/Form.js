import React from "react";
import "./normalize.css";
import Button from "./comp/Button";
import styled from "styled-components";
import Box from "./comp/Form/Box";

const StyleForm = styled.section`
  background-image: url("/images/2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 300px;
  vertical-align: 40px;

  div {
    font-size: 32px;
    line-height: 28px;
    padding: 20px 10px 5px;
    font-weight: bolder;
    text-align: center;
    text-shadow: white 0 0 2px;
    color: black;
  }

  .form-btn {
    display: flex;
    justify-content: space-around;
  }

  margin: 0 auto;
  padding: 0 15px;
`;

function Form() {
  return (
    <StyleForm>
      <div>Reserve your table</div>
      <Box />
      <div className="form-btn">
        <Button size="large">MAKE RESERVATION</Button>
      </div>
    </StyleForm>
  );
}

export default Form;
