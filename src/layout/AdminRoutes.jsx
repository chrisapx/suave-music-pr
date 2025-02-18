import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../admin/pages/Dashboard';
import AdminLogin from '../admin/pages/AdminLogin';

const AdminRoutes = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated() || user?.role !== 'ADMIN') {
  //     logout();
  //     navigate('/login');
  //   }
  // }, [navigate, isAuthenticated()]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<AdminLogin />} />
    </Routes>
  );
};

export default AdminRoutes;