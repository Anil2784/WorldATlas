import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">WorldAtlas</h1>

          {/* Hamburger menu button (visible on mobile) */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navbar links for desktop (hidden on mobile) */}
          <div className="hidden lg:flex space-x-6">
      <ul className="flex space-x-6">
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/">Home</Link> {/* Link for Home */}
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/about">About</Link> {/* Link for About */}
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/country">Country</Link> {/* Link for Country */}
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/contact">Contact</Link> {/* Link for Contact */}
        </li>
      </ul>
    </div>
        </div>
      </div>

      {/* Mobile Menu (visible on mobile screens when toggle is active) */}
      <div className={`lg:hidden bg-black text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 px-4 py-5">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Country</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
