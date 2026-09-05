'use client';
import React, { useState } from 'react';

const TotalSellPage = () => {
    const [filterPeriod, setFilterPeriod] = useState('This Month');

    const summaryCards = [
        { title: 'Gross Revenue', value: '$124,500', change: '+18.4%', trend: 'up', icon: '💰' },
        { title: 'Successful Orders', value: '412', change: '+12.1%', trend: 'up', icon: '📦' },
        { title: 'Avg. Project Ticket', value: '$302', change: '+5.3%', trend: 'up', icon: '🏷️' },
        { title: 'Refund Rate', value: '0.8%', change: '-0.2%', trend: 'down', icon: '🔄' },
    ];

    const salesData = [
        {
            id: 'INV-2024-001',
            client: 'Apex Global Tech',
            developer: 'Farhan Kabir',
            service: 'Microservices Architecture',
            date: 'Sep 02, 2026',
            amount: '$3,400',
            paymentMethod: 'Bank Transfer',
            status: 'Paid'
        },
        {
            id: 'INV-2024-002',
            client: 'FinFlow Systems',
            developer: 'Ayesha Rahman',
            service: 'Next.js Frontend Sprint',
            date: 'Sep 01, 2026',
            amount: '$1,850',
            paymentMethod: 'Stripe',
            status: 'Paid'
        },
        {
            id: 'INV-2024-003',
            client: 'Nordic Cloud Labs',
            developer: 'Rakibul Karim',
            service: 'Kubernetes Cluster Setup',
            date: 'Aug 29, 2026',
            amount: '$2,200',
            paymentMethod: 'PayPal',
            status: 'Paid'
        },
        {
            id: 'INV-2024-004',
            client: 'Pulse Health Media',
            developer: 'Tanvir Ahmed',
            service: 'UI/UX Design System',
            date: 'Aug 27, 2026',
            amount: '$950',
            paymentMethod: 'Stripe',
            status: 'Processing'
        },
        {
            id: 'INV-2024-005',
            client: 'Vanguard Cyber Ops',
            developer: 'Zubair Mahmud',
            service: 'Network Vulnerability Audit',
            date: 'Aug 25, 2026',
            amount: '$4,100',
            paymentMethod: 'Wire',
            status: 'Paid'
        },
        {
            id: 'INV-2024-006',
            client: 'AppX Studio',
            developer: 'Shakil Hasan',
            service: 'React Native Mobile Module',
            date: 'Aug 22, 2026',
            amount: '$1,600',
            paymentMethod: 'Stripe',
            status: 'Paid'
        }
    ];

    return (
        <div className="space-y-8">
            {/* Top Header & Range Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Total Sales & Earnings</h1>
                    <p className="text-xs text-slate-500 mt-1">
                        Detailed breakdown of invoices, revenue streams, and consulting contracts.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    {['This Week', 'This Month', 'Yearly'].map((period) => (
                        <button
                            key={period}
                            onClick={() => setFilterPeriod(period)}
                            className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition cursor-pointer ${filterPeriod === period
                                    ? 'bg-indigo-600 text-white shadow-sm'
                                    : 'bg-white text-slate-600 border border-gray-200 hover:bg-slate-50'
                                }`}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            {/* Summary KPI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {summaryCards.map((card, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl">{card.icon}</span>
                            <span
                                className={`text-xs font-semibold px-2 py-0.5 rounded-md ${card.trend === 'up'
                                        ? 'text-emerald-600 bg-emerald-50'
                                        : 'text-indigo-600 bg-indigo-50'
                                    }`}
                            >
                                {card.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 mt-4">{card.value}</h3>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">{card.title}</p>
                    </div>
                ))}
            </div>

            {/* Sales Invoices Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div>
                        <h2 className="text-base font-bold text-slate-900">Invoices & Settlement Log</h2>
                        <p className="text-xs text-slate-500 mt-0.5">Showing confirmed client invoices</p>
                    </div>
                    <button className="self-start sm:self-auto text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-lg hover:bg-indigo-100 transition cursor-pointer">
                        Export CSV
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead>
                            <tr className="text-slate-400 font-semibold uppercase tracking-wider border-b border-gray-100">
                                <th className="pb-3">Invoice ID</th>
                                <th className="pb-3">Client</th>
                                <th className="pb-3">Consultant</th>
                                <th className="pb-3">Service</th>
                                <th className="pb-3">Date</th>
                                <th className="pb-3">Method</th>
                                <th className="pb-3">Amount</th>
                                <th className="pb-3 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {salesData.map((sale) => (
                                <tr key={sale.id} className="hover:bg-slate-50/70 transition-colors">
                                    <td className="py-4 font-mono font-medium text-indigo-600">{sale.id}</td>
                                    <td className="py-4 font-semibold text-slate-800">{sale.client}</td>
                                    <td className="py-4 text-slate-600">{sale.developer}</td>
                                    <td className="py-4 text-slate-500">{sale.service}</td>
                                    <td className="py-4 text-slate-400">{sale.date}</td>
                                    <td className="py-4 font-mono text-slate-500">{sale.paymentMethod}</td>
                                    <td className="py-4 font-bold text-slate-900">{sale.amount}</td>
                                    <td className="py-4 text-right">
                                        <span
                                            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${sale.status === 'Paid'
                                                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                                    : 'bg-amber-50 text-amber-600 border border-amber-100'
                                                }`}
                                        >
                                            {sale.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TotalSellPage;