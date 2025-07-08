import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const role = localStorage.getItem('role');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">HR Portal</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          {role === 'hr' && <li className="nav-item"><Link className="nav-link" to="/hr-dashboard">HR Dashboard</Link></li>}
          {role === 'employee' && <li className="nav-item"><Link className="nav-link" to="/employee-dashboard">Employee Dashboard</Link></li>}
          <li className="nav-item"><Link className="nav-link" to="/">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;