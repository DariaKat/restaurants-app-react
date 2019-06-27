import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyleButton = styled.button`
  font-family: "Sintony", sans-serif;
  background-color: #fea100;
  color: #fff;
  line-height: 18px;
  font-size: 14px;
  font-weight: 600;
  float: right;
  border: 1px solid transparent;
  border-radius: 5px;
  position: relative;
  height: fit-content;

  :hover {
    border-color: #fff;
  }
  margin: ${props => (props.size === "small" ? "5px" : "15px")};
  padding: ${props =>
    props.size === "small" ? "10px 20px" : "15px 28px 15px 28px"};
`;

Button.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.string
};

Button.defaultProps = {
  children: "Button"
};

function Button({ size, children }) {
  return <StyleButton size={size}>{children}</StyleButton>;
}

export default Button;
