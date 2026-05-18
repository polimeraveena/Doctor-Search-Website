import { SlidersHorizontal } from 'lucide-react';

interface FilterSectionProps {
  selectedSpecialty: string;
  selectedRating: string;
  onSpecialtyChange: (specialty: string) => void;
  onRatingChange: (rating: string) => void;
}

const specialties = [
  'All Specialties',
  'Cardiology',
  'Dermatology',
  'General Practice',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry'
];

const ratings = [
  'All Ratings',
  '4+ Stars',
  '4.5+ Stars',
  '5 Stars'
];

export function FilterSection({
  selectedSpecialty,
  selectedRating,
  onSpecialtyChange,
  onRatingChange
}: FilterSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-gray-600" />
        <h3>Filters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Specialty Filter */}
        <div>
          <label htmlFor="specialty" className="block text-gray-700 mb-2">
            Specialty
          </label>
          <select
            id="specialty"
            value={selectedSpecialty}
            onChange={(e) => onSpecialtyChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label htmlFor="rating" className="block text-gray-700 mb-2">
            Minimum Rating
          </label>
          <select
            id="rating"
            value={selectedRating}
            onChange={(e) => onRatingChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {ratings.map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
