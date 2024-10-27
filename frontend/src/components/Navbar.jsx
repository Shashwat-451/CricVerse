import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/images/logo.png";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();  

  const isActive = (path) => {
    return location.pathname === path ? 'text-white bg-gray-700' : 'text-gray-400';  // Apply active styles
  };

  return (
    <nav className="border-gray-200 bg-gray-900 fixed w-full z-50">
    <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      {/* Left-aligned Logo and Name */}
      <a href="/" className="flex items-center space-x-3">
        <img src={logo} className="w-9 h-8 rounded-full" alt="CricVerse Logo" />
        <span className="text-2xl font-serif font-semibold text-white">CricVerse</span>
      </a>
      
      {/* Center-aligned Menu Items */}
      <div
        className={`items-center justify-center ${
          isMenuOpen ? 'flex' : 'hidden'
        } w-full md:flex md:w-auto md:order-1 mx-auto`}
        id="navbar-user"
      >
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
          <li>
            <Link to="/" className={`block py-2 px-3 rounded ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/livescores" className={`block py-2 px-3 rounded ${isActive('/livescores')}`}>
              Live Scores
            </Link>
          </li>
          <li>
            <Link to="/schedules" className={`block py-2 px-3 rounded ${isActive('/schedules')}`}>
              Fixtures
            </Link>
          </li>

          <li>
            <Link to="/rankings" className={`block py-2 px-3 rounded ${isActive('/rankings')}`}>
              Rankings
            </Link>
          </li>

          <li>
            <Link to="/teams" className={`block py-2 px-3 rounded ${isActive('/teams')}`}>
              Teams
            </Link>
          </li>
         
      
        
         
          <li>
            <Link to="/chat" className={`block py-2 px-3 rounded ${isActive('/chat')}`}>
              Chat
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
