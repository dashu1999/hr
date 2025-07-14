import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">HR Portal</Link>
      {user && (
        <>
          <div className="navbar-nav me-auto">
            {user.role === 'hr' && (
              <>
                <Link className="nav-link" to="/hr-dashboard">HR Dashboard</Link>
                <Link className="nav-link" to="/register-employee">Register Employee</Link>
              </>
            )}
            {user.role === 'employee' && (
              <>
                <Link className="nav-link" to="/employee-dashboard">Employee Dashboard</Link>
                <Link className="nav-link" to="/leave-request">Leave Request</Link>
              </>
            )}
          </div>
          <span className="text-white me-3">Welcome, {user.username}</span>
          <button className="btn btn-sm btn-outline-light" onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
