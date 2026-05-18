import { Star, MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  location: string;
  availability: string;
  phone: string;
  email: string;
  image: string;
  experience: number;
  nextAvailable: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctor: Doctor) => void;
}

export function DoctorCard({ doctor, onBookAppointment }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Doctor Image */}
        <div className="w-full md:w-48 h-48 md:h-auto">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Doctor Information */}
        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="mb-1">{doctor.name}</h3>
              <p className="text-blue-600 mb-2">{doctor.specialty}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(doctor.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {doctor.rating} ({doctor.reviews} reviews)
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{doctor.availability}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Next available: {doctor.nextAvailable}</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{doctor.email}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onBookAppointment(doctor)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Book Appointment
              </button>
              <div className="text-center text-gray-600">
                {doctor.experience} years exp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
