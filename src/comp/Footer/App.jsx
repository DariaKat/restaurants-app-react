import React from "react";
import styled from "styled-components";

const StyleApp = styled.div`
  padding: 20px 40px 10px 0px;

  div {
    font-size: 18px;
    line-height: 28px;
    padding: 20px 5px 0px 0px;
    font-weight: 600;
    color: white;
  }

  a.appstore {
    background-image: url("/images/appstore2.png");
    width: 222px;
    height: 63px;
  }

  a.googleplay {
    background-image: url("/images/googleplay2.png");
    width: 222px;
    height: 63px;
  }
`;

function App() {
  return (
    <StyleApp>
      <div>Our app avilable</div>
      <div>
        <a href="#" className="appstore" />
      </div>
      <a href="#" className="googleplay" />
    </StyleApp>
  );
}

export default App;
