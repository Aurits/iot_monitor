"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md rounded-lg p-4 mb-8">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    Factory Monitor
                </Link>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 focus:outline-none"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <Link href="/" className="text-gray-700 hover:text-gray-900 block mt-2 md:mt-0">
                        Home
                    </Link>
                    <Link href="/#team" className="text-gray-700 hover:text-gray-900 block mt-2 md:mt-0">
                        Team
                    </Link>
                    <Link href="/#blog" className="text-gray-700 hover:text-gray-900 block mt-2 md:mt-0">
                        Blog
                    </Link>
                    <Link href="/#contact" className="text-gray-700 hover:text-gray-900 block mt-2 md:mt-0">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
