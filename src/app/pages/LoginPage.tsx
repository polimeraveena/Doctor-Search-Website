import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Heart, LogIn, UserPlus } from 'lucide-react';

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      login(email, password);
    } else {
      signup(name, email, password);
    }
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-blue-600 fill-blue-600" />
            <h1 className="text-blue-600">Find Your Doctor</h1>
          </div>
          <p className="text-gray-600">
            {isLogin ? 'Welcome back! Please login to continue.' : 'Create an account to get started.'}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                isLogin
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <LogIn className="w-5 h-5" />
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                !isLogin
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <UserPlus className="w-5 h-5" />
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={!isLogin}
                  placeholder="John Doe"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            {isLogin ? (
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 hover:underline"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-600 hover:underline"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
