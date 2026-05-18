import { RouterProvider, createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { DoctorsListPage } from './pages/DoctorsListPage';
import { DoctorDetailsPage } from './pages/DoctorDetailsPage';
import { SettingsPage } from './pages/SettingsPage';

// Protected Route Wrapper Component
function ProtectedLayout() {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <Layout />;
}

// Public Route Wrapper for Login
function LoginRoute() {
  const { user } = useAuth();
  
  if (user) {
    return <Navigate to="/" replace />;
  }
  
  return <LoginPage />;
}

// Router configuration
function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginRoute />,
    },
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/doctors',
          element: <DoctorsListPage />,
        },
        {
          path: '/doctor/:id',
          element: <DoctorDetailsPage />,
        },
        {
          path: '/settings',
          element: <SettingsPage />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/login" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
