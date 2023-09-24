import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <label for="nav-toggle" class="icon-burger">
      <div  class="line"></div>
      <div  class="line"></div>
      <div  class="line"></div>
    </label>
    
    </nav>
  );
}

export default Navbar;
