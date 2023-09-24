import React from 'react';
import '../css/Navbar.css'; 

function Navbar() {
  return (
    <nav id='navbar'>
      <ul id="links" className="links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <label for="nav-toggle" class="icon-burger">
        <div  className="line"></div>
        <div  className="line"></div>
        <div  className="line"></div>
    </label>
    </nav>
  );
}

export default Navbar;
