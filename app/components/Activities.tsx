export default function Activities() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-6">Recent Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Add Activity Items here */}
                <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-4">Activity Title</h3>
                    <p className="text-gray-700">This is a brief description of the activity...</p>
                </article>
                {/* Repeat for more activities */}
            </div>
        </section>
    );
}
