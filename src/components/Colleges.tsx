import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CollegeCard from './CollegeCard';

const colleges = [
  {
    name: "Dr. B.R. Ambedkar University",
    type: "University",
    address: "Etcherla, Srikakulam, Andhra Pradesh",
    phone: "+91-8942-281518",
    email: "registrar@brau.edu.in",
    website: "https://www.brau.edu.in",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    courses: ["Arts", "Science", "Commerce", "Engineering", "Management"]
  },
  {
    name: "SITAM Engineering College",
    type: "Engineering",
    address: "Gajularega, Srikakulam, Andhra Pradesh",
    phone: "+91-8942-223441",
    email: "info@sitam.co.in",
    website: "https://www.sitam.co.in",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    courses: ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"]
  },
  {
    name: "Government Degree College",
    type: "Degree College",
    address: "Near RTC Complex, Srikakulam",
    phone: "+91-8942-222555",
    email: "gdcsklm@gmail.com",
    website: "https://gdcsrikakulam.ac.in",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    courses: ["B.Sc", "B.Com", "B.A", "BBA", "BCA"]
  },
  {
    name: "GMR Institute of Technology",
    type: "Engineering",
    address: "Rajam, Srikakulam District",
    phone: "+91-8941-251592",
    email: "info@gmrit.org",
    website: "https://www.gmrit.org",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    courses: ["Computer Science", "AI & ML", "Mechanical", "ECE", "Civil"]
  }
];

const collegeTypes = ["All", "University", "Engineering", "Degree College", "Medical"];

export default function Colleges() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === "All" || college.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Educational Institutions in Srikakulam
          </h1>
          <p className="text-lg text-gray-600">
            Discover top colleges and universities in Srikakulam district
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by college name or course..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {collegeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.map((college) => (
            <CollegeCard key={college.name} {...college} />
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No colleges found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}