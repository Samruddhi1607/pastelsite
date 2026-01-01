import React from "react";
import "./Jewellery.css";

export default function BraceletPage() {
  const bracelets = [
    {
      img1: "https://www.giva.co/cdn/shop/files/BR0694_5.jpg?v=1737613391&width=713g",
      img2: "https://www.giva.co/cdn/shop/files/BR0694_1.jpg?v=1737613391&width=713",
      name: "Silver Zircon Ferns Bracelet",
      price: "₹6,799",
      rating: "⭐ 4.6"
    },
    {
      img1: "https://www.giva.co/cdn/shop/products/BR0107_3.jpg?v=1709273936&width=713",
      img2: "https://www.giva.co/cdn/shop/products/BR0107_1.jpg?v=1626169546&width=713",
      name: "Rose Gold Princess Bracelet",
      price: "₹5,890",
      rating: "⭐ 5.0"
    },
    {
      img1: "https://www.giva.co/cdn/shop/files/BR033_5.jpg?v=1747311585&width=713",
      img2: "https://www.giva.co/cdn/shop/files/BR033_3.jpg?v=1747311585&width=713",
      name: "Rose Gold Cylinder Bracelett",
      price: "₹6,599",
      rating: "⭐ 4.2"
    },
    {
      img1: "https://www.giva.co/cdn/shop/files/BR0958_5.jpg?v=1704880529&width=713",
      img2: "https://www.giva.co/cdn/shop/files/BR0958_3-min.jpg?v=1704880529&width=713",
      name: "Rose Gold Sparkle In Grace Bangle Bracelet",
      price: "₹7,300",
      rating: "⭐ 4.6"
    },
     {
      img1: "https://www.giva.co/cdn/shop/products/BR0475_5-min.jpg?v=1695205646&width=713",
      img2: "https://www.giva.co/cdn/shop/products/BR0475_3-min.jpg?v=1757571120&width=713g",
      name: "Silver Tales of Love Bracelet",
      price: "₹7,900",
      rating: "⭐ 4.8"
    },
     {
      img1: "https://www.giva.co/cdn/shop/files/BR0141_5.jpg?v=1714041724&width=713",
      img2: "https://www.giva.co/cdn/shop/files/BR0141_1.jpg?v=1714041724&width=713",
      name: "Rose Gold Deer Bracelet",
      price: "₹4,900",
      rating: "⭐ 4.4"
    }
    ,
     {
      img1: "https://www.giva.co/cdn/shop/files/BR0838_5.jpg?v=1690466829&width=713",
      img2: "https://www.giva.co/cdn/shop/files/BR0838_1.jpg?v=1690466829&width=713",
      name: "Golden Everlasting Infinity Bracelet",
      price: "₹2,399",
      rating: "⭐ 4.8"
    }
    , {
      img1: "https://www.giva.co/cdn/shop/files/BR01313_5.jpg?v=1764245093&width=713",
      img2: "https://www.giva.co/cdn/shop/files/BR01313_1.jpg?v=1764245093&width=713",
      name: "Triple Tone Auric Harmony Bracelet",
      price: "₹5,900",
      rating: "⭐ 4.2"
    }
    , {
      img1: "https://www.giva.co/cdn/shop/products/BR0480__5-min.jpg?v=1665665467&width=713",
      img2: "https://www.giva.co/cdn/shop/products/BR0480_3-min.jpg?v=1665665467&width=713",
      name: "Silver Shiny Leaf Bracelet",
      price: "₹7,900",
      rating: "⭐ 4.8"
    },
     {
      img1: "https://www.giva.co/cdn/shop/files/BR01067_5.jpg?v=1727354454&width=713",
      img2: "https://www.giva.co/cdn/shop/files/BR01067_3_f7203ef8-b2de-4f3a-b572-6c5601c2aaec.jpg?v=1728025629&width=713",
      name: "Rose Gold Mayuri Bracelet",
      price: "₹3,900",
      rating: "⭐ 4.1"
    },
     {
      img1: "https://www.giva.co/cdn/shop/files/BR01151_5.jpg?v=1737034503&width=713",
      img2: "https://www.giva.co/cdn/shop/files/BR01151_1.jpg?v=1737034503&width=713",
      name: "Silver Blush of Love Bracelet",
      price: "₹2,599",
      rating: "⭐ 4.8"
    },
     {
      img1: "https://www.giva.co/cdn/shop/products/BR0646_5.jpg?v=1709289164&width=713",
      img2: "https://www.giva.co/cdn/shop/products/BR0646_1-min.jpg?v=1672934968&width=713",
      name: "Rose Gold Dreamy Love HeartBracelet",
      price: "₹6,999",
      rating: "⭐ 4.8"
    }
  ];

  return (
    <div className="jewelry-page">
      <h1>Bracelets ✨</h1>
      <p>Charming bracelets crafted with elegance</p>

      <div className="jewelry-flex">
        {bracelets.map((item, index) => (
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
