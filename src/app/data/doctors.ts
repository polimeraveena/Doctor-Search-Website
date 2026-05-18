export interface Doctor {
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
  consultationFee?: number;
  about?: string;
  education?: string[];
  languages?: string[];
}

export const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Anil Kumar",
    specialty: "Cardiology",
    location: "HSR Layout, Bangalore",
    consultationFee: 600,
    rating: 4.8,
    phone: "9876543210",
    reviews: 120,
    availability: 'Mon-Sat: 10:00 AM - 8:00 PM',
    email: 'anil.kumar@example.com',
    image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzY3NDE0ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: 12,
    nextAvailable: 'Tomorrow, 10:00 AM'
  },
  {
    id: 2,
    name: "Dr. Rajesh Gupta",
    specialty: "Dermatology",
    location: "Andheri, Mumbai",
    consultationFee: 500,
    rating: 4.5,
    phone: "9123456780",
    reviews: 85,
    availability: 'Mon-Fri: 9:00 AM - 5:00 PM',
    email: 'rajesh.gupta@example.com',
    image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzY3NDE0ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: 15,
    nextAvailable: 'Today, 2:00 PM'
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    specialty: "Orthopedics",
    location: "Dwarka, Delhi",
    consultationFee: 800,
    rating: 4.9,
    phone: "9988776655",
    reviews: 210,
    availability: 'Mon-Sat: 11:00 AM - 7:00 PM',
    email: 'priya.sharma@example.com',
    image: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBtZWRpY2FsfGVufDF8fHx8MTc2NzM3MzQxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    experience: 8,
    nextAvailable: 'Tomorrow, 11:00 AM'
  },
  {
    id: 4,
    name: "Dr. Neha Patel",
    specialty: "Neurology",
    location: "Indiranagar, Bangalore",
    consultationFee: 700,
    rating: 4.7,
    phone: "9090909090",
    reviews: 145,
    availability: 'Tue-Sun: 9:00 AM - 6:00 PM',
    email: 'neha.patel@example.com',
    image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjczMDE1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: 10,
    nextAvailable: 'Thursday, 9:00 AM'
  },
  {
    id: 5,
    name: "Dr. Veena",
    specialty: "Dentistry",
    location: "Velachery, Chennai",
    consultationFee: 400,
    rating: 4.6,
    phone: "9012345678",
    reviews: 90,
    availability: 'Mon-Fri: 10:00 AM - 8:00 PM',
    email: 'veena@example.com',
    image: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBtZWRpY2FsfGVufDF8fHx8MTc2NzM3MzQxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    experience: 5,
    nextAvailable: 'Today, 4:00 PM'
  },
  {
    id: 6,
    name: "Dr. Vikram Singh",
    specialty: "General Practice",
    location: "Doddaballapur, Bangalore",
    consultationFee: 500,
    rating: 4.6,
    phone: "9110368066",
    reviews: 110,
    availability: 'Mon-Sat: 8:00 AM - 2:00 PM',
    email: 'vikram.singh@example.com',
    image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzY3NDE0ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: 20,
    nextAvailable: 'Tomorrow, 8:00 AM'
  },
  {
    id: 7,
    name: "Dr. Ramesh",
    specialty: "Cardiology",
    location: "Yelahanka, Bangalore",
    consultationFee: 900,
    rating: 4.7,
    phone: "9000011111",
    reviews: 130,
    availability: 'Mon-Fri: 9:00 AM - 5:00 PM',
    email: 'ramesh@example.com',
    image: 'https://images.unsplash.com/photo-1666886573590-5815157da865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3Njc0MTQ4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: 25,
    nextAvailable: 'Next Monday, 9:00 AM'
  },
  {
    id: 8,
    name: "Dr. Prakash",
    specialty: "Dermatology",
    location: "Whitefield, Bangalore",
    consultationFee: 600,
    rating: 4.5,
    phone: "9000022222",
    reviews: 75,
    availability: 'Wed-Sun: 10:00 AM - 6:00 PM',
    email: 'prakash@example.com',
    image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzY3NDE0ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: 11,
    nextAvailable: 'Wednesday, 10:00 AM'
  },
  {
    id: 9,
    name: "Dr. Sunita",
    specialty: "Orthopedics",
    location: "Hebbal, Bangalore",
    consultationFee: 800,
    rating: 4.6,
    phone: "9000033333",
    reviews: 160,
    availability: 'Mon-Sat: 9:00 AM - 5:00 PM',
    email: 'sunita@example.com',
    image: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBtZWRpY2FsfGVufDF8fHx8MTc2NzM3MzQxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    experience: 18,
    nextAvailable: 'Tomorrow, 12:00 PM'
  },
  {
    id: 10,
    name: "Dr. Kiran",
    specialty: "Pediatrics",
    location: "Malleshwaram, Bangalore",
    consultationFee: 550,
    rating: 4.8,
    phone: "9000044444",
    reviews: 195,
    availability: 'Mon-Fri: 10:00 AM - 4:00 PM',
    email: 'kiran@example.com',
    image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzY3NDE0ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: 14,
    nextAvailable: 'Today, 2:30 PM'
  }
];
