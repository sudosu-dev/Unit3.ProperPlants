import { useState } from "react";
import Plants from "./components/Plants/Plants";
import Cart from "./components/Cart/Cart";
import PLANTS from "./data";

export default function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants plants={PLANTS} addToCart={addToCart} />
        <Cart
          addToCart={addToCart}
          cartList={cartList}
          subtractFromCart={subtractFromCart}
        />
      </main>
    </>
  );

  function addToCart(plant) {
    setCartList((prevCartList) => {
      const existingItem = prevCartList.find((item) => item.id === plant.id);

      if (existingItem) {
        return prevCartList.map((item) => {
          if (item.id === plant.id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...prevCartList, { ...plant, count: 1 }];
      }
    });
  }
  function subtractFromCart(plant) {
    setCartList((prevCartList) => {
      const existingItem = prevCartList.find((item) => item.id === plant.id);

      if (existingItem.count === 1) {
        return prevCartList.filter((item) => item.id !== plant.id);
      } else {
        // refactored if statement using ternary
        return prevCartList.map((item) =>
          item.id === plant.id ? { ...item, count: item.count - 1 } : item
        );
      }
    });
  }
}
