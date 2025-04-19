// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <span className="text-green-500">✓</span>
          <span>Task Manager</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/signup"
            className="hover:text-green-400 transition duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="hover:text-green-400 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;