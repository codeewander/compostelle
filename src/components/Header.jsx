import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Menu from "./Menu"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="mb-10">
      <nav >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
        <Link to="/" className="flex items-center">
            <img src="../../public/logo.svg" className="h-12 mr-3" alt="Chemins de Compostelle Logo" />
            <span className="self-center text-base font-semibold whitespace-nowrap lg:text-2xl">Chemins de Compostelle</span>
        </Link>
        <div className="hidden md:block">
          <Menu />
        </div>
        <button
          type="button"
          className="md:hidden bg-green-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-800 hover:bg-yellow-400 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        {showMobileMenu && <Menu />}
      </div>
      </nav>
    </div>
  )
}
export default Header;