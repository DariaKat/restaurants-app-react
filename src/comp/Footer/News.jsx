import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyleNews = styled.div`
  .email {
    margin: 10px 0px 0px 0px;
  }

  .text {
    font-size: 18px;
    line-height: 28px;
    padding: 30px 5px 10px 0px;
    font-weight: 600;
    color: white;
  }

  .email-text {
    font-size: 16px;
    line-height: 20px;
    font-weight: 100;
    color: rgb(194, 194, 194);
  }

  input {
    padding: 10px 90px 10px 10px;
    margin: 5px 0px;
  }
`;

function News() {
  return (
    <StyleNews>
      <div>
        <div className="text">News letter</div>
        <div className="email">
          <div className="email-text">
            Enter your email address and subscribe daily newsletter
          </div>
          <input type="text" name="EmailAddress" placeholder="Email Address" />
          <Button size="small">SUBSCRIBE</Button>
        </div>
      </div>
    </StyleNews>
  );
}
export default News;
