import "./Cart.css";

export default function Cart({ addToCart, cartList, subtractFromCart }) {
  if (!cartList || cartList.length === 0) {
    return (
      <section className="cart">
        <h3>Cart</h3>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="cart">
      <h3>Cart</h3>
      <ul>
        {cartList.map((plant) => (
          <li key={plant.id} className="cart-item">
            <div>
              {plant.image}
              {plant.name}
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => subtractFromCart(plant)}>-</button>
              <span>{plant.count}</span>
              <button onClick={() => addToCart(plant)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
