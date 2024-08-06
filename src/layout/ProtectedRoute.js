import { NavBar } from '../components/Navbar';
import { useAuth } from '../context/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isAuthenticated, logOut } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <>
      <NavBar logOut={logOut} />
      <Outlet />
    </>
  );
};
