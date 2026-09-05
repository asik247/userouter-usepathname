import React from 'react';
import Link from 'next/link';

const PeopleDetailPage = async ({ params }) => {
    const { id } = await params;

    const users = [
        {
            id: 1,
            name: "Ayesha Rahman",
            age: 24,
            gender: "Female",
            profession: "Frontend Developer",
            city: "Dhaka",
            hobbies: ["Photography", "Blogging", "Coding"],
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
        },
        {
            id: 2,
            name: "Tanvir Ahmed",
            age: 29,
            gender: "Male",
            profession: "UI/UX Designer",
            city: "Chittagong",
            hobbies: ["Sketching", "Gaming", "Cycling"],
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
        },
        {
            id: 3,
            name: "Nusrat Jahan",
            age: 22,
            gender: "Female",
            profession: "Content Creator",
            city: "Sylhet",
            hobbies: ["Travelling", "Gardening", "Cooking"],
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
        },
        {
            id: 4,
            name: "Farhan Kabir",
            age: 31,
            gender: "Male",
            profession: "Backend Engineer",
            city: "Rajshahi",
            hobbies: ["Chess", "Reading Tech Blogs", "Swimming"],
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
        },
        {
            id: 5,
            name: "Mehnaz Hossain",
            age: 26,
            gender: "Female",
            profession: "Digital Marketer",
            city: "Dhaka",
            hobbies: ["Baking", "Listening to Podcasts", "Yoga"],
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400"
        },
        {
            id: 6,
            name: "Shakil Hasan",
            age: 27,
            gender: "Male",
            profession: "Mobile App Developer",
            city: "Khulna",
            hobbies: ["Football", "Guitar", "Watching Anime"],
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400"
        },
        {
            id: 7,
            name: "Sadia Islam",
            age: 25,
            gender: "Female",
            profession: "Data Analyst",
            city: "Barisal",
            hobbies: ["Solving Puzzles", "Origami", "Badminton"],
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400"
        },
        {
            id: 8,
            name: "Rakibul Karim",
            age: 30,
            gender: "Male",
            profession: "DevOps Engineer",
            city: "Dhaka",
            hobbies: ["Hiking", "Table Tennis", "Open Source"],
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400"
        },
        {
            id: 9,
            name: "Tasnim Anika",
            age: 23,
            gender: "Female",
            profession: "Graphic Designer",
            city: "Comilla",
            hobbies: ["Calligraphy", "Painting", "Movies"],
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400"
        },
        {
            id: 10,
            name: "Zubair Mahmud",
            age: 28,
            gender: "Male",
            profession: "Cybersecurity Analyst",
            city: "Mymensingh",
            hobbies: ["CTF Challenges", "Cricket", "Astronomy"],
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
        }
    ];

    const singlePeople = users.find((user) => user.id === parseInt(id));

    // User না পাওয়া গেলে ফলব্যাক
    if (!singlePeople) {
        return (
            <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-semibold mb-2">User Not Found</h2>
                <p className="text-zinc-400 mb-6">The profile you are looking for does not exist.</p>
                <Link
                    href="/"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
                >
                    Back to Directory
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-4 sm:p-6">
            <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Banner */}
                <div className="h-28 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative">
                    <Link
                        href="/"
                        className="absolute top-4 left-4 text-xs font-medium px-3 py-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-zinc-200 transition"
                    >
                        ← Back
                    </Link>
                </div>

                {/* Profile Card Body */}
                <div className="px-6 pb-8 pt-0 relative">
                    {/* Avatar */}
                    <div className="-mt-14 mb-4 flex justify-between items-end">
                        <img
                            src={singlePeople.image}
                            alt={singlePeople.name}
                            className="w-28 h-28 rounded-2xl object-cover ring-4 ring-zinc-900 shadow-lg"
                        />
                        <span className="text-xs font-mono bg-zinc-800 text-zinc-400 border border-zinc-700 px-2.5 py-1 rounded-md">
                            ID: #{singlePeople.id}
                        </span>
                    </div>

                    {/* Name & Title */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-zinc-50">{singlePeople.name}</h1>
                        <p className="text-indigo-400 font-medium text-sm mt-0.5">{singlePeople.profession}</p>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-3 text-center">
                            <span className="block text-xs uppercase tracking-wider text-zinc-400">Age</span>
                            <span className="text-base font-semibold text-zinc-100 mt-1">{singlePeople.age}</span>
                        </div>
                        <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-3 text-center">
                            <span className="block text-xs uppercase tracking-wider text-zinc-400">Gender</span>
                            <span className="text-base font-semibold text-zinc-100 mt-1">{singlePeople.gender}</span>
                        </div>
                        <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-3 text-center">
                            <span className="block text-xs uppercase tracking-wider text-zinc-400">City</span>
                            <span className="text-base font-semibold text-zinc-100 mt-1 truncate">{singlePeople.city}</span>
                        </div>
                    </div>

                    {/* Hobbies Section */}
                    <div>
                        <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
                            Hobbies & Interests
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {singlePeople.hobbies?.map((hobby, index) => (
                                <span
                                    key={index}
                                    className="text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700 px-3 py-1 rounded-lg"
                                >
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PeopleDetailPage;