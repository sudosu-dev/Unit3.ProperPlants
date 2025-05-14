import "./Plants.css";

export default function Plants({ plants, addToCart, removeFromCart }) {
  return (
    <section>
      <h2>Plants</h2>
      <ul className="plants">
        {plants.map((plant) => (
          <li key={plant.id} className="plant">
            <figure>{plant.image}</figure>
            <h3>{plant.name}</h3>
            <button onClick={() => addToCart(plant)}>Add to cart</button>
            <button onClick={() => removeFromCart(plant)}>
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
