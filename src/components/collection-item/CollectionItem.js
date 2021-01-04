import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.css";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="item">
      <div className="img" style={{ backgroundImage: `url(${imageUrl})` }} />
      <h2 className="item-name">{name}</h2>
      <span className="price">${price}</span>
      <span className="shop-icon" onClick={() => addItem(item)}>
        SHOP <i className="fas fa-shopping-bag"></i>
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
