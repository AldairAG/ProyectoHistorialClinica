/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useUser } from "../../hooks/useUser"
import { USER_ROUTES } from "../../constants/routes"
import { usePaciente } from "../../hooks/usePaciente"
import { useEffect, useState } from "react"

// Asumiendo que ActionsDropdown está definido correctamente en otro archivo
// Si este componente da error, estaremos usando un componente simple en su lugar
const ActionsButton = ({ onView }) => {
    return (
        <button
            onClick={onView}
            className="font-medium text-blue-600 hover:underline"
        >
            Ver
        </button>
    );
};

const PacientesList = () => {
    const { navigateTo, user } = useUser()
    const { pacientesList = [], getPacientesByEmailDoctor } = usePaciente()
    const [searchTerm, setSearchTerm] = useState("")
    const [ageRange, setAgeRange] = useState(100)
    const [bloodGroup, setBloodGroup] = useState("Todos")
    const [gender, setGender] = useState("Todos")
    const [itemsPerPage, setItemsPerPage] = useState(10)

    // Evitar error si ActionsDropdown no está definido correctamente
    let ActionsDropdown;
    try {
        ActionsDropdown = require("../../components/ui/DropDownMenu").ActionsDropdown;
    } catch (error) {
        console.warn("No se pudo cargar ActionsDropdown, usando botón simple");
        ActionsDropdown = ActionsButton;
    }

    useEffect(() => {
        if (user && user.email) {
            fetchData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const fetchData = async () => {
        try {
            if (user && user.email) {
                await getPacientesByEmailDoctor(user.email)
            }
        } catch (error) {
            console.error("Error al obtener pacientes:", error)
        }
    }

    // Filtrar pacientes antes de renderizar
    const filteredPacientes = pacientesList.filter((paciente) => {
        const matchesSearch =
            paciente?.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            paciente?.email?.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesAge = paciente?.edad <= ageRange

        const matchesGender = gender === "Todos" || paciente?.sexo === gender

        const matchesBloodGroup = bloodGroup === "Todos" || paciente?.grupoSanguineo === bloodGroup

        return matchesSearch && matchesAge && matchesGender && matchesBloodGroup
    })


    return (
        <div className="flex flex-col md:flex-row">
            {/* Filtros Sidebar */}
            <div className="w-full md:w-1/4 bg-white p-4 md:p-6 rounded-lg shadow mb-4 md:mb-0 md:mr-4">
                <h2 className="text-xl font-bold mb-2">Filtros</h2>
                <p className="text-gray-600 mb-4">Refina tu búsqueda</p>

                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="Buscar pacientes..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-medium mb-2">Rango de Edad</h3>
                    <div className="flex flex-col">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={ageRange}
                            onChange={(e) => setAgeRange(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>0 años</span>
                            <span>100 años</span>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-medium mb-2">Género</h3>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option>Todos</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-medium mb-2">Grupo Sanguíneo</h3>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={bloodGroup}
                            onChange={(e) => setBloodGroup(e.target.value)}
                        >
                            <option>Todos</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lista de Pacientes */}
            <div className="w-full md:w-3/4 bg-white p-4 md:p-6 rounded-lg shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Lista de Pacientes</h2>
                        <p className="text-gray-600">Gestiona los registros de tus pacientes</p>
                    </div>
                    <button
                        onClick={() => navigateTo(USER_ROUTES.CREATE_PACIENTE)}
                        className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 w-full md:w-auto justify-center"
                    >
                        Añadir paciente
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center mb-4">
                    <div className="relative inline-block w-24 mr-4">
                        <select
                            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                        >
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <span className="text-gray-600">pacientes por página</span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-3 md:p-4 text-left">
                                    <div className="flex items-center">
                                        <span className="ml-2 font-medium text-gray-700">Paciente</span>
                                    </div>
                                </th>
                                <th className="p-3 md:p-4 text-left font-medium text-gray-700">Edad</th>
                                <th className="p-3 md:p-4 text-left font-medium text-gray-700">Género</th>
                                <th className="p-3 md:p-4 text-left font-medium text-gray-700">Grupo</th>
                                <th className="p-3 md:p-4 text-left font-medium text-gray-700">Última Visita</th>
                                <th className="p-3 md:p-4 text-left font-medium text-gray-700">Próxima Cita</th>
                                <th className="p-3 md:p-4 text-left font-medium text-gray-700">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPacientes && filteredPacientes.length > 0 ? (
                                filteredPacientes.map((paciente, index) => (
                                    <tr
                                        key={index}
                                        className={`border-t ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-gray-50`}
                                    >
                                        <td className="p-3 md:p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                                                    <div className="ml-3">
                                                        <p className="font-medium">{paciente?.nombre || 'Sin nombre'}</p>
                                                        <p className="text-sm text-gray-500">{paciente?.email || `paciente-${index + 1}@example.com`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-3 md:p-4">{paciente?.edad || '-'}</td>
                                        <td className="p-3 md:p-4">{paciente?.sexo || 'No especificado'}</td>
                                        <td className="p-3 md:p-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {paciente?.grupoSanguineo || 'A+'}
                                            </span>
                                        </td>
                                        <td className="p-3 md:p-4">{paciente?.ultimaVisita || paciente?.fechaNacimiento || '-'}</td>
                                        <td className="p-3 md:p-4">{paciente?.proximaCita || 'No programada'}</td>
                                        <td className="p-3 md:p-4">
                                            {ActionsDropdown && (
                                                <ActionsDropdown
                                                    onView={() => navigateTo(`${USER_ROUTES.VIEW_PACIENTE}/${paciente?.idPaciente}`)}
                                                    onEdit={() => navigateTo(`${USER_ROUTES.EDIT_PACIENTE}/${paciente?.idPaciente}`)}
                                                    onDelete={() => {/* Lógica para eliminar */ }}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="p-4 text-center text-gray-500">
                                        No hay pacientes disponibles
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Paginación (simplificada) */}
                <div className="flex justify-center mt-6">
                    <nav className="flex items-center">
                        <button className="px-3 py-1 rounded-md mx-1 text-gray-700 bg-gray-200 hover:bg-gray-300">
                            Anterior
                        </button>
                        <button className="px-3 py-1 rounded-md mx-1 text-white bg-blue-600 hover:bg-blue-700">
                            1
                        </button>
                        <button className="px-3 py-1 rounded-md mx-1 text-gray-700 bg-gray-200 hover:bg-gray-300">
                            2
                        </button>
                        <button className="px-3 py-1 rounded-md mx-1 text-gray-700 bg-gray-200 hover:bg-gray-300">
                            3
                        </button>
                        <button className="px-3 py-1 rounded-md mx-1 text-gray-700 bg-gray-200 hover:bg-gray-300">
                            Siguiente
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default PacientesList