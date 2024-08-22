export default function Showcase() {
    return (
        <section
            className="relative bg-cover bg-center text-white"
            style={{ backgroundImage: 'url("/showcase.jpg")', minHeight: '500px' }}
        >
            {/* Overlay to make text stand out */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative container mx-auto px-6 py-16 text-center">
                <h1 className="text-5xl font-bold">Factory Air Condition Monitoring for Improved Health</h1>
                <p className="mt-6 text-lg">
                    Innovating the way you monitor and manage air quality with real-time insights.
                </p>
            </div>
            <div className="relative z-10 bg-white rounded-t-lg mt-[-50px] p-6 shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Air Condition Monitoring?</h2>
                <p className="text-gray-700 leading-relaxed">
                    The Factory Air Condition Monitoring Project is designed to give you unparalleled control over air quality, helping you track, manage, and optimize factory environments with ease.
                </p>
            </div>
        </section>
    );
}
