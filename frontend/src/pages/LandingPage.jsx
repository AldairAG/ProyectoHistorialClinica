import { useState } from "react";
import VentanaModal from "../components/ui/VentanaModal";
import Login from "../components/forms/Login";
import RegistrarUser from "../components/forms/RegistrarUser";
import MainDiv from "../components/ui/MainDiv";
import Logo from "../components/ui/Logo";
import { BotonSquare } from "../components/ui/Botones";
import { Badge, Card } from "../components/ui/Card";
import {
    ChevronRightIcon, ClockIcon, ShieldCheckIcon, UserGroupIcon,
    PresentationChartLineIcon, CloudArrowUpIcon, CheckCircleIcon
} from "@heroicons/react/24/outline";


const testimonios = [
    {
        nombre: "Dra. María Rodríguez",
        especialidad: "Médico de Familia",
        comentario: "La plataforma ha revolucionado mi consulta. Ahora puedo acceder al historial completo de mis pacientes en segundos, lo que me permite ofrecer una atención más personalizada y eficiente.",
        avatar: "https://via.placeholder.com/40"
    },
    {
        nombre: "Dr. Carlos Méndez",
        especialidad: "Cardiólogo",
        comentario: "La capacidad de compartir información con otros especialistas ha mejorado significativamente la coordinación en los casos complejos. Además, los pacientes valoran mucho no tener que repetir su historial en cada visita.",
        avatar: "https://via.placeholder.com/40"
    },
    {
        nombre: "Dra. Ana Gómez",
        especialidad: "Directora Clínica",
        comentario: "Implementar esta solución en nuestra clínica ha supuesto un antes y un después. Hemos reducido errores, optimizado recursos y mejorado la satisfacción tanto de pacientes como de profesionales.",
        avatar: "https://via.placeholder.com/40"
    }
];

const beneficios = [
    {
        titulo: "Reducción de errores médicos",
        descripcion: 'Minimiza errores de transcripción y mejora la legibilidad de la información clínica.'
    },
    {
        titulo: "Ahorro de tiempo",
        descripcion: 'Reduce hasta un 40% el tiempo dedicado a tareas administrativas.'
    },

    {
        titulo: "Mejor experiencia del paciente",
        descripcion: 'Atención más ágil y personalizada gracias al acceso inmediato al historial.'
    },

    {
        titulo: "Optimización de recursos",
        descripcion: 'Reduce costos operativos y mejora la eficiencia de los procesos clínicos.'
    }
]

const LandingPage = () => {
    const [isVisibleRegister, setIsVisibleRegister] = useState(false);
    const [isVisibleLogin, setIsVisibleLogin] = useState(false);

    return (
        <MainDiv className="bg-gray-50 w-full max-w-full">
            <div className="flex flex-col h-full bg-gray-50">
                <VentanaModal isOpen={isVisibleLogin} setOpen={() => setIsVisibleLogin(!isVisibleLogin)}
                    className={'md:max-w-lg'}
                >
                    <Login />
                </VentanaModal>
                <VentanaModal isOpen={isVisibleRegister} setOpen={() => setIsVisibleRegister(!isVisibleRegister)}>
                    <RegistrarUser />
                </VentanaModal>

                <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-gradient-to-r 
                    from-[#001b48] to-[#004581] sticky top-0 z-50 shadow-md justify-between">
                    <Logo />
                    <nav className="flex space-x-4 items-center">
                        <a>Características</a>
                        <a>Beneficios</a>
                        <a>Testimonios</a>
                        <a>Precios</a>
                        <BotonSquare onClick={() => setIsVisibleLogin(true)}>Iniciar sesión</BotonSquare>
                        <BotonSquare onClick={() => setIsVisibleRegister(true)}>Registrarse</BotonSquare>
                    </nav>
                </header>

                <main className="h-screen overflow-auto">

                    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#001b48]
                     via-[#004581] to-[#018abd]">
                        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                            <div className="space-y-2 ">
                                <div className="mb-4">
                                    <Badge className={'bg-white px-3 py-1 font-medium text-sm shadow-md'}>Solución Integral</Badge>
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">Historia Clínica Digital Inteligente</h1>

                                <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Optimiza la gestión de historias clínicas con nuestra plataforma segura, intuitiva y adaptada a las necesidades de profesionales de la salud.
                                    Optimiza la gestión de historias clínicas con nuestra plataforma segura, intuitiva y adaptada
                                    a las necesidades de profesionales de la salud.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 mt-8">
                                <a href="">
                                    <BotonSquare
                                        className={'hover:cursor-pointer'}
                                        onClick={() => setIsVisibleRegister(true)}
                                    >
                                        <span className="font-bold text-[#004581]">Solcitar demo gratuita</span>
                                    </BotonSquare>
                                </a>

                                <BotonSquare
                                    className={'flex hover:cursor-pointer'}
                                >
                                    <span className="font-bold text-[#004581]">Conocer mas</span>
                                    <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                                </BotonSquare>
                            </div>
                        </div>
                    </section>

                    <section
                        id="caracteristicas"
                        className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f5f9] relative">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#97cbdc] via-[#018abd] to-[#004581]" />
                        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                            <div className="flex flex-col items-center justify-center 
                                space-y-4 text-center">
                                <div className="space-y-2">
                                    <div className="inline-block rounded-full bg-gradient-to-r
                                 from-[#004581] to-[#018abd] px-4 py-1.5 text-sm
                                  text-white font-medium shadow-sm">
                                        Características Principales
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tighter 
                                    md:text-4xl text-[#001b48]">
                                        Todo lo que necesitas para gestionar historias
                                        clínicas
                                    </h2>
                                    <p className="max-w-[900px] text-[#004581] md:text-xl/relaxed 
                                    lg:text-base/relaxed xl:text-xl/relaxed">
                                        Nuestra plataforma está diseñada por y para profesionales
                                        de la salud, facilitando el registro, acceso y análisis
                                        de información clínica.
                                    </p>
                                </div>

                                <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3 justify-center">
                                    <Card className="w-full h-full flex flex-col justify-between group 
                                        border-0 hover:scale-105 hover:shadow-lg transition-transform 
                                        duration-300 hover:bg-blue-100">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full 
                                            bg-gradient-to-br from-[#004581] to-[#018abd] mx-auto shadow-md 
                                            group-hover:scale-110 transition-transform duration-300">
                                            <ClockIcon className="h-8 w-8 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#001b48]">
                                            Acceso Inmediato
                                        </h3>

                                        <p className="text-[#004581]">
                                            Consulta historias clínicas desde cualquier dispositivo, en cualquier
                                            momento y lugar.
                                        </p>
                                    </Card>

                                    <Card className="w-full h-full flex flex-col justify-between group 
                                        border-0 hover:scale-105 hover:shadow-lg transition-transform 
                                        duration-300">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full 
                                            bg-gradient-to-br from-[#018abd] to-[#97cbdc] mx-auto shadow-md 
                                            group-hover:scale-110 transition-transform duration-300">
                                            <ShieldCheckIcon className="h-8 w-8 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#001b48]">
                                            Seguridad Avanzada
                                        </h3>

                                        <p className="text-[#004581]">
                                            Protección de datos con encriptación de nivel hospitalario y
                                            cumplimiento de normativas.
                                        </p>
                                    </Card>

                                    <Card className="w-full h-full flex flex-col justify-between group 
                                        border-0 hover:scale-105 hover:shadow-lg transition-transform 
                                        duration-300">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-full 
                                            bg-gradient-to-br from-[#018abd] to-[#97cbdc] mx-auto shadow-md 
                                            group-hover:scale-110 transition-transform duration-300">
                                            <UserGroupIcon className="h-8 w-8 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#001b48]">
                                            Colaboración
                                        </h3>

                                        <p className="text-[#004581]">
                                            Facilita la comunicación entre especialistas y la continuidad asistencial.
                                        </p>
                                    </Card>

                                    <Card className="w-full h-full flex flex-col justify-between group 
                                        border-0 hover:scale-105 hover:shadow-lg transition-transform 
                                        duration-300">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-full 
                                            bg-gradient-to-br from-[#018abd] to-[#97cbdc] mx-auto shadow-md 
                                            group-hover:scale-110 transition-transform duration-300">
                                            <PresentationChartLineIcon className="h-8 w-8 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#001b48]">
                                            Análisis de Datos
                                        </h3>

                                        <p className="text-[#004581]">
                                            Genera informes y estadísticas para mejorar la toma de decisiones clínicas.
                                        </p>
                                    </Card>

                                    <Card className="w-full h-full flex flex-col justify-between group 
                                        border-0 hover:scale-105 hover:shadow-lg transition-transform 
                                        duration-300">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-full 
                                            bg-gradient-to-br from-[#018abd] to-[#97cbdc] mx-auto shadow-md 
                                            group-hover:scale-110 transition-transform duration-300">
                                            <CloudArrowUpIcon className="h-8 w-8 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#001b48]">
                                            Integración
                                        </h3>

                                        <p className="text-[#004581]">
                                            Compatible con sistemas hospitalarios y equipos médicos existentes.

                                        </p>
                                    </Card>

                                    <Card className="w-full h-full flex flex-col justify-between group 
                                        border-0 hover:scale-105 hover:shadow-lg transition-transform 
                                        duration-300">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-full 
                                            bg-gradient-to-br from-[#018abd] to-[#97cbdc] mx-auto shadow-md 
                                            group-hover:scale-110 transition-transform duration-300">
                                            <CheckCircleIcon className="h-8 w-8 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#001b48]">
                                            Personalización
                                        </h3>

                                        <p className="text-[#004581]">
                                            Adaptable a las necesidades específicas de cada especialidad médica.
                                        </p>
                                    </Card>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br 
                        from-[#f0f5f9] to-white relative overflow-hidden">

                        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative space-y-4">
                            <div className="inline-block rounded-full 
                                bg-gradient-to-r from-[#018abd] to-[#97cbdc] px-4 py-1.5 
                                text-sm text-white font-medium shadow-sm">
                                Beneficios
                            </div>

                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#001b48]">
                                Transformando la atención médica
                            </h2>
                            <p className="max-w-[600px] text-[#004581]/80 md:text-xl/relaxed 
                                lg:text-base/relaxed xl:text-xl/relaxed">
                                Nuestra plataforma no solo digitaliza historias clínicas, sino que mejora
                                todo el proceso de atención al paciente.
                            </p>

                            <ul className="grid gap-4 pt-4">
                                {beneficios.map((beneficio, index) => (
                                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/70 
                                        hover:bg-white hover:shadow-md transition-all duration-300 border 
                                        border-[#97cbdc]/20">

                                        <div className="flex h-10 w-10 shrink-0 items-center 
                                            justify-center rounded-full bg-gradient-to-br from-[#018abd] to-[#97cbdc] 
                                            shadow-sm">
                                            <CheckCircleIcon className="h-7 w-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#001b48]">{beneficio.titulo}</h3>
                                            <p className="text-sm text-[#004581]/80">{beneficio.descripcion}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </section>

                    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#001b48] to-[#004581] relative">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#004581] via-[#018abd] to-[#97cbdc]"></div>
                        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <div className="inline-block rounded-full bg-white px-4 py-1.5 text-sm text-[#004581] font-medium shadow-sm">Testimonios</div>
                                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white drop-shadow-md">Lo que dicen nuestros usuarios</h2>
                                    <p className="max-w-[900px] text-white md:text-xl lg:text-base xl:text-xl">Profesionales de la salud que ya han transformado su práctica con nuestra plataforma.</p>
                                </div>
                            </div>

                            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 justify-center">

                                {testimonios.map((testimonio, index) => (
                                    <div className="rounded-xl border border-[#97cbdc] border-opacity-30 
                                                    bg-gradient-to-br from-white to-[#dde8f0] bg-opacity-90 p-6 
                                                    shadow-md hover:shadow-lg transition-all duration-300 
                                                    hover:-translate-y-1"  key={index}>

                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#018abd] to-[#97cbdc] blur-sm"></div>
                                                    <img
                                                        alt="Avatar"
                                                        loading="lazy"
                                                        width="40"
                                                        height="40"
                                                        className="rounded-full relative z-10 border-2 border-white"
                                                        src={testimonio.avatar}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-[#001b48]">{testimonio.nombre}</h3>
                                                    <p className="text-sm text-[#004581] opacity-80">{testimonio.especialidad}</p>
                                                </div>
                                            </div>
                                            <p className="text-[#004581] opacity-80 italic">
                                                &quot;{testimonio.comentario}&quot;
                                            </p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </section>

                    <footer className="w-full border-t bg-gradient-to-r from-[#001b48] to-[#004581] py-8 
                    text-white">
                        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center 
                    justify-between gap-4 md:flex-row">
                            <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center 
                            shadow-md">
                                </div>
                                <span className="text-lg font-bold text-white">
                                    MediNote
                                </span>
                            </div>
                            <p className="text-center text-sm text-white md:text-left">
                                © 2025 MediNote. Todos los derechos reservados.
                            </p>
                            <nav className="flex gap-4 sm:gap-6">
                                <a className="text-sm font-medium text-white hover:text-[#97cbdc] 
                                        hover:underline underline-offset-4 transition-colors" href="#">
                                    Términos
                                </a>
                                <a className="text-sm font-medium text-white hover:text-[#97cbdc]
                                     hover:underline underline-offset-4 transition-colors" href="#">
                                    Privacidad
                                </a>
                                <a className="text-sm font-medium text-white 
                                    hover:text-[#97cbdc] hover:underline underline-offset-4 
                                    transition-colors" href="#">
                                    Contacto
                                </a>
                            </nav>
                        </div>
                    </footer>
                </main >

            </div >
        </MainDiv >
    );
};

export default LandingPage;
