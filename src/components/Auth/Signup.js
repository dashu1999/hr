import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    alert('User registered! Please log in.');
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <input className="form-control my-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="form-control my-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-success" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;