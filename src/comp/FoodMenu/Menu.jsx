import React from "react";
import styled from "styled-components";

const StyleMenu = styled.ul`
  height: 70px;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
  margin: 0px auto;
  background-position: center;
  margin: 20px 0px;
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0px 10px;
    margin: 0;
  }

  li {
    display: inline-block;
  }

  button {
    color: rgba(36, 36, 36, 0.973);
    padding: 10px 15px;
    font-family: "Sintony", sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
  }

  button:hover {
    color: #fea100;
  }
`;

class Menu extends React.Component {
  state = {
    active: 0
  };
  render() {
    return (
      <StyleMenu>
        <li>
          {listFood.map((place, index) => (
            <button
              key={index}
              onClick={() => {
                console.log("Clicked index " + index);
              }}
            >
              {place.name}
            </button>
          ))}
          <img src={this.props.img} />
          <p>{this.props.name}</p>
        </li>
      </StyleMenu>
    );
  }
}

const listFood = [
  {
    name: "all",
    img: "/images/all.png"
  },
  {
    name: "breakfast",
    img: "/images/break.png"
  },
  {
    name: "lunch",
    img: "/images/lunch.png"
  },
  {
    name: "snack",
    img: "/images/snaks.png"
  },
  {
    name: "pizza",
    img: "/images/Pizza.png"
  },
  {
    name: "soups",
    img: "/images/soups.png"
  },
  {
    name: "dinner",
    img: "/images/dinner.png"
  }
];

export default Menu;
