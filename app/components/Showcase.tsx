import Image from 'next/image';

export default function Showcase() {
    return (
        <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto px-6 py-16 text-center">
                <h1 className="text-5xl font-bold">IoT Monitor Project</h1>
                <p className="mt-6 text-lg">Innovating the way you monitor and manage IoT devices with real-time insights.</p>
                <div className="mt-12">
                    <Image
                        src="https://source.unsplash.com/random/800x400" // Replace with a relevant image
                        alt="IoT Monitor"
                        width={800}
                        height={400}
                        className="mx-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="relative z-10 bg-white rounded-t-lg mt-[-50px] p-6 shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Why IoT Monitor?</h2>
                <p className="text-gray-700 leading-relaxed">
                    The IoT Monitor Project is designed to give you unparalleled control over your devices, helping you track, manage, and optimize operations with ease.
                </p>
            </div>
        </section>
    );
}
