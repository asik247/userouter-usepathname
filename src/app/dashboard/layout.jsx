'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashBoardLayout = ({ children }) => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Overview', href: '/dashboard', icon: '📊' },
        { label: 'Total Sells', href: '/dashboard/totalsellpage', icon: '💰' },
        { label: 'Manage Developers', href: '/dashboard/manage-peoples', icon: '👥' },
        { label: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
        { label: 'Settings', href: '/dashboard/setting', icon: '⚙️' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">

            {/* Sidebar Section */}
            <aside className="w-full md:w-64 bg-white border-r border-gray-100 shadow-sm flex flex-col justify-between p-5">
                <div>
                    {/* Dashboard Brand / Logo */}
                    <Link href={'/dashboard'} className="flex items-center gap-2.5 pb-6 mb-6 border-b border-gray-100">
                        <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                            D
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-slate-900 leading-tight">DevDashboard</h2>
                            <span className="text-[11px] text-emerald-600 font-medium">● System Live</span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <nav className="space-y-1.5">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
                            Main Menu
                        </span>

                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${isActive
                                            ? 'bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100/50'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                >
                                    <span className="text-base">{item.icon}</span>
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Sidebar Footer / Exit */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 px-3 py-2 transition-colors"
                    >
                        ← Back to Website
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Top Header Bar */}
                <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between shadow-xs">
                    <h1 className="text-base font-bold text-slate-900">Dashboard Console</h1>
                    <div className="flex items-center gap-3">
                        <span className="text-xs bg-indigo-50 text-indigo-600 font-semibold px-3 py-1 rounded-full border border-indigo-100">
                            Admin Access
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-200 border border-indigo-500 flex items-center justify-center text-xs font-bold text-slate-700">
                            AD
                        </div>
                    </div>
                </header>

                {/* Page Content Rendered Here */}
                <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
                    {children}
                </main>

            </div>

        </div>
    );
};

export default DashBoardLayout;