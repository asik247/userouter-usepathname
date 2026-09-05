'use client';
import React, { useState } from 'react';

const ManagePeoples = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);

    // Initial developer list
    const [peoples, setPeoples] = useState([
        {
            id: 1,
            name: "Ayesha Rahman",
            role: "Frontend Developer",
            city: "Dhaka",
            status: "Active",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
        },
        {
            id: 2,
            name: "Tanvir Ahmed",
            role: "UI/UX Designer",
            city: "Chittagong",
            status: "Active",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
        },
        {
            id: 3,
            name: "Farhan Kabir",
            role: "Backend Engineer",
            city: "Rajshahi",
            status: "Active",
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
        },
        {
            id: 4,
            name: "Rakibul Karim",
            role: "DevOps Engineer",
            city: "Dhaka",
            status: "Busy",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150"
        },
        {
            id: 5,
            name: "Zubair Mahmud",
            role: "Cybersecurity Analyst",
            city: "Mymensingh",
            status: "Active",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
        },
    ]);

    // Form state for adding new person
    const [newPerson, setNewPerson] = useState({
        name: '',
        role: 'Frontend Developer',
        city: 'Dhaka',
        status: 'Active',
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
    });

    // Handle Delete
    const handleDelete = (id) => {
        setPeoples(peoples.filter((p) => p.id !== id));
    };

    // Handle Add New Member
    const handleAddMember = (e) => {
        e.preventDefault();
        if (!newPerson.name) return;
        const added = {
            ...newPerson,
            id: Date.now()
        };
        setPeoples([added, ...peoples]);
        setShowAddModal(false);
        setNewPerson({
            name: '',
            role: 'Frontend Developer',
            city: 'Dhaka',
            status: 'Active',
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
        });
    };

    // Filter logic
    const filteredPeoples = peoples.filter(
        (p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Top Header & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Manage Community Developers</h1>
                    <p className="text-xs text-slate-500 mt-1">
                        Review status, edit assignments, or onboard new engineers into the platform directory.
                    </p>
                </div>

                <button
                    onClick={() => setShowAddModal(true)}
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition cursor-pointer"
                >
                    <span>＋</span> Add New Developer
                </button>
            </div>

            {/* Stats Mini Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <span className="text-xs font-medium text-slate-500">Total Enrolled</span>
                        <h4 className="text-2xl font-bold text-slate-900 mt-1">{peoples.length}</h4>
                    </div>
                    <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                        👥
                    </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <span className="text-xs font-medium text-slate-500">Currently Active</span>
                        <h4 className="text-2xl font-bold text-emerald-600 mt-1">
                            {peoples.filter((p) => p.status === 'Active').length}
                        </h4>
                    </div>
                    <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                        ⚡
                    </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <span className="text-xs font-medium text-slate-500">Avg Member Score</span>
                        <h4 className="text-2xl font-bold text-amber-500 mt-1">4.9 ★</h4>
                    </div>
                    <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                        ⭐
                    </span>
                </div>
            </div>

            {/* Main Table Container */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                {/* Search Input */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                    <input
                        type="text"
                        placeholder="Search by name, role, or city..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:w-80 px-4 py-2 bg-slate-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
                    />
                    <span className="text-xs font-mono text-slate-400">
                        Showing {filteredPeoples.length} developers
                    </span>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead>
                            <tr className="text-slate-400 font-semibold uppercase tracking-wider border-b border-gray-100">
                                <th className="pb-3">Developer</th>
                                <th className="pb-3">Profession / Role</th>
                                <th className="pb-3">Location</th>
                                <th className="pb-3">Status</th>
                                <th className="pb-3">Score</th>
                                <th className="pb-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredPeoples.map((person) => (
                                <tr key={person.id} className="hover:bg-slate-50/70 transition-colors">
                                    <td className="py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                className="w-9 h-9 rounded-full object-cover border border-indigo-200"
                                            />
                                            <div>
                                                <p className="font-semibold text-slate-900">{person.name}</p>
                                                <p className="text-[11px] text-slate-400">ID: #{person.id.toString().slice(-4)}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 font-medium text-slate-700">{person.role}</td>
                                    <td className="py-4 text-slate-500">{person.city}</td>
                                    <td className="py-4">
                                        <span
                                            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${person.status === 'Active'
                                                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                                    : 'bg-amber-50 text-amber-600 border border-amber-100'
                                                }`}
                                        >
                                            {person.status}
                                        </span>
                                    </td>
                                    <td className="py-4 font-semibold text-slate-700">{person.rating} ★</td>
                                    <td className="py-4 text-right space-x-2">
                                        <button
                                            onClick={() => alert(`Editing: ${person.name}`)}
                                            className="px-2.5 py-1 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(person.id)}
                                            className="px-2.5 py-1 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add New Developer Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl border border-gray-100">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                            <h3 className="text-base font-bold text-slate-900">Add New Developer</h3>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleAddMember} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Mahfuz Hasan"
                                    value={newPerson.name}
                                    onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
                                    className="w-full px-3 py-2 bg-slate-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">Role</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Full Stack Engineer"
                                    value={newPerson.role}
                                    onChange={(e) => setNewPerson({ ...newPerson, role: e.target.value })}
                                    className="w-full px-3 py-2 bg-slate-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Dhaka"
                                        value={newPerson.city}
                                        onChange={(e) => setNewPerson({ ...newPerson, city: e.target.value })}
                                        className="w-full px-3 py-2 bg-slate-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Status</label>
                                    <select
                                        value={newPerson.status}
                                        onChange={(e) => setNewPerson({ ...newPerson, status: e.target.value })}
                                        className="w-full px-3 py-2 bg-slate-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Busy">Busy</option>
                                        <option value="Offline">Offline</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-2 pt-4 border-t border-gray-100">
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl transition shadow-sm cursor-pointer"
                                >
                                    Save Developer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagePeoples;