import React from "react";
import styled from "styled-components";
import PriceEat from "./PriceEat";
import Icon from "./Icon";
import PropTypes from "prop-types";
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

  static propTypes = {
    item: PropTypes.string
  };

  static defaultProps = {
    item: "breakfast"
  };

  componentDidMount() {
    getMenuItems(this.props.item)
      .then(data => this.setState({ menu: data }))
      .catch(e => console.log(e));
  }

  componentWillReceiveProps(newProps) {
    getMenuItems(newProps.item)
      .then(data => this.setState({ menu: data }))
      .catch(e => console.log(e));
  }

  render() {
    const { menu } = this.state;
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
