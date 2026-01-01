import React, { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const sectionRef = useRef([]);

  useEffect(() => {
    sectionRef.current.forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      if (el) observer.observe(el);
    });
  }, []);

  return (
    <div className="about-section">

      <h1 ref={el => sectionRef.current.push(el)} className="about-title">
        About Pastel Pearls Shop
      </h1>

      <p ref={el => sectionRef.current.push(el)} className="about-text">
        Welcome to <strong>Pastel Pearls Shop</strong>, where elegance meets luxury.  
        We bring you premium jewelry, handbags, and fashion accessories  
        with a modern touch of pink–gold aesthetics. Quality, style, and  
        customer trust are our priority.
      </p>

      <div className="about-gallery">
        <img
          ref={el => sectionRef.current.push(el)}
          src="https://images.pexels.com/photos/34444213/pexels-photo-34444213.jpeg"
          alt="Jewelry"
          className="about-img"
        />
          <img
          ref={el => sectionRef.current.push(el)}
          src="https://images.pexels.com/photos/25283498/pexels-photo-25283498.jpeg"
          alt="Jewelry"
          className="about-img"
        />
        <img
          ref={el => sectionRef.current.push(el)}
          src="https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg"
          alt="Purse"
          className="about-img"
        />
        <img
          ref={el => sectionRef.current.push(el)}
          src="https://images.pexels.com/photos/9953655/pexels-photo-9953655.jpeg"
          alt="Ring"
          className="about-img"
        />
      </div>

    </div>
  );
}
