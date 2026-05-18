import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DoctorCard } from '../components/DoctorCard';
import { SearchBar } from '../components/SearchBar';
import { FilterSection } from '../components/FilterSection';
import { mockDoctors } from '../data/doctors';
import { useNavigate } from 'react-router-dom';

export function DoctorsListPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const initialSearch = searchParams.get('search') || '';
  const initialSpecialty = searchParams.get('specialty') || 'All Specialties';
  
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);
  const [selectedRating, setSelectedRating] = useState('All Ratings');

  // Filter doctors based on search and filters
  const filteredDoctors = useMemo(() => {
    return mockDoctors.filter((doctor) => {
      // Search filter
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        searchTerm === '' ||
        doctor.name.toLowerCase().includes(searchLower) ||
        doctor.specialty.toLowerCase().includes(searchLower) ||
        doctor.location.toLowerCase().includes(searchLower);

      // Specialty filter
      const matchesSpecialty =
        selectedSpecialty === 'All Specialties' ||
        doctor.specialty === selectedSpecialty;

      // Rating filter
      let matchesRating = true;
      if (selectedRating === '4+ Stars') {
        matchesRating = doctor.rating >= 4;
      } else if (selectedRating === '4.5+ Stars') {
        matchesRating = doctor.rating >= 4.5;
      } else if (selectedRating === '5 Stars') {
        matchesRating = doctor.rating === 5;
      }

      return matchesSearch && matchesSpecialty && matchesRating;
    });
  }, [searchTerm, selectedSpecialty, selectedRating]);

  const handleBookAppointment = (doctor: typeof mockDoctors[0]) => {
    navigate(`/doctor/${doctor.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="mb-2">Find Doctors</h1>
          <p className="text-gray-600">
            Browse and search for healthcare professionals
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        {/* Filters */}
        <div className="mb-8">
          <FilterSection
            selectedSpecialty={selectedSpecialty}
            selectedRating={selectedRating}
            onSpecialtyChange={setSelectedSpecialty}
            onRatingChange={setSelectedRating}
          />
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Doctor List */}
        <div className="space-y-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBookAppointment={handleBookAppointment}
              />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-2">No doctors found matching your criteria</p>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
