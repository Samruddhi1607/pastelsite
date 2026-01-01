import React, { useRef } from 'react';
import About from './About';
import "./Home.css";
import Trending from './Trending';
import Gift from './Gift';
import Reviews from './Reviews';


export default function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="home-hero">
        {/* Left Side Image */}
        <div className="home-hero-image"></div>

        {/* Right Side Text Section */}
        <div className="home-hero-content">
          <h1 className="home-hero-title">Welcome to PastelPearls Shop</h1>
          <p className="home-hero-subtitle">
            Jewellery • Purses • Perfumes 
          </p>
          <p className="home-hero-para">
            Discover our exclusive range of handcrafted jewellery, elegant 
            fashion collections, and luxury purses designed to elevate your 
            everyday style. Shine with beauty, confidence, and timeless grace.
          </p>

          <button 
            className="home-hero-btn"
            onClick={scrollToAbout}
          >
            Explore Collection
          </button>
        </div>
      </div>

      {/* About Section */}
      <section ref={aboutRef} id="about">
        <About />
        <Trending />
        <Gift/>
        <Reviews/>

      </section>

    </div>
  );
}
