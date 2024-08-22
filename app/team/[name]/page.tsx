import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface TeamMember {
    role: string;
    bio: string;
    github: string;
    linkedin: string;
    twitter: string;
}

interface Params {
    name: string;
}

const memberInfo: Record<string, TeamMember> = {
    ambrose: { role: 'Lead Developer', bio: 'Expert in IoT systems and architecture.', github: '#', linkedin: '#', twitter: '#' },
    cynthia: { role: 'UX Designer', bio: 'Passionate about user experience and design.', github: '#', linkedin: '#', twitter: '#' },
    jelly: { role: 'Project Manager', bio: 'Ensures smooth project execution.', github: '#', linkedin: '#', twitter: '#' },
    kevin: { role: 'IoT Specialist', bio: 'Focuses on IoT device integration.', github: '#', linkedin: '#', twitter: '#' },
};

export default function TeamMemberPage({ params }: { params: Params }) {
    const { name } = params;

    const member = memberInfo[name.toLowerCase()] || { role: '', bio: '', github: '', linkedin: '', twitter: '' };

    return (
        <section className="max-w-4xl mx-auto py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">{name}</h1>
            <h2 className="text-2xl text-gray-700 mb-4">{member.role}</h2>
            <p className="text-lg text-gray-600 mb-8">{member.bio}</p>
            <div className="flex justify-center space-x-8">
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                    <FaGithub size={32} />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                    <FaLinkedin size={32} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                    <FaTwitter size={32} />
                </a>
            </div>
        </section>
    );
}
