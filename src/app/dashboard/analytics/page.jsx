'use client';
import React, { useState } from 'react';

const Analytics = () => {
    const [timeRange, setTimeRange] = useState('Last 30 Days');

    const metricCards = [
        { title: 'Profile Impressions', value: '284.5K', change: '+22.4%', trend: 'up', icon: '👁️' },
        { title: 'Hire Inquiries', value: '1,420', change: '+14.8%', trend: 'up', icon: '📩' },
        { title: 'Search Appearances', value: '48.9K', change: '+8.2%', trend: 'up', icon: '🔍' },
        { title: 'Engagement Rate', value: '64.2%', change: '+3.1%', trend: 'up', icon: '⚡' },
    ];

    const topSkills = [
        { name: 'Next.js / React', count: '48%', color: 'bg-indigo-600' },
        { name: 'Node.js & Express', count: '32%', color: 'bg-emerald-500' },
        { name: 'Tailwind CSS', count: '65%', color: 'bg-teal-500' },
        { name: 'Docker & Kubernetes', count: '22%', color: 'bg-purple-500' },
        { name: 'Cybersecurity / CTF', count: '14%', color: 'bg-rose-500' },
    ];

    const geographicTraffic = [
        { city: 'Dhaka', visitors: '142,300', percentage: '50%' },
        { city: 'Chittagong', visitors: '64,120', percentage: '22%' },
        { city: 'Sylhet', visitors: '32,500', percentage: '12%' },
        { city: 'Rajshahi', visitors: '28,400', percentage: '10%' },
        { city: 'Others', visitors: '17,180', percentage: '6%' },
    ];

    return (
        <div className="space-y-8">
            {/* Header & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Traffic & Performance Analytics</h1>
                    <p className="text-xs text-slate-500 mt-1">
                        Real-time engagement breakdown across developer directories, skill searches, and regions.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    {['Last 7 Days', 'Last 30 Days', 'Quarterly'].map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition cursor-pointer ${timeRange === range
                                    ? 'bg-indigo-600 text-white shadow-sm'
                                    : 'bg-white text-slate-600 border border-gray-200 hover:bg-slate-50'
                                }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {metricCards.map((metric, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl">{metric.icon}</span>
                            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                                {metric.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 mt-4">{metric.value}</h3>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">{metric.title}</p>
                    </div>
                ))}
            </div>

            {/* Graphs & Breakdowns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Most In-Demand Skills */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div>
                            <h2 className="text-base font-bold text-slate-900">Most Searched Technologies</h2>
                            <p className="text-xs text-slate-500 mt-0.5">Filter queries from hiring companies</p>
                        </div>
                        <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                            Keyword Heatmap
                        </span>
                    </div>

                    <div className="space-y-5">
                        {topSkills.map((skill, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                                    <span>{skill.name}</span>
                                    <span>{skill.count}</span>
                                </div>
                                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${skill.color} rounded-full`}
                                        style={{ width: skill.count }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Regional Audience Distribution */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div>
                            <h2 className="text-base font-bold text-slate-900">Regional Traffic</h2>
                            <p className="text-xs text-slate-500 mt-0.5">Platform visitors by location</p>
                        </div>
                        <span className="text-xs">📍</span>
                    </div>

                    <div className="space-y-4">
                        {geographicTraffic.map((geo, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-gray-100/80">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-800">{geo.city}</h4>
                                    <span className="text-[11px] text-slate-400">{geo.visitors} views</span>
                                </div>
                                <span className="text-xs font-bold text-indigo-600 bg-white border border-gray-200 px-2.5 py-1 rounded-lg">
                                    {geo.percentage}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Analytics;