import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const StylePriceEat = styled.div`
  width: 500px;

  span {
    font-size: 18px;
    font-weight: bolder;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    padding: 0px 10px;
    font-weight: bolder;
    color: rgba(56, 56, 56, 0.973);
  }

  span + span {
    margin-left: 10px;
    font-size: 18px;
    font-weight: bolder;
    padding-top: 25px;
    color: #fea100;
  }
`;

PriceEat.propTypes = {
  title: PropTypes.string.isRequired,
  ingridients: PropTypes.string,
  price: PropTypes.number,
  cash: PropTypes.string.isRequired
};

PriceEat.defaultProps = {
  ingridients: "Sorrian, brat, ne robit nash programmist",
  price: "money net, but dergites"
};

function PriceEat({ title, ingridients, price, cash }) {
  return (
    <StylePriceEat>
      <span>{title}</span>
      <span>{`${cash}${price}`}</span>
      <p>{ingridients}</p>
    </StylePriceEat>
  );
}

export default PriceEat;
