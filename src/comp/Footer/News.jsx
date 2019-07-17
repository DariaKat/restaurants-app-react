import React from "react";
import styled from "styled-components";
import Button from "../Button";
import UrlInput from "../UrlInput";

const StyleNews = styled.div`
  margin: 10px 0px 0px 0px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 100;
  color: rgb(194, 194, 194);

  div:nth-last-child(2) {
    font-size: 18px;
    line-height: 28px;
    padding: 30px 5px 10px 0px;
    font-weight: 600;
    color: white;
  }
`;

function News() {
  return (
    <StyleNews>
      <div>
        <div>News letter</div>
        <div>
          <div>Enter your email address and subscribe daily newsletter</div>
          <UrlInput name="Email Address" size="small" type="text" />
          <Button size="small">SUBSCRIBE</Button>
        </div>
      </div>
    </StyleNews>
  );
}

export default News;
