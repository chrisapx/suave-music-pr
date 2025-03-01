import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../admin/pages/Dashboard';
import Login from '../admin/pages/Login';

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
      <Route path="/login?" element={<Login />} />
    </Routes>
  );
};

export default AdminRoutes;