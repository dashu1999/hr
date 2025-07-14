import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('employee');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, role });
    if (role === 'hr') navigate('/hr-dashboard');
    else navigate('/employee-dashboard');
  };

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: 400 }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <select className="form-select mb-3" value={role} onChange={e => setRole(e.target.value)}>
          <option value="employee">Employee</option>
          <option value="hr">HR</option>
        </select>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;