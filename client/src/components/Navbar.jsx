import React from 'react';
import '../css/Navbar.css';
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-2 fixed top-0 w-full z-10">
      <ul className='navbar-nav'>
        <li className='nav-item'>
        <Link to="/employee">Edit</Link>
          {/* <a href="http://" className='icon-button'><FaBars/></a> */}
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
