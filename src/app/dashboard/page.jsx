import React from 'react';
import Link from 'next/link';

const DashBoard = () => {
    const stats = [
        { title: 'Total Revenue', value: '$48,250', change: '+14.2%', trend: 'up', icon: '💰' },
        { title: 'Registered Developers', value: '1,280', change: '+8.1%', trend: 'up', icon: '👥' },
        { title: 'Active Projects', value: '86', change: '+3 new', trend: 'up', icon: '🚀' },
        { title: 'Server Latency', value: '42ms', change: '-4ms', trend: 'down', icon: '⚡' },
    ];

    const recentTransactions = [
        { id: 'TX-9021', developer: 'Ayesha Rahman', service: 'Frontend Consultation', amount: '$450', status: 'Completed' },
        { id: 'TX-9022', developer: 'Farhan Kabir', service: 'API Architecture Audit', amount: '$1,200', status: 'Completed' },
        { id: 'TX-9023', developer: 'Rakibul Karim', service: 'Cloud CI/CD Setup', amount: '$850', status: 'Processing' },
        { id: 'TX-9024', developer: 'Tanvir Ahmed', service: 'Design System Sprint', amount: '$600', status: 'Completed' },
    ];

    const activeDevelopers = [
        { name: 'Ayesha Rahman', role: 'Frontend Lead', status: 'Online', city: 'Dhaka' },
        { name: 'Tanvir Ahmed', role: 'UI/UX Designer', status: 'In Meeting', city: 'Chittagong' },
        { name: 'Rakibul Karim', role: 'DevOps Engineer', status: 'Online', city: 'Dhaka' },
        { name: 'Zubair Mahmud', role: 'Cybersecurity', status: 'Offline', city: 'Mymensingh' },
    ];

    return (
        <div className="space-y-8">

            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-indigo-200">
                        Console Overview
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold mt-1">Welcome back, Admin 👋</h2>
                    <p className="text-indigo-100 text-xs sm:text-sm mt-1 max-w-lg">
                        Monitor community metrics, platform transactions, and developer activities in real time.
                    </p>
                </div>
                <Link
                    href="/dashboard/totalsellpage"
                    className="px-5 py-2.5 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs transition shadow-sm shrink-0"
                >
                    View Sales Report →
                </Link>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl">{stat.icon}</span>
                            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 mt-4">{stat.value}</h3>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">{stat.title}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Split: Recent Sales & Active Developers */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Recent Transactions Table */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <h3 className="text-base font-bold text-slate-900">Recent Platform Transactions</h3>
                            <p className="text-xs text-slate-500 mt-0.5">Direct hiring and consulting payments</p>
                        </div>
                        <Link href="/dashboard/totalsellpage" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
                            View All
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead>
                                <tr className="border-b border-gray-100 text-slate-400 font-semibold uppercase tracking-wider">
                                    <th className="pb-3">Transaction</th>
                                    <th className="pb-3">Developer</th>
                                    <th className="pb-3">Service</th>
                                    <th className="pb-3">Amount</th>
                                    <th className="pb-3 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentTransactions.map((tx) => (
                                    <tr key={tx.id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="py-3.5 font-mono text-slate-500">{tx.id}</td>
                                        <td className="py-3.5 font-semibold text-slate-800">{tx.developer}</td>
                                        <td className="py-3.5 text-slate-500">{tx.service}</td>
                                        <td className="py-3.5 font-bold text-slate-900">{tx.amount}</td>
                                        <td className="py-3.5 text-right">
                                            <span
                                                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${tx.status === 'Completed'
                                                        ? 'bg-emerald-50 text-emerald-600'
                                                        : 'bg-amber-50 text-amber-600'
                                                    }`}
                                            >
                                                {tx.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Live Active Developers List */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <h3 className="text-base font-bold text-slate-900">Team Status</h3>
                            <p className="text-xs text-slate-500 mt-0.5">Connected engineers</p>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="space-y-4">
                        {activeDevelopers.map((dev, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-gray-100">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-800">{dev.name}</h4>
                                    <p className="text-[11px] text-indigo-600 font-medium">{dev.role}</p>
                                    <span className="text-[10px] text-slate-400 mt-0.5 block">📍 {dev.city}</span>
                                </div>
                                <span
                                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${dev.status === 'Online'
                                            ? 'bg-emerald-100 text-emerald-700'
                                            : dev.status === 'In Meeting'
                                                ? 'bg-indigo-100 text-indigo-700'
                                                : 'bg-gray-200 text-gray-600'
                                        }`}
                                >
                                    {dev.status}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/people"
                        className="w-full block text-center mt-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition"
                    >
                        Explore All Profiles →
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default DashBoard;