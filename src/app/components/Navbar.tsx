import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Heart, Menu, X, User, Settings as SettingsIcon, LogOut, Search } from 'lucide-react';

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-blue-600 fill-blue-600" />
            <span className="text-blue-600">Find Your Doctor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Search className="w-4 h-4" />
              Find Doctors
            </Link>
            
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/settings"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <SettingsIcon className="w-4 h-4" />
                  Settings
                </Link>
                <div className="flex items-center gap-2 text-gray-700">
                  <User className="w-4 h-4" />
                  <span>{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/doctors"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Search className="w-4 h-4" />
                Find Doctors
              </Link>
              
              {user ? (
                <>
                  <Link
                    to="/settings"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <SettingsIcon className="w-4 h-4" />
                    Settings
                  </Link>
                  <div className="flex items-center gap-2 text-gray-700 py-2">
                    <User className="w-4 h-4" />
                    <span>{user.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
