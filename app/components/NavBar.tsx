"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaBlog, FaEnvelope, FaHome, FaTimes, FaUsers } from 'react-icons/fa';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md rounded-lg p-4 mb-8 relative">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    Factory Monitor
                </Link>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 focus:outline-none"
                        title={isOpen ? "Close menu" : "Open menu"} // Title for accessibility
                        aria-label={isOpen ? "Close menu" : "Open menu"} // ARIA label for screen readers
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-gray-900 flex items-center space-x-2">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                    <Link href="/#team" className="text-gray-700 hover:text-gray-900 flex items-center space-x-2">
                        <FaUsers />
                        <span>Team</span>
                    </Link>
                    <Link href="/#blog" className="text-gray-700 hover:text-gray-900 flex items-center space-x-2">
                        <FaBlog />
                        <span>Blog</span>
                    </Link>
                    <Link href="/#contact" className="text-gray-700 hover:text-gray-900 flex items-center space-x-2">
                        <FaEnvelope />
                        <span>Contact</span>
                    </Link>
                </div>
            </div>
            {/* Overlay Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full md:w-1/2">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-800 focus:outline-none"
                            title="Close menu" // Title for accessibility
                            aria-label="Close menu" // ARIA label for screen readers
                        >
                            <FaTimes size={24} />
                        </button>
                        <div className="flex flex-col space-y-6">
                            <Link href="/" className="text-gray-700 hover:text-gray-900 text-2xl flex items-center justify-center space-x-2">
                                <FaHome />
                                <span>Home</span>
                            </Link>
                            <Link href="/#team" className="text-gray-700 hover:text-gray-900 text-2xl flex items-center justify-center space-x-2">
                                <FaUsers />
                                <span>Team</span>
                            </Link>
                            <Link href="/#blog" className="text-gray-700 hover:text-gray-900 text-2xl flex items-center justify-center space-x-2">
                                <FaBlog />
                                <span>Blog</span>
                            </Link>
                            <Link href="/#contact" className="text-gray-700 hover:text-gray-900 text-2xl flex items-center justify-center space-x-2">
                                <FaEnvelope />
                                <span>Contact</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
