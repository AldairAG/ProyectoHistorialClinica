import { useState} from "react";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { USER_ROUTES } from "../../constants/routes"
import { Calendar, Clock, User, MapPin, ChevronLeft, ChevronRight, Search, List } from "lucide-react";


const mockAppointments = [
    {
        id: 1,
        nombre: "Juan Pérez",
        telefono: "555-123-4567",
        motivo: "Consulta general",
        fecha: "2025-04-15",
        hora: "10:00",
        estado: 'Pendiente',
    },
    {
        id: 2,
        nombre: "María López",
        telefono: "555-987-6543",
        motivo: "Seguimiento",
        fecha: "2025-04-15",
        hora: "11:30",
        estado: 'Pendiente',
    },
    {
        id: 3,
        nombre: "Carlos Rodríguez",
        telefono: "555-456-7890",
        motivo: "Primera consulta",
        fecha: "2025-04-15",
        hora: "16:00",
        estado: 'Pendiente',
    },
    {
        id: 4,
        nombre: "Ana Martínez",
        telefono: "555-234-5678",
        motivo: "Revisión",
        fecha: "2025-04-16",
        hora: "09:30",
        estado: 'Pendiente',
    },
    {
        id: 5,
        nombre: "Roberto Gómez",
        telefono: "555-876-5432",
        motivo: "Dolor de espalda",
        fecha: "2025-04-16",
        hora: "12:00",
        estado: 'Pendiente',
    },
    {
        id: 6,
        nombre: "Laura Sánchez",
        telefono: "555-111-2222",
        motivo: "Dolor de cabeza",
        fecha: "2025-04-01",
        hora: "09:00",
        estado: 'Pendiente',
    },
    {
        id: 7,
        nombre: "Pedro Ramírez",
        telefono: "555-333-4444",
        motivo: "Consulta dermatológica",
        fecha: "2025-04-02",
        hora: "10:30",
        estado: 'Finalizada',
    },
    {
        id: 8,
        nombre: "Sofía Torres",
        telefono: "555-555-6666",
        motivo: "Control de presión",
        fecha: "2025-04-03",
        hora: "15:00",
        estado: 'Cancelada',
    },
]

const CitasMedicas = () => {
    const [viewMode, setViewMode] = useState("calendario");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("Todas");
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Function to get initials from name
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(part => part.charAt(0))
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };

    // Filter appointments based on search term and selected status
    const filteredAppointments = mockAppointments.filter(appointment => {
        const matchesSearch = appointment.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.telefono.includes(searchTerm);
        const matchesStatus = selectedStatus === "Todas" || appointment.estado === selectedStatus;
        return matchesSearch && matchesStatus;
    });

    // Filter appointments for selected date
    const appointmentsForSelectedDate = mockAppointments.filter(appointment => {
        return appointment.fecha === format(selectedDate, "yyyy-MM-dd");
    });

    // Get dates with appointments
    const datesWithAppointments = [...new Set(mockAppointments.map(app => app.fecha))];

    // Navigate month
    const navigateMonth = (direction) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(newMonth.getMonth() + direction);
        setCurrentMonth(newMonth);
    };

    // Generate calendar data for the current month view
    const generateCalendarDays = () => {
        const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
        // eslint-disable-next-line no-unused-vars
        const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
        const startDate = new Date(monthStart);

        // Adjust to start from Monday (1) instead of Sunday (0)
        const startDay = monthStart.getDay() || 7;
        startDate.setDate(startDate.getDate() - (startDay - 1));

        const days = [];
        const totalDays = 42; // 6 weeks

        for (let i = 0; i < totalDays; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);

            // Check if this date has appointments
            const dateString = format(currentDate, "yyyy-MM-dd");
            const hasAppointment = datesWithAppointments.includes(dateString);

            // Check if date is in current month
            const isCurrentMonth = currentDate.getMonth() === monthStart.getMonth();

            days.push({
                date: currentDate,
                day: currentDate.getDate(),
                hasAppointment,
                isCurrentMonth
            });
        }

        return days;
    };

    // Group days into weeks
    const calendarWeeks = () => {
        const days = generateCalendarDays();
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }
        return weeks;
    };

    return (
        <main className="p-4">
            {/* Navigation Tabs */}
            <div className="flex items-center mb-6 justify-between">
                <div className="inline-flex rounded-md shadow-sm">
                    <button
                        type="button"
                        className={`inline-flex items-center px-4 py-2 rounded-l-lg ${viewMode === "calendario" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                            }`}
                        onClick={() => setViewMode("calendario")}
                    >
                        <Calendar className="mr-2 h-4 w-4" />
                        Calendario
                    </button>
                    <button
                        type="button"
                        className={`inline-flex items-center px-4 py-2 rounded-r-lg ${viewMode === "lista" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                            }`}
                        onClick={() => setViewMode("lista")}
                    >
                        <List className="mr-2 h-4 w-4" />
                        Lista
                    </button>
                </div>
            </div>

            {/* Calendar View */}
            {viewMode === "calendario" && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold">Calendario de Consultas</h1>
                        <p className="text-gray-600">Visualiza y gestiona las consultas programadas</p>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold">
                            {format(currentMonth, "MMMM yyyy", { locale: es })}
                        </h2>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => navigateMonth(-1)}
                                className="p-2 rounded-full hover:bg-gray-100"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => navigateMonth(1)}
                                className="p-2 rounded-full hover:bg-gray-100"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="mb-6">
                        <div className="grid grid-cols-7 gap-1 mb-1">
                            {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day) => (
                                <div key={day} className="text-center font-medium py-2">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {calendarWeeks().map((week, weekIndex) => (
                            <div key={weekIndex} className="grid grid-cols-7 gap-1">
                                {week.map((day, dayIndex) => (
                                    <div
                                        key={dayIndex}
                                        className={`
                      aspect-square p-1 border rounded-lg flex flex-col items-center justify-center
                      ${day.isCurrentMonth ? "" : "text-gray-300"}
                      ${day.hasAppointment && day.isCurrentMonth ? "border-blue-500" : "border-gray-200"}
                      ${format(day.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd") ? "bg-blue-50 border-blue-500" : ""}
                      cursor-pointer hover:bg-gray-50
                    `}
                                        onClick={() => setSelectedDate(day.date)}
                                    >
                                        <span className="text-md">{day.day}</span>
                                        {day.hasAppointment && day.isCurrentMonth && (
                                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-1"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Appointments for Selected Date */}
                    <div className="mt-6">
                        <h3 className="text-lg font-medium mb-4">
                            Citas para {format(selectedDate, "PPP", { locale: es })}
                        </h3>

                        {appointmentsForSelectedDate.length > 0 ? (
                            <div className="space-y-4">
                                {appointmentsForSelectedDate.map((appointment) => (
                                    <div key={appointment.id} className="bg-white border rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-medium">
                                                    {getInitials(appointment.nombre)}
                                                </div>
                                            </div>

                                            <div className="flex-grow">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-semibold text-lg">{appointment.nombre}</h4>
                                                        <p className="text-sm text-gray-500">
                                                            {appointment.telefono}
                                                        </p>
                                                        <p className="text-gray-700">{appointment.motivo}</p>
                                                    </div>

                                                    <div className="text-right">
                                                        <span className="inline-block rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                                                            {appointment.estado}
                                                        </span>
                                                        <div className="flex items-center mt-1 text-gray-600">
                                                            <Calendar className="h-4 w-4 mr-1" />
                                                            <span className="text-sm">{format(new Date(appointment.fecha), "d 'de' MMMM, yyyy", { locale: es })}</span>
                                                        </div>
                                                        <div className="flex items-center mt-1 text-gray-600">
                                                            <Clock className="h-4 w-4 mr-1" />
                                                            <span className="text-sm">{appointment.hora}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4 flex gap-2">
                                                    <label
                                                        onClick={() => window.location.href = `${USER_ROUTES.VIEW_PACIENTE}/${appointment.idPaciente}`}
                                                        className="font-medium text-blue-600 hover:underline cursor-pointer px-4 py-2 border border-blue-600 rounded-md"
                                                    >
                                                        Ver Paciente
                                                    </label>

                                                    <button
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                                    >
                                                        Completar
                                                    </button>

                                                    <button
                                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                                                    >
                                                        Cancelar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">No hay citas programadas para esta fecha.</p>
                        )}
                    </div>
                </div>
            )}

            {/* List View */}
            {viewMode === "lista" && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Filters Panel */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-2">Filtros</h2>
                        <p className="text-gray-600 mb-4">Refina tu búsqueda</p>

                        <div className="mb-6">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <input
                                    type="text"
                                    placeholder="Buscar consultas..."
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-medium mb-2">Estado</h3>
                            <div className="space-y-2">
                                {["Todas", "Pendiente", "Finalizada", "Cancelada"].map((status) => (
                                    <div key={status} className="flex items-center">
                                        <input
                                            type="radio"
                                            id={status}
                                            name="status"
                                            checked={selectedStatus === status}
                                            onChange={() => setSelectedStatus(status)}
                                            className="w-4 h-4 text-blue-600"
                                        />
                                        <label htmlFor={status} className="ml-2">
                                            {status}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Appointments List */}
                    <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-2">Lista de Consultas</h2>
                        <p className="text-gray-600 mb-6">Gestiona las consultas médicas</p>

                        {filteredAppointments.length > 0 ? (
                            <div className="space-y-6">
                                {filteredAppointments.map((appointment) => (
                                    <div key={appointment.id} className="border-b pb-6 last:border-0">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-medium">
                                                    {getInitials(appointment.nombre)}
                                                </div>
                                            </div>

                                            <div className="flex-grow">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-lg">{appointment.nombre}</h3>
                                                        <p className="text-sm text-gray-500">
                                                            {appointment.telefono}
                                                        </p>
                                                        <p className="text-gray-700">{appointment.motivo}</p>
                                                    </div>

                                                    <div className="text-right">
                                                        <span className="inline-block rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                                                            {appointment.estado}
                                                        </span>
                                                        <div className="flex items-center justify-end mt-1 text-gray-600">
                                                            <Calendar className="h-4 w-4 mr-1" />
                                                            <span className="text-sm">{format(new Date(appointment.fecha), "d 'de' MMMM, yyyy", { locale: es })}</span>
                                                        </div>
                                                        <div className="flex items-center justify-end mt-1 text-gray-600">
                                                            <Clock className="h-4 w-4 mr-1" />
                                                            <span className="text-sm">{appointment.hora}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4 flex gap-2">
                                                    <label
                                                        onClick={() => window.location.href = `${USER_ROUTES.VIEW_PACIENTE}/${appointment.idPaciente}`}
                                                        className="font-medium text-blue-600 hover:underline cursor-pointer px-4 py-2 border border-blue-600 rounded-md"
                                                    >
                                                        Ver Paciente
                                                    </label>

                                                    <button
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                                    >
                                                        Completar
                                                    </button>

                                                    <button
                                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                                                    >
                                                        Cancelar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">No se encontraron resultados.</p>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default CitasMedicas;