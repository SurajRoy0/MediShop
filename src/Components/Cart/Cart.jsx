import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const { items, addItem, removeItem, totalAmount } = useContext(CartContext);
  const orderButtonIsValid = items.length > 0;
  const portalElement = document.getElementById("cart");
  const subTotal = totalAmount.toFixed(2);

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.cartModal}>
          <div className={classes.cartContent}>
            <button
              onClick={props.onCartClose}
              className={classes.closeCartBtn}
            >
              Close Cart
            </button>
            <h2>Shopping Cart</h2>
            <ul className={classes.cartItems}>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onAdd={() => cartItemAddHandler(item)}
                  onRemove={() => cartItemRemoveHandler(item.id)}
                />
              ))}
            </ul>
            {orderButtonIsValid && (
              <div className={classes.order}>
                <h3>Subtotal ₹{subTotal}</h3>
                <button>Place Order</button>
              </div>
            )}
          </div>
        </div>,
        portalElement
      )}
    </>
  );
};

export default Cart;
