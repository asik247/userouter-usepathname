'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const PeoplePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');

  const peopleInfo = [
    {
      id: 1,
      name: "Ayesha Rahman",
      age: 24,
      gender: "Female",
      profession: "Frontend Developer",
      city: "Dhaka",
      hobbies: ["Photography", "Blogging", "Coding"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      id: 2,
      name: "Tanvir Ahmed",
      age: 29,
      gender: "Male",
      profession: "UI/UX Designer",
      city: "Chittagong",
      hobbies: ["Sketching", "Gaming", "Cycling"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      age: 22,
      gender: "Female",
      profession: "Content Creator",
      city: "Sylhet",
      hobbies: ["Travelling", "Gardening", "Cooking"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
    },
    {
      id: 4,
      name: "Farhan Kabir",
      age: 31,
      gender: "Male",
      profession: "Backend Engineer",
      city: "Rajshahi",
      hobbies: ["Chess", "Reading Tech Blogs", "Swimming"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
    },
    {
      id: 5,
      name: "Mehnaz Hossain",
      age: 26,
      gender: "Female",
      profession: "Digital Marketer",
      city: "Dhaka",
      hobbies: ["Baking", "Listening to Podcasts", "Yoga"],
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
    },
    {
      id: 6,
      name: "Shakil Hasan",
      age: 27,
      gender: "Male",
      profession: "Mobile App Developer",
      city: "Khulna",
      hobbies: ["Football", "Guitar", "Watching Anime"],
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150"
    },
    {
      id: 7,
      name: "Sadia Islam",
      age: 25,
      gender: "Female",
      profession: "Data Analyst",
      city: "Barisal",
      hobbies: ["Solving Puzzles", "Origami", "Badminton"],
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150"
    },
    {
      id: 8,
      name: "Rakibul Karim",
      age: 30,
      gender: "Male",
      profession: "DevOps Engineer",
      city: "Dhaka",
      hobbies: ["Hiking", "Table Tennis", "Open Source"],
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150"
    },
    {
      id: 9,
      name: "Tasnim Anika",
      age: 23,
      gender: "Female",
      profession: "Graphic Designer",
      city: "Comilla",
      hobbies: ["Calligraphy", "Painting", "Movies"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
    },
    {
      id: 10,
      name: "Zubair Mahmud",
      age: 28,
      gender: "Male",
      profession: "Cybersecurity Analyst",
      city: "Mymensingh",
      hobbies: ["CTF Challenges", "Cricket", "Astronomy"],
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
    }
  ];

  const roles = ['All', 'Frontend Developer', 'Backend Engineer', 'DevOps Engineer', 'UI/UX Designer'];

  const filteredPeople = peopleInfo.filter((person) => {
    const matchesSearch =
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'All' || person.profession === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            Talent Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Explore Tech Minds
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Browse through developers, designers, and tech talents in our community.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search by name or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-72 px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedRole === role
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-gray-200/80'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        {filteredPeople.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPeople.map((people) => (
              <div
                key={people.id}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={people.image}
                  alt={people.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500 mb-4 shadow-sm"
                />

                <h3 className="text-xl font-bold text-gray-800">{people.name}</h3>
                <p className="text-sm font-medium text-indigo-600 mb-1">{people.profession}</p>
                <p className="text-xs text-gray-500 mb-4">{people.city} • {people.age} years old</p>

                {/* Hobbies */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                  {people.hobbies?.map((hobby, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <Link
                  href={`/peopleDetails/${people.id}`}
                  className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 text-center cursor-pointer shadow-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-500 text-sm">No profiles found matching your search.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default PeoplePage;