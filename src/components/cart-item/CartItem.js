import React from "react";

import "./cart-item.style.css";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img className="cart-item-img" src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name-tag">{name}</span>
        <h4 className="item-price">
          {" "}
          {quantity} x <span className="price-tag">${price}</span>
        </h4>
      </div>
    </div>
  );
};

export default CartItem;
