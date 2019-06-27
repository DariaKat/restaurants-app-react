import React from "react";
import styled from "styled-components";

const StylePriceEat = styled.div`
    width: 500px;

  .name {
    display: inline-block;
  }

  .title {
    font-size: 18px;
    font-weight: bolder;
  }

  .text {
    font-size: 14px;
    line-height: 20px;
    padding: 0px 10px;
    font-weight: bolder;
    color: rgba(56, 56, 56, 0.973);
  }

  .dol {
    float: right;
    font-size: 18px;
    font-weight: bolder;
    padding-top:25px;
    color: #fea100;
  }
`;

function PriceEat () {
  return (
    <StylePriceEat>
      <div className='name'>
        <div className='title'>
          Ultimate organic fruit salad
        </div>
        <div className='text'>
          survived not only five centuries but the leap
        </div>
      </div>
      <div className='dol'>
        $50.00
      </div>
      </StylePriceEat>
    )
}
export default PriceEat;