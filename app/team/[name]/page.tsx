import { Timeline, TimelineItem } from 'flowbite-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface TeamMember {
    role: string;
    bio: string;
    github: string;
    linkedin: string;
    twitter: string;
    about: string;
    experience: { company: string; role: string; period: string }[];
    skills: string[];
    education: { institution: string; degree: string; period: string }[];
}

interface Params {
    name: string;
}

const memberInfo: Record<string, TeamMember> = {
    ambrose: {
        role: 'Lead Developer',
        bio: 'Expert in IoT systems and architecture.',
        github: '#',
        linkedin: '#',
        twitter: '#',
        about: 'Ambrose is a passionate developer with over 10 years of experience in building IoT solutions.',
        experience: [
            { company: 'Tech Innovations', role: 'Senior Developer', period: '2018-Present' },
            { company: 'Smart Systems Inc.', role: 'IoT Specialist', period: '2014-2018' },
        ],
        skills: ['JavaScript', 'IoT', 'Python', 'Node.js'],
        education: [
            { institution: 'University of Tech', degree: 'B.Sc. in Computer Science', period: '2010-2014' },
        ],
    },
    jelly: {
        role: 'Lead Developer',
        bio: 'Expert in IoT systems and architecture.',
        github: '#',
        linkedin: '#',
        twitter: '#',
        about: 'Ambrose is a passionate developer with over 10 years of experience in building IoT solutions.',
        experience: [
            { company: 'Tech Innovations', role: 'Senior Developer', period: '2018-Present' },
            { company: 'Smart Systems Inc.', role: 'IoT Specialist', period: '2014-2018' },
        ],
        skills: ['JavaScript', 'IoT', 'Python', 'Node.js'],
        education: [
            { institution: 'University of Tech', degree: 'B.Sc. in Computer Science', period: '2010-2014' },
        ],
    },
    cynthia: {
        role: 'Lead Developer',
        bio: 'Expert in IoT systems and architecture.',
        github: '#',
        linkedin: '#',
        twitter: '#',
        about: 'Ambrose is a passionate developer with over 10 years of experience in building IoT solutions.',
        experience: [
            { company: 'Tech Innovations', role: 'Senior Developer', period: '2018-Present' },
            { company: 'Smart Systems Inc.', role: 'IoT Specialist', period: '2014-2018' },
        ],
        skills: ['JavaScript', 'IoT', 'Python', 'Node.js'],
        education: [
            { institution: 'University of Tech', degree: 'B.Sc. in Computer Science', period: '2010-2014' },
        ],
    },
    Kevin: {
        role: 'IOT Expert and Spring Developer',
        bio: 'I am an aspiring Software Engineer with interest in building life changing solutions',
        github: 'https://github.com/mkb2001',
        linkedin: 'https://www.linkedin.com/in/kevin-mugarura-b3a621229/',
        twitter: 'https://x.com/KevinMugarura',
        about: 'Kevin is a passionate Web and IOT developer. ',
        experience: [
            { company: 'NSSF', role: 'Technology and Enterprise Solutions Intern', period: 'Jun-2024-Aug-2024' },
            { company: 'Afrilearn ', role: 'Backend Developer', period: '2022-Present' },
        ],
        skills: ['Java','Spring','IoT', 'Python', 'Node.js'],
        education: [
            { institution: 'Makerere University', degree: 'B.Sc. in Software Engineering', period: '2021-2026' },
        ],
    },
    // Other members...
};

export default function TeamMemberPage({ params }: { params: Params }) {
    const { name } = params;

    const member = memberInfo[name.toLowerCase()] || { role: '', bio: '', github: '', linkedin: '', twitter: '', about: '', experience: [], skills: [], education: [] };

    return (
        <section className="max-w-4xl mx-auto py-12">
            <div className="text-center mb-8">
                <img src={`/${name.toLowerCase()}.png`} alt={`${name} Avatar`} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300 shadow-sm" />
                <h1 className="text-4xl font-bold">{name}</h1>
                <h2 className="text-2xl text-gray-700">{member.role}</h2>
                <p className="text-lg text-gray-600">{member.bio}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">About</h3>
                    <p className="text-gray-700 leading-relaxed">{member.about}</p>
                </div>

                {/* Social Links */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Connect with {name}</h3>
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
                </div>
            </div>

            {/* Experience Section */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Experience</h3>
                <Timeline>
                    {member.experience.map((exp, index) => (
                        <TimelineItem key={index}  >
                            <h4 className="text-xl font-bold">{exp.company}</h4>
                            <p className="text-gray-600">{exp.role}</p>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>

            {/* Skills Section */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                        <span key={index} className="bg-indigo-500 text-white px-3 py-1 rounded-full">{skill}</span>
                    ))}
                </div>
            </div>

            {/* Education Section */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <Timeline>
                    {member.education.map((edu, index) => (
                        <TimelineItem key={index} >
                            <h4 className="text-xl font-bold">{edu.institution}</h4>
                            <p className="text-gray-600">{edu.degree}</p>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
}
