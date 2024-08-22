import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
    { name: 'Ambrose', role: 'Lead Developer', github: '#', linkedin: '#', twitter: '#', avatar: '/avator.png' },
    { name: 'Cynthia', role: 'UX Designer', github: '#', linkedin: '#', twitter: '#', avatar: '/avator.png' },
    { name: 'Jelly', role: 'Project Manager', github: '#', linkedin: '#', twitter: '#', avatar: '/avator.png' },
    { name: 'Kevin', role: 'IoT Specialist', github: '#', linkedin: '#', twitter: '#', avatar: '/avator.png' },
];

export default function TeamSection() {
    return (
        <section id="team" className="py-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <Link key={member.name} href={`/team/${member.name.toLowerCase()}`}>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow relative">
                            <img src={member.avatar} alt={`${member.name} Avatar`} className="w-16 h-16 rounded-full mx-auto -mt-12 mb-4 border-4 border-white shadow-sm" />
                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-700 mb-4">{member.role}</p>
                            <div className="flex justify-center space-x-4">
                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                                    <FaGithub size={24} />
                                </a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                                    <FaTwitter size={24} />
                                </a>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
