import React from "react";
import styled from "styled-components";
import PriceEat from "./PriceEat";
import getMenuItems from "../../api/get-menu-items";

const StylePrice = styled.div`
  .price {
    display: inline-block;
    display: flex;
    justify-content: space-around;
  }
`;

class Price extends React.Component {
  state = {
    menu: []
  };

  componentDidMount() {
    // getMenuItems("lunch")
    //   .then(data => console.log(data))
    //   .catch(e => console.log(e));
  }

  render() {
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
    );
  }
}

export default Price;
