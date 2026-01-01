import React from "react";
import "./Reviews.css";

export default function Reviews() {
  const reviews = [
    {
      name: "Sonia Sharma",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      text: "Absolutely loved the necklace! Premium quality and fast delivery.",
      rating: 5,
    },
    {
      name: "Rohit Mehta",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      text: "Gifted the bracelet to my wife, she adored it!",
      rating: 4,
    },
    {
      name: "Ananya Singh",
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      text: "Beautiful craftsmanship, the ring looks even better in real life.",
      rating: 5,
    },
    {
      name: "Karan Patel",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      text: "Amazing service and packaging. Highly recommend.",
      rating: 4,
    },
    
  ];

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">Customer Testimonials 💖</h1>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card-hover">
            <img src={review.img} alt={review.name} className="review-photo" />
            <span className="review-name">{review.name}</span>
            <p className="review-text">{review.text}</p>
            <div className="review-stars">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
