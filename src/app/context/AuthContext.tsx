import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  dateOfBirth?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Mock login - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: email,
      phone: '(555) 123-4567',
      address: '123 Main St, New York, NY 10001',
      dateOfBirth: '1990-01-01',
    };
    setUser(mockUser);
  };

  const signup = (name: string, email: string, password: string) => {
    // Mock signup - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      name: name,
      email: email,
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
