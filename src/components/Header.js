import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="Header">
      <img
        className="Header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <input className="Header-search" />
      <div>
        <span>Hello, Sign in</span>
        <span>Accounts & Lists</span>
      </div>
      <div>
        <span>Returns</span>
        <span>& Orders</span>
      </div>
    </nav>
  );
};

export default Header;
