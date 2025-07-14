import React from 'react';
import employees from '../../data/employees.json';

const HRDashboard = () => {
  return (
    <div>
      <h2>HR Dashboard</h2>
      <p className="text-muted">Manage Employee Records</p>
      <table className="table table-bordered table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HRDashboard;