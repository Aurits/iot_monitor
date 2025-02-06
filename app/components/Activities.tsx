import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

export default function Activities() {
    return (
        <section id="activities" className="py-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Recent Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Activity 1 */}
                <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                    <h3 className="text-xl font-bold mb-4">Supervisor Meeting</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <FaCalendarAlt className="mr-2" /> August 03, 2024
                    </div>
                    <p className="text-gray-700 mb-4">The team met with the Supervisor to discuss about the project and confirm.</p>
                    <a href="/activities/iot-integration" className="text-indigo-500 hover:underline flex items-center">
                        Learn more <FaArrowRight className="ml-2" />
                    </a>
                </article>

                {/* Activity 2 */}
                <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                    <h3 className="text-xl font-bold mb-4">Factory Air Quality Audit</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <FaCalendarAlt className="mr-2" /> July 30, 2024
                    </div>
                    <p className="text-gray-700 mb-4">Completed a comprehensive air quality audit for a major factory...</p>
                    <a href="/activities/air-quality-audit" className="text-indigo-500 hover:underline flex items-center">
                        Learn more <FaArrowRight className="ml-2" />
                    </a>
                </article>

                {/* Activity 3 */}
                <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                    <h3 className="text-xl font-bold mb-4">Health & Safety Workshop</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <FaCalendarAlt className="mr-2" /> August 5, 2024
                    </div>
                    <p className="text-gray-700 mb-4">Conducted a workshop on the importance of air quality monitoring in industrial settings...</p>
                    <a href="/activities/health-safety-workshop" className="text-indigo-500 hover:underline flex items-center">
                        Learn more <FaArrowRight className="ml-2" />
                    </a>
                </article>
            </div>
        </section>
    );
}
