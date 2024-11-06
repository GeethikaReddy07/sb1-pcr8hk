import React from 'react';
import { ExternalLink, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

interface CollegeProps {
  name: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  imageUrl: string;
  courses: string[];
}

export default function CollegeCard({
  name,
  type,
  address,
  phone,
  email,
  website,
  imageUrl,
  courses,
}: CollegeProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg">
          {type}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-sm">{address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="text-sm">{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="text-sm">{email}</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-gray-900">Popular Courses:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {courses.map((course) => (
              <span
                key={course}
                className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ExternalLink className="w-4 h-4" />
          Visit Website
        </a>
      </div>
    </div>
  );
}