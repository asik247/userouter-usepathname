import Link from 'next/link';
import React from 'react';

const Peoples = () => {
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

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                        Community Directory
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                        Meet the Team & Members
                    </h1>
                    <p className="text-slate-500 text-sm mt-2">
                        Explore our community directory of talented individuals and their skillsets.
                    </p>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {peopleInfo.map((people) => (
                        <div
                            key={people.id}
                            className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Decorative Accent Banner */}
                            <div className="h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative" />

                            <div className="px-6 pb-6 pt-0 flex flex-col items-center flex-1 text-center">
                                {/* Avatar with Ring */}
                                <div className="-mt-12 mb-3 relative">
                                    <img
                                        src={people.image}
                                        alt={people.name}
                                        className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                                </div>

                                {/* Identity */}
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    {people.name}
                                </h3>
                                <p className="text-xs font-semibold text-indigo-600 mb-1">
                                    {people.profession}
                                </p>

                                {/* Meta Badges */}
                                <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                                    <span>{people.city}</span>
                                    <span>•</span>
                                    <span>{people.age} yrs</span>
                                </div>

                                {/* Hobbies / Tags */}
                                <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                                    {people.hobbies?.map((hobby, index) => (
                                        <span
                                            key={index}
                                            className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md border border-slate-200/60"
                                        >
                                            {hobby}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <div className="w-full mt-auto pt-2 border-t border-slate-100">
                                    <Link
                                        href={`/peopleDetails/${people.id}`}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm"
                                    >
                                        View Full Profile
                                        <svg
                                            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Peoples;