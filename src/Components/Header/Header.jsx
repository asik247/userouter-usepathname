import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='bg-gray-400 text-black font-semibold w-full p-4'>
           <nav className='flex justify-center items-center gap-4'>
            <Link href={''}>Home</Link>
            <Link href={''}>About</Link>
            <Link href={''}>Projects</Link>
            <Link href={''}>Contact</Link>
           </nav>
        </div>
    );
};

export default Header;