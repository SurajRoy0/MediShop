import React from "react";
import classes from "./CartItem.module.css";

const CartItem = ({ item, onAdd, onRemove }) => {
  return (
    <li className={classes.cartItem} key={item.id}>
      <div className={classes.itemInfo}>
        <span className={classes.itemName}>{item.name}</span>
        <span className={classes.itemPrice}>₹{item.price}</span>
        <span className={classes.itemQuantity}>x {item.amount}</span>
      </div>
      <div className={classes.btnContainer}>
        <button onClick={onRemove} className={classes.decreaseBtn}>
          -
        </button>
        <button onClick={onAdd} className={classes.increaseBtn}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
