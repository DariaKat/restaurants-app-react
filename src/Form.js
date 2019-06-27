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
  min-height: 400px;
  vertical-align: 40px;

  .title {
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

  .form-btn button {
    font-family: "Sintony", sans-serif;
    background-color: #fea100;
    color: #fff;
    line-height: 18px;
    margin: 15px;
    padding: 15px 28px 15px 28px;
    font-weight: 600;
    font-size: 14px;
    float: right;
    border: 1px solid transparent;
    border-radius: 5px;
    position: relative;
    height: fit-content;
  }

  .form-btn button:hover {
    border: 2px solid #ebca93;
  }

  margin: 0 auto;
  padding: 0 15px;
`;

function Form() {
  return (
    <StyleForm>
      <div className="title">Reserve your table</div>
      <Box />
      <div className="form-btn">
        <Button size="large">MAKE RESERVATION</Button>
      </div>
    </StyleForm>
  );
}

export default Form;
