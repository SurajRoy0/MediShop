import React, { useContext, useState } from "react";
import classes from "./Item.module.css";
import Button from "../UI/Button";
import CartContext from "../../Store/cart-context";

const Item = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const onsubmitCartAmountHandler = () => {
    cartCtx.addItem({
      id: props.id,
      amount: +quantity,
      name: props.name,
      price: props.price,
    });
    setQuantity(1); // Reset quantity to 1 after adding to cart
  };

  const truncateDescription = (description, limit) => {
    if (description.length <= limit) {
      return description;
    }
    return description.slice(0, limit) + "...";
  };

  const truncatedDescription = truncateDescription(props.description, 35);

  return (
    <div className={classes["product-div"]} id={props.id}>
      <div className={classes["list-data"]}>
        <h2 className={classes["product-title"]}>{props.name}</h2>
        <div className={classes["list-actions"]}>
          <h2 className={classes["product-price"]}>₹{props.price}</h2>
          <div className={classes["quantity-input"]}>
            <input
              type="number"
              step="1"
              min="1"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>
          <button
            className={classes["add-button"]}
            onClick={onsubmitCartAmountHandler}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <p className={classes["product-description"]}>{truncatedDescription}</p>
    </div>
  );
};

export default Item;
