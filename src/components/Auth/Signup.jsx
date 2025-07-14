import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert('User registered successfully');
    navigate('/');
  };

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: 400 }}>
      <h3>Signup</h3>
      <form onSubmit={handleSignup}>
        <input className="form-control mb-3" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <button className="btn btn-success w-100">Signup</button>
      </form>
    </div>
  );
};

export default Signup;