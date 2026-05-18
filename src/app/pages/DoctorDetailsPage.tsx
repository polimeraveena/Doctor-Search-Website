import { useParams, useNavigate } from 'react-router-dom';
import { mockDoctors } from '../data/doctors';
import { Star, MapPin, Clock, Phone, Mail, Calendar, ArrowLeft, GraduationCap, Globe, DollarSign, Award } from 'lucide-react';

export function DoctorDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = mockDoctors.find((d) => d.id === Number(id));

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Doctor Not Found</h2>
          <button
            onClick={() => navigate('/doctors')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Doctors List
          </button>
        </div>
      </div>
    );
  }

  const handleBookAppointment = () => {
    alert(`Booking appointment with ${doctor.name}. In a real application, this would open a booking form.`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/doctors')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Doctors
        </button>

        {/* Doctor Profile Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="md:flex">
            {/* Doctor Image */}
            <div className="md:w-64 h-64 md:h-auto">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="mb-1">{doctor.name}</h1>
                  <p className="text-blue-600 mb-2">{doctor.specialty}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
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

                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Award className="w-4 h-4" />
                    <span>{doctor.experience} years of experience</span>
                  </div>
                </div>

                <button
                  onClick={handleBookAppointment}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{doctor.availability}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{doctor.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Next available: {doctor.nextAvailable}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span>Consultation: ${doctor.consultationFee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="mb-4">About</h2>
          <p className="text-gray-700">{doctor.about}</p>
        </div>

        {/* Education Section */}
        {doctor.education && doctor.education.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Education
            </h2>
            <ul className="space-y-2">
              {doctor.education.map((edu, index) => (
                <li key={index} className="text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages Section */}
        {doctor.languages && doctor.languages.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-600" />
              Languages
            </h2>
            <div className="flex flex-wrap gap-2">
              {doctor.languages.map((language, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
