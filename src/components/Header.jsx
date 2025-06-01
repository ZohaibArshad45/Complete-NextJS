import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-[#F4F7FF] text-blue-800 fixed w-full z-50 py-4 px-6 rounded-xl shadow-md p-5 border ">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-lg font-semibold hover:underline">
                    Home
                </Link>
            </nav>
        </header>
    );
};

export default Header;
