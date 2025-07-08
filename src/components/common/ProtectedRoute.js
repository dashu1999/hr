import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, role }) {
  const currentRole = localStorage.getItem('role');
  if (currentRole !== role) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;