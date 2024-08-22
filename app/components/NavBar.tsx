import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-white shadow-md rounded-lg p-4 mb-8">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    Factory Monitor
                </Link>
                <div className="flex space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/#team" className="text-gray-700 hover:text-gray-900">
                        Team
                    </Link>
                    <Link href="/#blog" className="text-gray-700 hover:text-gray-900">
                        Blog
                    </Link>
                    <Link href="/#contact" className="text-gray-700 hover:text-gray-900">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
