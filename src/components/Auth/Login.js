import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'hr@example.com') {
      localStorage.setItem('role', 'hr');
      navigate('/hr-dashboard');
    } else {
      localStorage.setItem('role', 'employee');
      navigate('/employee-dashboard');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input className="form-control my-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="form-control my-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;