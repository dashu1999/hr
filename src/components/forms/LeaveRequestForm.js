import React, { useState } from 'react';

const LeaveRequestForm = () => {
  const [leave, setLeave] = useState({
    from: '',
    to: '',
    reason: '',
  });

  const handleChange = (e) => {
    setLeave({ ...leave, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Leave Request:', leave);
    alert('Leave request submitted');
    setLeave({ from: '', to: '', reason: '' });
  };

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: 500 }}>
      <h4>Leave Request Form</h4>
      <form onSubmit={handleSubmit}>
        <label>From Date</label>
        <input type="date" className="form-control mb-3" name="from" value={leave.from} onChange={handleChange} required />
        <label>To Date</label>
        <input type="date" className="form-control mb-3" name="to" value={leave.to} onChange={handleChange} required />
        <textarea className="form-control mb-3" name="reason" placeholder="Reason" value={leave.reason} onChange={handleChange} required />
        <button className="btn btn-success w-100">Submit Request</button>
      </form>
    </div>
  );
};

export default LeaveRequestForm;
