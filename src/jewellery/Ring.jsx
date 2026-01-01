import React from "react";
import "./Jewellery.css";

export default function RingPage() {
  const rings = [
    {
      img1: "https://media.istockphoto.com/id/1294270467/photo/close-up-shoot-of-gold-ring-with-beautiful-sparkling-diamond-beads.jpg?s=612x612&w=0&k=20&c=9IwrfxilCmPAoIYcOGez199wBKLolodB53bsbEI1kEQ=",
      img2: "https://media.istockphoto.com/id/1294271237/photo/close-up-shoot-of-gold-ring-with-beautiful-sparkling-diamond-beads.jpg?s=612x612&w=0&k=20&c=Ibrtt2RRRWQl5qzmdIPIjBNFuFvm3Rbf-KoK5kQTHGc=",
      name: "Rose Gold Ring",
      price: "₹2,500",
      rating: "⭐ 4.5"
    },
    {
      img1: "https://media.istockphoto.com/id/1133580071/photo/gold-diamond-ring.jpg?s=612x612&w=0&k=20&c=rz3h9SmWUcewwwj5TjvH_Ejs6uKY_T9zyd0tYeeYPQs=",
      img2: "https://media.istockphoto.com/id/1133580304/photo/diamond-ring.jpg?s=612x612&w=0&k=20&c=P_wBJT8iBLD2V0fZbNLa_mzp7U4Id58QjPE2XNSS2vI=",
      name: "Diamond Ring",
      price: "₹4,500",
      rating: "⭐ 5.0"
    },
    {
      img1: "https://images.unsplash.com/photo-1621438872240-d30f55aaa59c?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://media.istockphoto.com/id/956676504/photo/close-up-luxury-wedding-diamond-ring-in-jewelry-gift-box.webp?a=1&s=612x612&w=0&k=20&c=CvOMe-IV8JEh1SMat7a7ks7wPlNhsIG5l2AnU_M43sA=",
      name: "Silver Ring",
      price: "₹1,800",
      rating: "⭐ 4.2"
    },
    {
      img1: "https://rukminim2.flixcart.com/image/300/300/xif0q/ring/o/s/z/adjustable-1-dr-102-ring-devora-original-imagrfwjw5p7jskn.jpeg?q=90",
      img2: "https://tse4.mm.bing.net/th/id/OIP.2fp-AA2iOu6-m_QAGy0YLgHaIf?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=178&h=203&c=7&dpr=1.5&o=7&rm=3",
      name: "Silver Ring",
      price: "₹2,000",
      rating: "⭐ 4.8"
    },
    {
      img1: "https://tse4.mm.bing.net/th/id/OIP.4z6ixyZXNFE9mizD2rtzzAHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=178&h=178&c=7&dpr=1.5&o=7&rm=3",
      img2: "https://tse3.mm.bing.net/th/id/OIP.cIG3ag8tYTX8akx8K4SWEwAAAA?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=178&h=141&c=7&dpr=1.5&o=7&rm=3",
      name: "Rose Gold Ring",
      price: "₹3,500",
      rating: "⭐ 4.2"
    },
    {
      img1: "https://tse3.mm.bing.net/th/id/OIP.K612hP_2ZESmDuvHFwbvAAHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=181&h=181&c=7&dpr=1.5&o=7&rm=3",
      img2: "https://th.bing.com/th/id/OIP.7UyKJZCfIOkyrOk4vMwtQQHaHa?w=187&h=187&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
      name: "Gold Ring",
      price: "₹2,000",
      rating: "⭐ 4.5"
    },
    {
      img1: "https://www.brides.com/thmb/OBuc5dQHXFl8M2e6kuqU4Niz9d0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/platinum-wedding-rings-5090041_blue_nile_signature_V2-cefa275d421c436fbd98ccd0f73f8fc0.png",
      img2: "https://tse1.mm.bing.net/th/id/OIP.L8bs73v-G_jMtpP-GpMefgHaI4?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=181&h=217&c=7&dpr=1.5&o=7&rm=3",
      name: "Platinum Ring",
      price: "₹7,000",
      rating: "⭐ 4.9"
    },
    {
      img1: "https://th.bing.com/th/id/OIP.ym9CbxA8g2GILer6OSIUzgHaHa?w=199&h=199&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
      img2: "https://th.bing.com/th/id/OIP.FOZF1YnOfVWzZz4U4NIBAwHaHa?w=174&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
      name: "Platinum Ring",
      price: "₹8,000",
      rating: "⭐ 4.5"
    },
    {
      img1: "https://cdn.shopify.com/s/files/1/0139/6712/products/Annabel-5-carat-round-diamond-engagement-ring-micro-pave-secret-diamonds-platinum-custom-design-dana-walden-bridal-nyc_1800x1800.jpg?v=1569212637",
      img2: "https://www.danawaldenbridal.com/cdn/shop/products/Annabel-5-carat-diamond-engagement-ring-platinum_42a15b58-8bf5-40c4-8e53-c91a8f280a31_1080x.jpg?v=1696444470",
      name: "Platinum Diamond Ring",
      price: "₹9,500",
      rating: "⭐ 5"
    },
    {
      img1: "https://ornatejewels.com/cdn/shop/files/RJR0021-2_3b1ee9b9-095a-40cc-a261-8d506533c4e1.jpg?v=1720765466&width=1000",
      img2: "https://www.ornatejewels.com/cdn/shop/files/RJR0021.jpg?v=1754977594&width=1080",
      name: "Gold Ring",
      price: "₹6,000",
      rating: "⭐ 4.7"
    },
    {
      img1: "https://www.ornatejewels.com/cdn/shop/files/RJRG0711AMRG-F.jpg?v=1755676662&width=1080",
      img2: "https://www.ornatejewels.com/cdn/shop/files/RJRG0711AMRG-4.jpg?v=1755676662&width=1080",
      name: "Rose Gold Ring",
      price: "₹2,000",
      rating: "⭐ 4.8"
    },

    {
      img1: "https://www.ornatejewels.com/cdn/shop/files/RJR0013YG.jpg?v=1754977600&width=1080",
      img2: "https://www.ornatejewels.com/cdn/shop/files/RJR0013RG-1.jpg?v=1764909903&width=1080",
      name: "Gold Diamond Ring",
      price: "₹2,000",
      rating: "⭐ 4.8"
    },

  ];

  return (
    <div className="jewelry-page">
      <h1>Rings</h1>
      <p>Simple & elegant designs</p>

      <div className="jewelry-flex">
        {rings.map((ring, index) => (
          <div className="jewelry-card" key={index}>
            
            <div className="img-wrapper">
              <img src={ring.img1} className="img-main" alt={ring.name} />
              <img src={ring.img2} className="img-hover" alt={ring.name} />

              <button className="cart-btn">Add to Cart</button>
            </div>

            <div className="card-info">
              <h3>{ring.name}</h3>
              <div className="price">{ring.price}</div>
              <div className="rating">{ring.rating}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
