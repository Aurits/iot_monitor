import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

export default function Blog() {
    return (
        <section id="blog" className="py-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Blog Post 1 */}
                <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                    <h3 className="text-xl font-bold mb-4">Enhancing Air Quality in Factories</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <FaCalendarAlt className="mr-2" /> July 15, 2024
                    </div>
                    <p className="text-gray-700 mb-4">Learn how air quality monitoring improves health and efficiency in factory environments...</p>
                    <a href="/blog/enhancing-air-quality" className="text-indigo-500 hover:underline flex items-center">
                        Read more <FaArrowRight className="ml-2" />
                    </a>
                </article>

                {/* Blog Post 2 */}
                <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                    <h3 className="text-xl font-bold mb-4">Innovations in IoT Monitoring</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <FaCalendarAlt className="mr-2" /> August 1, 2024
                    </div>
                    <p className="text-gray-700 mb-4">Discover the latest advancements in IoT monitoring for air quality and industrial safety...</p>
                    <a href="/blog/iot-monitoring-innovations" className="text-indigo-500 hover:underline flex items-center">
                        Read more <FaArrowRight className="ml-2" />
                    </a>
                </article>

                {/* Blog Post 3 */}
                <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                    <h3 className="text-xl font-bold mb-4">The Future of Factory Safety</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <FaCalendarAlt className="mr-2" /> August 10, 2024
                    </div>
                    <p className="text-gray-700 mb-4">Explore how real-time air quality monitoring is shaping the future of factory safety...</p>
                    <a href="/blog/factory-safety-future" className="text-indigo-500 hover:underline flex items-center">
                        Read more <FaArrowRight className="ml-2" />
                    </a>
                </article>
            </div>
        </section>
    );
}
