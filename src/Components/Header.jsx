import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header({ logoSrc = '/logo.png', cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/shop?search=${search}`);
    }
  };

  return (
    <header className="header-container">
      <div className="inner-wrapper">
        {/* Logo */}
        <div className="left-section">
          <Link to="/" className="name">PastelPearls</Link>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>

          <div className="dropdown">
            <span className="nav-link" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Product ▾
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                  <a className="dropdown-item" href="/jewellery/ring">Rings</a>
                  <a className="dropdown-item" href="/jewellery/necklaces">Necklaces</a>
                  <a className="dropdown-item" href="/jewellery/bracelets">Bracelets</a>
                  <a className="dropdown-item" href="/jewellery/purse">Purses</a>
                  <a className="dropdown-item" href="/jewellery/perfume">Perfumes</a>
               </div>

            )}
          </div>
          <Link className="nav-link" to="/reviews">Reviews</Link>
        </nav>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search jewellery..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>

        {/* Cart */}
        <div className="cart-section">
          <Link to="/cart" className="cart-icon">🛒</Link>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>

        {/* Mobile menu toggle */}
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link className="mobile-item" to="/shop">Shop</Link>
          <Link className="mobile-item" to="/categories">Categories</Link>
          <Link className="mobile-item" to="/about">About</Link>
          <Link className="mobile-item" to="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}
