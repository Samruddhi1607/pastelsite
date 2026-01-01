import React from "react";
import "./Jewellery.css";

export default function NecklacePage() {
  const necklaces = [
    {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20726509a.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20726509d.webp",
      name: "Gold Necklace",
      price: "₹8,500",
      rating: "⭐ 4.6"
    },
    {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18804326a.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18804326c.webp",
      name: "Seaside Gold Plated Pink AD & Beads Studded Choker Necklace Set",
      price: "₹5,000",
      rating: "⭐ 4.4"
    },
    {
      img1: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20726653a.webp",
      img2: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20726653d.webp",
      name: "Gold Plated Pink AD Necklace Set",
      price: "₹5,200",
      rating: "⭐ 4.3"
    },
    {
      img1: "https://tse1.mm.bing.net/th/id/OIP.Wo9G5aDdYA9_yvMHEU832AHaHc?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=178&h=179&c=7&dpr=1.5&o=7&rm=3",
      img2: "https://tse1.mm.bing.net/th/id/OIP.xbY6nWe6BaESoNV58ysDsQHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=178&h=178&c=7&dpr=1.5&o=7&rm=3",
      name: "Pearl Necklace",
      price: "₹9,800",
      rating: "⭐ 4.8"
    },
    {
      img1: "https://g.sdlcdn.com/imgs/k/a/z/Sukkhi-Alloy-Golden-Traditional-Necklaces-SDL667282579-3-81576.jpeg",
      img2: "https://g.sdlcdn.com/imgs/k/a/z/Sukkhi-Alloy-Golden-Traditional-Necklaces-SDL667282579-4-28622.jpeg",
      name: "Gold Alloy Necklace Se",
      price: "₹10,200",
      rating: "⭐ 5"
    },
    {
      img1: "https://g.sdlcdn.com/imgs/k/2/5/Rhosyn-Silver-Alloy-Necklace-Pack-SDL070188157-4-b21d2.jpgp",
      img2: "https://g.sdlcdn.com/imgs/k/2/5/Rhosyn-Silver-Alloy-Necklace-Pack-SDL070188157-3-9957d.jpg",
      name: "Silver Alloy Necklace",
      price: "₹5,500",
      rating: "⭐ 4.3"
    },
    {
      img1: "https://g.sdlcdn.com/imgs/k/7/k/MGSV-Gold-Brass-Necklace-Set-SDL553248429-1-76d78.jpg",
      img2: "https://g.sdlcdn.com/imgs/k/7/k/MGSV-Gold-Brass-Necklace-Set-SDL553248429-2-681c2.jpeg",
      name: "Gold Brass Necklace Set",
      price: "₹8,200",
      rating: "⭐ 4.7"
    },
    {
      img1: "https://g.sdlcdn.com/imgs/k/2/8/ROFARWORD-Gold-Brass-Necklace-Set-SDL091777007-1-5ceb5.jpg",
      img2: "https://g.sdlcdn.com/imgs/k/2/8/ROFARWORD-Gold-Brass-Necklace-Set-SDL091777007-3-10be5.jpg",
      name: "Gold  Necklace Set",
      price: "₹6,200",
      rating: "⭐ 4.4"
    },
    {
      img1: "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240206/a7ph/65c263bb8cdf1e0df5ef3093/-473Wx593H-467047798-gold-MODEL.jpg",
      img2: "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240206/jHSk/65c263bb8cdf1e0df5ef3018/-473Wx593H-467047798-gold-MODEL3.jpg",
      name: "Stone-Studded Necklace & Earrings Set",
      price: "₹2,200",
      rating: "⭐ 4.8"
    },
    {
      img1: "https://i.etsystatic.com/28990845/r/il/ca222b/5075216097/il_1588xN.5075216097_7nnl.jpg",
      img2: "https://i.etsystatic.com/28990845/r/il/3cba60/5075216431/il_1588xN.5075216431_gt96.jpg",
      name: "AD necklace set",
      price: "₹6,460",
      rating: "⭐ 4.3"
    },
    {
      img1: "https://i.etsystatic.com/60958403/r/il/98d9e8/7236889617/il_1588xN.7236889617_gus7.jpg",
      img2: "https://i.etsystatic.com/60958403/r/il/e99b7e/7188910076/il_1588xN.7188910076_aefx.jpg",
      name: "Gold Tiny Pearl Necklace",
      price: "₹2,200",
      rating: "⭐ 4.9"
    },
    {
      img1: "https://i.etsystatic.com/26938462/r/il/518628/5113642272/il_1588xN.5113642272_3kri.jpg",
      img2: "https://i.etsystatic.com/26938462/r/il/dcba41/6032874747/il_1588xN.6032874747_dewu.jpg",
      name: "Gold teardrop flower choker necklace",
      price: "₹1,200",
      rating: "⭐ 5"
    },
  ];

  return (
    <div className="jewelry-page">
      <h1>Necklaces ✨</h1>
      <p>Elegant designs for every occasion</p>

      <div className="jewelry-flex">
        {necklaces.map((item, index) => (
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
