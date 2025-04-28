import { useUser } from "../../hooks/useUser"
import { usePaciente } from "../../hooks/usePaciente"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHead, CardHeader } from "../../components/ui/Card"
import { UserGroupIcon } from "@heroicons/react/24/outline"

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const { navigateTo } = useUser()
    const { pacientesList = [], getPacientesByEmailDoctor } = usePaciente()
    const [searchTerm, setSearchTerm] = useState("")
    // eslint-disable-next-line no-unused-vars
    const [itemsPerPage, setItemsPerPage] = useState(10)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            await getPacientesByEmailDoctor()
        } catch (error) {
            console.error("Error al obtener pacientes:", error)
        }
    }

    const filteredPacientes = pacientesList.filter((paciente) => {
        return (
            paciente?.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            paciente?.email?.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })

    return (
        <div className="flex flex-col gap-8">

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="flex flex-col gap-2">
                        <CardHead className="text-base font-normal flex gap-2">
                            Total Paciente
                            <UserGroupIcon className="h-5 w-5 text-gray-500" />
                        </CardHead>
                        <CardHead className="text-3xl font-bold">245</CardHead>
                        <CardDescription>+12 este mes</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="flex flex-col gap-2">
                        <CardHead className="text-base font-normal flex gap-2">
                            Total Paciente
                            <UserGroupIcon className="h-5 w-5 text-gray-500" />
                        </CardHead>
                        <CardHead className="text-3xl font-bold">245</CardHead>
                        <CardDescription>+12 este mes</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="flex flex-col gap-2">
                        <CardHead className="text-base font-normal flex gap-2">
                            Total Paciente
                            <UserGroupIcon className="h-5 w-5 text-gray-500" />
                        </CardHead>
                        <CardHead className="text-3xl font-bold">245</CardHead>
                        <CardDescription>+12 este mes</CardDescription>
                    </CardHeader>
                </Card>
            </div>

            {/* Filtro de búsqueda */}
            <div className="w-full md:w-1/3">
                <input
                    type="text"
                    placeholder="Buscar pacientes..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="relative -mt-9 pl-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Lista de pacientes */}
            <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">Lista de Pacientes</h2>
                </div>
                <table className="w-full border-collapse">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-3 text-left font-medium text-gray-700">Paciente</th>
                            <th className="p-3 text-left font-medium text-gray-700">Edad</th>
                            <th className="p-3 text-left font-medium text-gray-700">Género</th>
                            <th className="p-3 text-left font-medium text-gray-700">Grupo</th>
                            <th className="p-3 text-left font-medium text-gray-700">Última Visita</th>
                            <th className="p-3 text-left font-medium text-gray-700">Próxima Cita</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPacientes.length > 0 ? (
                            filteredPacientes.map((paciente, index) => (
                                <tr
                                    key={index}
                                    className={`border-t ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-gray-50`}
                                >
                                    <td className="p-3">{paciente?.nombre || 'Sin nombre'}</td>
                                    <td className="p-3">{paciente?.edad || '-'}</td>
                                    <td className="p-3">{paciente?.sexo || 'No especificado'}</td>
                                    <td className="p-3">{paciente?.grupoSanguineo || 'A+'}</td>
                                    <td className="p-3">{paciente?.ultimaVisita || '-'}</td>
                                    <td className="p-3">{paciente?.proximaCita || 'No programada'}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-4 text-center text-gray-500">
                                    No hay pacientes disponibles
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
