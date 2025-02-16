import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-700 text-white py-4 px-6 shadow-md">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-lg font-semibold hover:underline">
                    Home
                </Link>
            </nav>
        </header>
    );
};

export default Header;
