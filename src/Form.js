import React from "react";
import "./normalize.css";

import styled from "styled-components";

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

  .box {
    display: inline-block;
    display: flex;
    justify-content: space-around;
  }

  .box form {
    width: 800px;
  }

  .box-left {
    display: inline-block;
    padding: 10px;
    margin: 20px;
    width: 300px;
  }

  .box-left input {
    padding: 10px 100px 10px 10px;
    margin: 5px 0px;
  }

  .box-div {
    margin: 10px;
    font-family: "Sintony", sans-serif;
    font-size: 16px;
  }

  .box-right {
    display: inline-block;
    padding: 10px;
    margin: 20px;
    width: 300px;
    /*float: right;*/
  }

  .box-right input {
    padding: 10px 100px 10px 10px;
    margin: 5px 0px;
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

  .container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;

function Form() {
  return (
    <StyleForm>
      <div className="container">
        <div className="inner">
          <div className="content">
            <div className="title">Reserve your table</div>
            <div className="box">
              <form>
                <div className="box-inner">
                  <div className="box-left">
                    <div className="box-div">
                      <input type="text" name="Name" placeholder="Name*" />
                    </div>
                    <div className="box-div">
                      <input type="text" name="Time" placeholder="Time*" />
                    </div>
                    <div className="box-div">
                      <input type="text" name="Guests" placeholder="Guests*" />
                    </div>
                  </div>

                  <div className="box-right">
                    <div className="box-div">
                      <input type="text" name="Email" placeholder="Email" />
                    </div>
                    <div className="box-div">
                      <input type="text" name="Date" placeholder="Date*" />
                    </div>
                    <div className="box-div">
                      <input type="text" name="Phone" placeholder="Phone*" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="form-btn">
              <button>MAKE RESERVATION</button>
            </div>
          </div>
        </div>
      </div>
    </StyleForm>
  );
}

export default Form;
