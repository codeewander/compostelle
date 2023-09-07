import React from 'react';
import { Link, Outlet } from "react-router-dom";

const PreTrip = () => {
  return(
    <div className="p-2">
      <nav>
        <ul>
          <li><Link to='/pre-trip/how-to-plan'>How To Plan</Link></li>
          <li><Link to='/pre-trip/how-to-prepare'>How To Prepare</Link></li>
          <li><Link to='/pre-trip/how-to-get-info'>How To GetInfo</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
    )
}

export default PreTrip;