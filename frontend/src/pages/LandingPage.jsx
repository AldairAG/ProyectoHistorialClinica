
const LandingPage = () => {
    return (
        <div className="landing-page min-h-screen flex flex-col bg-neutral-50 text-gray-800">
            {/* Header */}
            <header className="w-full flex justify-end p-6 gap-4 bg-white shadow-sm">
                <button className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition">
                    Iniciar sesión
                </button>
                <button className="text-sm font-semibold bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Registrarse
                </button>
            </header>

            <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 flex-1">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Bienvenido a <span className="text-indigo-600">MediNote</span>
                    </h1>
                    <p className="text-lg mb-6 max-w-md">
                        MediNote es una solución innovadora para la gestión de historiales clínicos. Mejora la atención médica con acceso seguro, digital y eficiente.
                    </p>
                    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                        Comenzar ahora
                    </button>
                </div>

                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src="src\assets\lading-page.png"
                        alt="Visual de MediNote"
                        className="w-5xl h-auto rounded-xl shadow-lg"
                    />
                </div>
            </main>

            <footer className="bg-gray-100 w-full py-4 text-center text-sm text-gray-500 fixed bottom-0">
                © {new Date().getFullYear()} MediNote. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default LandingPage;
