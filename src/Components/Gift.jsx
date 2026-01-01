import React from "react";
import "./Gift.css";

export default function Gift() {
  return (
    <div className="gift-container">

      <h1 className="gift-title">Perfect Gift Ideas 🎁</h1>
      <p className="gift-subtitle">Handpicked luxury gifts for your special moments.</p>

      <div className="gift-grid">

        {/* CARD 1 */}
        <div className="gift-card fade-in">
          <div className="side-line"></div>

          <div className="gift-img-dual">
            <img src="https://www.giva.co/cdn/shop/products/PD01374_1-min.jpg?v=1663852433&width=1946" className="img-front" />
            <img src="https://www.giva.co/cdn/shop/products/PD01374_5-min.jpg?v=1678959012&width=713" className="img-back" />
          </div>

          <h2 className="gift-card-title">For Her</h2>
          <p className="gift-card-text">Elegant jewellery pieces she will love.</p>

          <div className="gift-bottom">
            <span className="fav-icon">❤️</span>
            <span className="small-tag gold-ribbon">Premium Pick ✨</span>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="gift-card fade-in">
          <div className="side-line"></div>

          <div className="gift-img-dual">
            <img src="https://www.giva.co/cdn/shop/files/ER0141_1.jpg?v=1747309897&width=713" className="img-front" />
            <img src="https://www.giva.co/cdn/shop/files/ER0141_5.jpg?v=1747309897&width=713" className="img-back" />
          </div>

          <h2 className="gift-card-title">For Her </h2>
          <p className="gift-card-text">Stylish Earring for Her.</p>

          <div className="gift-bottom">
            <span className="fav-icon">💙</span>
            <span className="small-tag gold-ribbon">Top Choice ⭐</span>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="gift-card fade-in">
          <div className="side-line"></div>

          <div className="gift-img-dual">
            <img src="https://a.cdnsbn.com/images/products/l/19330180906.jpg" className="img-front" />
            <img src="https://a.cdnsbn.com/images/products/l/19330180906-1.jpg" className="img-back" />
          </div>

          <h2 className="gift-card-title">Perfume</h2>
          <p className="gift-card-text">vanilla fragrance for Modern Her</p>

          <div className="gift-bottom">
            <span className="fav-icon">💖</span>
            <span className="small-tag gold-ribbon">Best Seller 💫</span>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="gift-card fade-in">
          <div className="side-line"></div>

          <div className="gift-img-dual">
            <img src="https://www.giva.co/cdn/shop/files/R01506_1.jpg?v=1710418558&width=713" className="img-front" />
            <img src="https://www.giva.co/cdn/shop/files/R01506_5.jpg?v=1710418558&width=713" className="img-back" />
          </div>

          <h2 className="gift-card-title">Ring</h2>
          <p className="gift-card-text">Silver Midnight Glitter Ring</p>

          <div className="gift-bottom">
            <span className="fav-icon">💛</span>
            <span className="small-tag gold-ribbon">Limited Edition 🔥</span>
          </div>
        </div>

      </div>
    </div>
  );
}
