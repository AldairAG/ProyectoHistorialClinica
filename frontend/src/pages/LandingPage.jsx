import { useState } from "react";
import VentanaModal from "../components/ui/VentanaModal";
import Login from "../components/forms/Login";
import RegistrarUser from "../components/forms/RegistrarUser";
import MainDiv from "../components/ui/MainDiv";
import img1 from "../assets/lading-page.png";

const LandingPage = () => {
    const [isVisibleRegister, setIsVisibleRegister] = useState(false);
    const [isVisibleLogin, setIsVisibleLogin] = useState(false);

    return (
        <MainDiv className="bg-gray-50 w-full max-w-full">
            <div className="flex flex-col h-full bg-gray-50">
                <VentanaModal isOpen={isVisibleLogin} setOpen={() => setIsVisibleLogin(!isVisibleLogin)}>
                    <Login />
                </VentanaModal>

                <VentanaModal isOpen={isVisibleRegister} setOpen={() => setIsVisibleRegister(!isVisibleRegister)}>
                    <RegistrarUser />
                </VentanaModal>

                {/* Header */}
                <header className="w-full flex justify-end p-6 gap-4 shadow-sm bg-blue-600">
                    <button
                        onClick={() => setIsVisibleLogin(!isVisibleRegister)}
                        className="text-sm font-semibold text-blue-950 hover:text-white transition">
                        Iniciar sesión
                    </button>
                    <button
                        onClick={() => setIsVisibleRegister(!isVisibleRegister)}
                        className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Registrarse
                    </button>
                </header>

                {/* Cuerpo principal */}
                <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 flex-1">
                    {/* Sección izquierda */}
                    <div className="md:w-1/2 flex flex-col gap-10">

                        {/* Parte superior: Título, descripción, botón */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Bienvenido a <span className="text-blue-600">MediNote</span>
                            </h1>
                            <p className="text-lg mb-6 max-w-md">
                                MediNote es una solución innovadora para la gestión de historiales clínicos. Mejora la atención médica con acceso seguro, digital y eficiente.
                            </p>
                            <button
                                onClick={() => setIsVisibleRegister(!isVisibleRegister)}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                                Comenzar ahora
                            </button>
                        </div>

                        {/* Parte inferior: 3 columnas */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
                            <div>
                                <h2 className="font-semibold mb-2">🧠 Funcionalidades Clave</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Registro de pacientes</li>
                                    <li>Historial clínico</li>
                                    <li>Recetas digitales</li>
                                    <li>Calendario de citas</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-semibold mb-2">📊 Beneficios Directos</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Menos errores médicos</li>
                                    <li>Mayor productividad</li>
                                    <li>Seguimiento continuo</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-semibold mb-2">🛠️ Tecnología Usada</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>App web responsive</li>
                                    <li>Cifrado de datos</li>
                                    <li>Arquitectura escalable</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sección derecha: Imagen */}
                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                        <img
                            src={img1}	
                            alt="Visual de MediNote"
                            className="w-5xl  h-auto rounded-xl shadow-lg"
                        />
                    </div>
                </main>

                <footer className="bg-gray-100 w-full py-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} MediNote. Todos los derechos reservados.
                </footer>
            </div>

        </MainDiv>
    );
};

export default LandingPage;
