import Link from 'next/link';
import React from 'react';
import ActiveLinks from '../ActiveLinks/ActiveLinks';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                        P
                    </div>
                    <span className="text-lg font-bold text-gray-900 tracking-tight">
                        Dev<span className="text-indigo-600">Peoples</span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav className="flex text-black items-center gap-1 sm:gap-2">
                    <ActiveLinks href="/">Home</ActiveLinks>
                    <ActiveLinks href="/about">About</ActiveLinks>
                    <ActiveLinks href="/about/aboutCompany">Company</ActiveLinks>
                    <ActiveLinks href="/people">Peoples</ActiveLinks>
                    <ActiveLinks href="/projects">Projects</ActiveLinks>
                    <ActiveLinks href="/contact">Contact</ActiveLinks>
                </nav>

            </div>
        </header>
    );
};

export default Header;