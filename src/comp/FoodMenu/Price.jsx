import React from "react";
import styled from "styled-components";
import PriceEat from "./PriceEat";
import Menu from "./Menu";
import getMenuItems from "../../api/get-menu-items";

const StylePrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

class Price extends React.Component {
  state = {
    menu: []
  };

  componentDidMount() {
    getMenuItems("lunch")
      .then(data => this.setState({ menu: data }))
      .catch(e => console.log(e));
  }

  render() {
    const { menu } = this.state;
    console.log(this.props.food || "Все еще не работает");
    return (
      <StylePrice>
        {menu.map(({ id, name, ingridients, price, cash }) => (
          <PriceEat
            key={id}
            title={name}
            ingridients={ingridients}
            price={price}
            cash={cash}
          />
        ))}
      </StylePrice>
    );
  }
}

export default Price;
