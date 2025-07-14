import React, { useState } from 'react';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    position: '',
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered Employee:', employee);
    alert('Employee registered successfully');
    setEmployee({ name: '', email: '', position: '' });
  };

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: 500 }}>
      <h4>Register New Employee</h4>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="name" placeholder="Name" value={employee.name} onChange={handleChange} required />
        <input className="form-control mb-3" name="email" placeholder="Email" value={employee.email} onChange={handleChange} required />
        <input className="form-control mb-3" name="position" placeholder="Position" value={employee.position} onChange={handleChange} required />
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
