import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react';

export function SettingsPage() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    dateOfBirth: user?.dateOfBirth || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8">Settings</h1>

        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="flex items-center gap-2">
              <User className="w-6 h-6 text-blue-600" />
              Profile Information
            </h2>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Edit Profile
              </button>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      name: user?.name || '',
                      email: user?.email || '',
                      phone: user?.phone || '',
                      address: user?.address || '',
                      dateOfBirth: user?.dateOfBirth || '',
                    });
                  }}
                  className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <User className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-gray-600">Full Name</p>
                  <p>{user?.name || 'Not provided'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-gray-600">Email</p>
                  <p>{user?.email || 'Not provided'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p>{user?.phone || 'Not provided'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-gray-600">Address</p>
                  <p>{user?.address || 'Not provided'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-gray-600">Date of Birth</p>
                  <p>{user?.dateOfBirth || 'Not provided'}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="mb-4">Account Actions</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              Change Password
            </button>
            <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              Notification Preferences
            </button>
            <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              Privacy Settings
            </button>
            <button className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
