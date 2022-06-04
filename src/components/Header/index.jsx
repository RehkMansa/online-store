import React from 'react';
import './style.css';
function Header() {
  return (
    <header className="header">
      <nav className="header-navigation">
        <img className="header__logo" src="images/elite.svg" />
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Header;
