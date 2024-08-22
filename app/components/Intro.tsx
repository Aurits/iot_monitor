import { FaLightbulb, FaTools, FaUsers } from 'react-icons/fa';

export default function Intro() {
    return (
        <section className="bg-white py-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Project Introduction</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    The IoT Monitor Project is an innovative solution that aims to revolutionize the monitoring and management of IoT devices. We focus on delivering real-time data insights and improving operational efficiency through cutting-edge technology.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <FaLightbulb className="text-indigo-600 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
                        <p className="text-gray-600">We are dedicated to providing the most innovative IoT monitoring solutions that meet your specific needs.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <FaTools className="text-purple-600 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Advanced Tools</h3>
                        <p className="text-gray-600">Utilize our advanced tools to ensure seamless operations and optimize device management.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <FaUsers className="text-teal-600 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Community Driven</h3>
                        <p className="text-gray-600">We believe in the power of community, working together to create solutions that benefit everyone.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
