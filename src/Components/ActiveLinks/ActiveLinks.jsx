'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveLinks = ({ href, children }) => {
    const pathname = usePathname();
    // console.log('pathname',pathname);
    // console.log('href',href);
    // const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

    const isActive = href === pathname;

    // console.log({
    //     pathname,
    //     href,
    //     isActive
    // });

  return  <Link
        href={href}
        className={`inline-flex items-center gap-2 text-sm font-medium px-3.5 py-1.5 rounded-lg border transition-all duration-200 ${isActive
                ? "border-indigo-200 bg-indigo-50/70 text-indigo-600 font-semibold"
                : "border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50"
            }`}
    >
        {isActive && (
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
        )}
        {children}
    </Link>

};

export default ActiveLinks;