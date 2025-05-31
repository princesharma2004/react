export default function About() {
    return (
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
            <div className="container mx-auto px-6 md:px-12 xl:px-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-5/12">
                        <img
                            className="rounded-xl shadow-lg object-cover w-full h-80 md:h-96"
                            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                            alt="Elegant workspace"
                        />
                    </div>
                    <div className="md:w-7/12">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Passionate Developers, Elegant Solutions
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            React development is driven by creativity and innovation. Our team crafts seamless user experiences with modern, scalable solutions.
                        </p>
                        <p className="text-gray-600">
                            We believe in clean code, robust architecture, and a user-first approach. Let us help you bring your ideas to life with the power of React.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
