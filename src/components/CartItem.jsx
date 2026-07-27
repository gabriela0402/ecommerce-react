import React from "react";
import { TrashIcon } from "./Icons";

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
      </div>
      <div className="cart-buttons">
        <input
          type="text"
          value={item.quantity}
          onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
        />
        <button onClick={(e) => onRemoveFromCart(item)}>
          <TrashIcon size={15} />
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartItem;