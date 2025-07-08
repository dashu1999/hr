import React, { useState } from 'react';

function LeaveRequest() {
  const [reason, setReason] = useState('');

  const submitRequest = () => {
    alert('Leave request submitted!');
    setReason('');
  };

  return (
    <div className="container mt-5">
      <h3>Leave Request</h3>
      <textarea className="form-control my-2" value={reason} onChange={e => setReason(e.target.value)} placeholder="Reason for leave" />
      <button className="btn btn-warning" onClick={submitRequest}>Submit</button>
    </div>
  );
}

export default LeaveRequest;