import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
  return <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
          <Link to='/' className="block md:inline-block px-3 py-2 rounded-md text-green-700 bg-white focus:outline-none focus:text-yellow-300 focus:bg-green-700">Home</Link>
          <Link to='/walking-map' className="block md:inline-block px-3 py-2 rounded-md text-green-700 bg-white focus:outline-none focus:text-yellow-300 focus:bg-green-700">Walking Map</Link>
          <Link to='/via-routes' className="block md:inline-block px-3 py-2 rounded-md text-green-700 bg-white focus:outline-none focus:text-yellow-300 focus:bg-green-700">Via Routes</Link>
          <Link to='/pre-trip' className="block md:inline-block px-3 py-2 rounded-md text-green-700 bg-white focus:outline-none focus:text-yellow-300 focus:bg-green-700" >Pre Trip</Link>
          <Link to='/qa' className="block md:inline-block px-3 py-2 rounded-md text-green-700 bg-white focus:outline-none focus:text-yellow-300 focus:bg-green-700" >Q&A</Link>
      </div>
  </div>
}

export default Menu;