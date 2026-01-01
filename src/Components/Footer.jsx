import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">

        {/* Logo & Brand */}
        <div className="footer-brand">
          <span className="brand-name">PastelPearls</span>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/jewelry">Jewellery</a>
          <a href="/reviews">Reviews</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@pastelpearls.com</p>
          <p>Phone: +91 9876543210</p>
          
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Subscribe</h3>
          <p>Get latest updates and offers</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 PastelPearls Shop. All Rights Reserved.</p>
          <p className="footer-credit">Designed by Samruddhi Amravatkar</p>
       </div>
    </footer>
  );
}
