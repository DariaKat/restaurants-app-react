import React from "react";
import PropTypes from "prop-types";

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

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
