import React from 'react';
import { useAuth } from '../../context/AuthContext';

const EmployeeDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <p>Welcome back, <strong>{user?.username}</strong>!</p>
      <p>You can request leave or view your profile using the navbar.</p>
    </div>
  );
};

export default EmployeeDashboard;