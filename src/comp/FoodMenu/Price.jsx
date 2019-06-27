import React from "react";
import styled from "styled-components";
import PriceEat from "./PriceEat";

const StylePrice = styled.div`
    .price {
    display: inline-block;
    display: flex;
    justify-content: space-around;
  }

`;

function Price () {
  return (
    <StylePrice>
     <div className="price">
        <div className="price-left">
          <PriceEat />
          <PriceEat />
          <PriceEat />
          <PriceEat />
        </div>
        <div className="price-right">
          <PriceEat />
          <PriceEat />
          <PriceEat />
          <PriceEat />
        </div>
      </div>
      </StylePrice>
    )
}
export default Price;