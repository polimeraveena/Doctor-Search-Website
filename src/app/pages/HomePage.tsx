import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Heart, Stethoscope, Calendar, Award } from 'lucide-react';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/doctors?search=${encodeURIComponent(searchQuery)}`);
  };

  const specialties = [
    { name: 'Cardiology', icon: Heart },
    { name: 'Dermatology', icon: Stethoscope },
    { name: 'Pediatrics', icon: Calendar },
    { name: 'Orthopedics', icon: Award },
    { name: 'Neurology', icon: Stethoscope },
    { name: 'General Practice', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-white">Find Your Perfect Doctor</h1>
            <p className="mb-8 text-blue-100">
              Search from thousands of qualified healthcare professionals
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for doctors, specialties, or conditions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="mb-8 text-center">Browse by Specialty</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <button
                key={specialty.name}
                onClick={() => navigate(`/doctors?specialty=${encodeURIComponent(specialty.name)}`)}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Icon className="w-8 h-8 text-blue-600 mb-3" />
                <span className="text-center">{specialty.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2">Easy Search</h3>
              <p className="text-gray-600">
                Find the right doctor for your needs quickly and easily
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2">Book Appointments</h3>
              <p className="text-gray-600">
                Schedule appointments at your convenience
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2">Verified Doctors</h3>
              <p className="text-gray-600">
                All doctors are verified and highly qualified
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
