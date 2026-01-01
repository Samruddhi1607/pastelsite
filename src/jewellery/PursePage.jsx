import React from "react";
import "./Jewellery.css";

export default function PursePage() {
  const purses = [
    {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20549024a.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20549024e.webp",
      name: "Elegant Embossed Shell Handbag Stylish Shoulder Purse for Everyday Chic(Blue)",
      price: "₹3,023",
      rating: "⭐ 4.6"
    },
    {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20548887a.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20548887f.webp",
      name: "Elegant Glossy Bow Shell Handbag Double Handle PU Tote for Daily Chic(Burgundy)",
      price: "₹2,889",
      rating: "⭐ 4.7"
    },
    {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20548942a.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/20548942e.webp",
      name: "Handbag | Stylish Vertical Square Tote with Zipper | Elegant Daily Bag for Office & Casual Use(Brown)",
      price: "₹4,360",
      rating: "⭐ 4.8"
    },
    {
      img1: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/092098/03/fnd/IND/fmt/png/PUMA-PLUSH-Women's-Trendy-Small-Handbag",
      img2: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/092098/03/mod02/fnd/IND/fmt/png/PUMA-PLUSH-Women's-Trendy-Small-Handbag",
      name: "PLUSH Women's Trendy Small Handbag",
      price: "₹1,900",
      rating: "⭐ 4.3"
    },
     {
      img1: "https://www.aldoshoes.in/on/demandware.static/-/Sites-aldo_master_catalog/default/dw5ad6adfb/large/nalayna252029_1.jpg",
      img2: "https://www.aldoshoes.in/on/demandware.static/-/Sites-aldo_master_catalog/default/dw7f2151e9/large/nalayna252029_2.jpg",
      name: "Women's Grey Bucket Bag",
      price: "₹7,199",
      rating: "⭐ 4.6"
    },
     {
      img1: "https://www.aldoshoes.in/on/demandware.static/-/Sites-aldo_master_catalog/default/dw730ab3a5/large/willamae101029_1.jpg",
      img2: "https://www.aldoshoes.in/on/demandware.static/-/Sites-aldo_master_catalog/default/dwa35af135/large/willamae101029_4.jpg",
      name: "Miscellaneous Cross Body Purse",
      price: "₹5,400",
      rating: "⭐ 4.9"
    },
     {
      img1: "https://www.aldoshoes.in/on/demandware.static/-/Sites-aldo_master_catalog/default/dw8b72e4e7/large/alola270029_1.jpg",
      img2: "https://www.aldoshoes.in/on/demandware.static/-/Sites-aldo_master_catalog/default/dwdb41af67/large/alola270029_2.jpg",
      name: "Women's Beige Top Handle",
      price: "₹5,999",
      rating: "⭐ 5"
    },
     {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18301552a.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18301552c.webp",
      name: " Simple Handheld Leather Shoulder Handbag (Beige)",
      price: "₹1,090",
      rating: "⭐ 4.3"
    },
     {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20548686e.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20548686c.webp",
      name: "Handbag with Zipper Closure Stylish Shoulder & Crossbody Bag with Cherry Charm (Beige)",
      price: "₹1,999",
      rating: "⭐ 4.3"
    },
     {
      img1: "https://m.media-amazon.com/images/I/71KCtnmOYXL._AC_SY695_.jpg",
      img2: "https://m.media-amazon.com/images/I/81+t6ezVN+L._AC_SY695_.jpg",
      name: "Crossbody Bag Soft Leather ",
      price: "₹2,080",
      rating: "⭐ 4.3"
    },
     {
      img1: "https://i.pinimg.com/originals/ed/ee/39/edee390694e5e9229046501077f61d17.jpg",
      img2: "https://tse2.mm.bing.net/th/id/OIP.l9xER3_9-ZiJT_SZMXAElAHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=181&h=181&c=7&dpr=1.5&o=7&rm=3",
      name: "https://tse2.mm.bing.net/th/id/OIP.l9xER3_9-ZiJT_SZMXAElAHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=181&h=181&c=7&dpr=1.5&o=7&rm=3e",
      price: "₹1,000",
      rating: "⭐ 4.3"
    },
     {
      img1: "https://medias.collectorsquare.com/images/products/416444/00pp-louis-vuitton-twist-small-model-shoulder-bag-in-black-patent-epi-leather.jpg",
      img2: "https://medias.collectorsquare.com/images/products/416444/D4-louis-vuitton-twist-small-model-shoulder-bag-in-black-patent-epi-leather.jpg",
      name: "Valisette BB shoulder bag in black Lather",
      price: "₹1,900",
      rating: "⭐ 4.3"
    },
  ];

  return (
    <div className="jewelry-page">
      <h1>Purses & Handbags 👜</h1>
      <p>Elegant bags crafted for modern luxury</p>

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
