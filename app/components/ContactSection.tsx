import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">Have questions or want to collaborate? Reach out to us through the following channels.</p>
                <div className="flex justify-center space-x-8">
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-indigo-600 text-3xl" />
                        <a href="mailto:info@iotmonitor.com" className="text-gray-700 hover:text-gray-900 text-lg">
                            info@iotmonitor.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
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
