import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import HRDashboard from './components/dashboard/HRDashboard';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import Navbar from './components/shared/Navbar';
import EmployeeForm from './components/forms/EmployeeForm';
import LeaveRequestForm from './components/forms/LeaveRequestForm';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/hr-dashboard" element={<HRDashboard />} />
            <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
            <Route path="/register-employee" element={<EmployeeForm />} />
            <Route path="/leave-request" element={<LeaveRequestForm />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
