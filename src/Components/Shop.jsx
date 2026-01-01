// Shop.jsx
import React from "react";
import "./Shop.css";

const products = [
  { id: 1, name: "Golden Ring", price: "$49", img: "ring.jpg", category: "rings" },
  { id: 2, name: "Diamond Necklace", price: "$199", img: "necklace.jpg", category: "necklaces" },
  { id: 3, name: "Silver Bracelet", price: "$79", img: "bracelets.jpg", category: "bracelets" },
  // add more products here
];

const Shop = () => {
  return (
    <div className="shop-page">
      <h2>Our Jewellery Collection</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
