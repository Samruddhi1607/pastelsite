import React from "react";
import "./Jewellery.css";

export default function PerfumePage() {
  const purses = [
    {
      img1: "https://cdn.shopify.com/s/files/1/0609/6096/4855/files/SLIDE1_7.jpg?v=1764858233&width=1080&q=90",
      img2: "https://cdn.shopify.com/s/files/1/0609/6096/4855/files/SLIDE3_7.jpg?v=1764858233&width=1080&q=90",
      name: "Valley of Flowers Perfum",
      price: "₹1,800",
      rating: "⭐ 4.6"
    },
    {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19995715a.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19995715b.webp",
      name: "Aris Eau De Parfum - Venus, 100ml",
      price: "₹1,169",
      rating: "⭐ 4.4"
    },
    {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19995714a.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19995714b.webp",
      name: "ARIS Aris Eau De Parfum - Crystal, 100ml",
      price: "₹1,100",
      rating: "⭐ 4.8"
    },
    {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19995712a.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19995712b.webp",
      name: "Aris Eau De Parfum - Blue Blonde, 100ml",
      price: "₹1,500",
      rating: "⭐ 4.3"
    },
     {
    
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19718859d.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19718859a.webp",
      name: "Nude Long Lasting Everyday Floral Scent Eau De Parfum Spray For Women - 100 Ml",
      price: "₹2,790",
      rating: "⭐ 4.3"
    },
  ];

  return (
    <div className="jewelry-page">
       <h1>Luxury Perfumes 🌸</h1>
      <p>Signature fragrances crafted for timeless elegance</p>

      <div className="jewelry-flex">
        {purses.map((item, index) => (
          <div className="jewelry-card" key={index}>

            <div className="img-wrapper">
              <img src={item.img1} className="img-main" alt={item.name} />
              <img src={item.img2} className="img-hover" alt={item.name} />
              <button className="cart-btn">Add to Cart</button>
            </div>

            <div className="card-info">
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
              <div className="rating">{item.rating}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
