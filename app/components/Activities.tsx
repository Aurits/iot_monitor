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
                    <h3 className="text-xl font-bold mb-4">Data collection tool</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <FaCalendarAlt className="mr-2" /> September 15, 2024
                    </div>
                    <p className="text-gray-700 mb-4">We designed data collection tools for different categories i.e Factory workers, health workers, factory managers.
                     These were to guide us in gathering data and requirements.</p>
                    <a href="/activities/air-quality-audit" className="text-indigo-500 hover:underline flex items-center">
                        Learn more <FaArrowRight className="ml-2" />
                    </a>
                </article>

                {/* Activity 3 */}
                <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                    <h3 className="text-xl font-bold mb-4">Data collection and Reporting writing</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <FaCalendarAlt className="mr-2" /> October 18, 2024
                    </div>
                    <p className="text-gray-700 mb-4">The team went to the field and interviewed different people that included factory workers, factory supervisors,
                    health workers. All these provided valuable data that we analysed and gave us a clear conclusion. We submitted a report talking about our findings from the field work.</p>
                    <a href="/activities/health-safety-workshop" className="text-indigo-500 hover:underline flex items-center">
                        Learn more <FaArrowRight className="ml-2" />
                    </a>
                </article>

                {/* Activity 4 */}
                <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                    <h3 className="text-xl font-bold mb-4">Submission of SRS </h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <FaCalendarAlt className="mr-2" /> December 06, 2024
                    </div>
                    <p className="text-gray-700 mb-4">We compiles the requirements that we gathered and submitted a document describing them.</p>
                    <a href="/activities/health-safety-workshop" className="text-indigo-500 hover:underline flex items-center">
                        Learn more <FaArrowRight className="ml-2" />
                    </a>
                </article>
            </div>
        </section>
    );
}
