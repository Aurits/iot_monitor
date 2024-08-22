import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <section id="contact" className="bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Have questions or want to collaborate? Reach out to us through the following channels.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                    <div className="flex items-center justify-center space-x-4">
                        <FaEnvelope className="text-indigo-600 text-3xl" />
                        <a href="mailto:info@iotmonitor.com" className="text-gray-700 hover:text-gray-900 text-lg">
                            info@iotmonitor.com
                        </a>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <FaPhone className="text-purple-600 text-3xl" />
                        <a href="tel:+123456789" className="text-gray-700 hover:text-gray-900 text-lg">
                            +1 234 567 89
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
