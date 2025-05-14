import { useState } from "react";
import Plants from "./components/Plants/Plants.jsx";
import Cart from "./components/Cart/Cart.jsx";
import PLANTS from "./data.js";

export default function App() {
  const [cartArray, setCartArray] = useState([]);

  function addToCart(itemToAdd) {
    setCartArray((prevCartArray) => [...cartArray, itemToAdd]);
  }

  function removeFromCart(itemToRemove) {
    setCartArray((c) => c.filter((item) => item.id !== itemToRemove.id));
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants
          plants={PLANTS}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <Cart cartArray={cartArray} />
      </main>
    </>
  );
}
