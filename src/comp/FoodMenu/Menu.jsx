import React from "react";
import styled from "styled-components";
import {
  IconAll,
  IconBreak,
  IconLunch,
  IconSnack,
  IconPizza,
  IconSoups,
  IconDinner
} from "./Icon";

const StyleMenu = styled.ul`
  height: 70px;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
  margin: 0px auto;
  background-position: center;
  margin: 20px 0px;

  p {
    padding: 0px 10px;
    margin: 0;
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
  render() {
    return (
      <StyleMenu>
        <IconAll />
        <IconBreak />
        <IconLunch />
        <IconSnack />
        <IconPizza />
        <IconSoups />
        <IconDinner />
      </StyleMenu>
    );
  }
}

export default Menu;
