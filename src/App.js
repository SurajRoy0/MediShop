import "./App.css";
import Form from "./Components/Inputs/Form";
import List from "./Components/Output/List";
import Header from "./Components/Layout/Header";
import MedicineProvider from "./Store/MedicineProvider";
import CartProvider from "./Store/CartProvider";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
function App() {

  const [isCartOpen, setCartOpen] = useState(false);
  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };


  return (
    <MedicineProvider>
      <CartProvider>
        {isCartOpen && <Cart onCartClose={closeCart} />}
        <Header onCartOpen={openCart} />
        <Form />
        <List />
      </CartProvider>
    </MedicineProvider>
  );
}

export default App;
