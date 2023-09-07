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
          className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
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


        {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link to='/' className="block py-2 pl-3 pr-4 text-green-900 bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0"  aria-current="page">Home</Link>
            </li>
            <li>
              <Link to='/walking-map' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0">Walking Map</Link>
            </li>
            <li>
              <Link to='/via-routes' className="block py-2 pl-3 pr-4 text-green-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0">Via Routes</Link>
            </li>
            <li>
              <Link to='/pre-trip' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0" >Pre Trip</Link>
            </li>
            <li>
              <Link to='/qa' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0" >Q&A</Link>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="md:hidden">
        {showMobileMenu && <Menu />}
      </div>
      </nav>
    </div>
  )
}
export default Header;