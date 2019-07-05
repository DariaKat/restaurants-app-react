import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Icon({ name }) {
  return (
    <button
      onClick={food => {
        console.log(name);
      }}
    >
      <img src={`/images/${name}.png`} alt={name} />
      <p>{name}</p>
    </button>
  );
}
