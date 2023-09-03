import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-cyan-400 p-16">
      <nav className='bg-gray-800'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/walking-map'>Walking Map</Link>
          </li>
          <li>
            <Link to='/via-routes'>Via Routes</Link>
          </li>
          <li>
            <Link to='/pre-trip'>Pre Trip</Link>          
          </li>
          <li>
            <Link to='/qa'>Q&A</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;