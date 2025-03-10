import LabelXl from "../../components/ui/LabelXl"
import { usePaciente } from "../../hooks/usePaciente"

const EnfermedadesCronCard = () => {
    const { pacienteSelect } = usePaciente()
    return (
        <div className="bg-gray-50 p-5 rounded-md border border-gray-300 shadow-md flex flex-col">
            <div className="flex gap-2 items-center mb-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-heart-pulse" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                    <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                </svg>
                <LabelXl>Enfermedades Crónicas</LabelXl>
            </div>
            <label className="text-sm font-semibold text-gray-500 mb-3">Condiciones médicas de larga duración</label>

            <div className="max-h-[450px] flex flex-col gap-4 overflow-auto">
                {pacienteSelect?.enfermedadesCronicas?.map((item, index) => (
                    <div key={index}>
                        <div className="bg-gray-50 border border-gray-300 shadow-sm rounded-md flex flex-col p-4">
                            <label className="text-gray-700 font-semibold mb-2">{item.enfermedad}</label>
                            <label className="text-gray-600 text-sm"><span className="font-semibold text-gray-500">Fecha de diagnóstico:</span> {item.fechaDiagnostico}</label>
                            <label className="text-gray-600 text-sm mb-2"><span className="font-semibold text-gray-500">Tratamiento:</span>{item.tratamiento}</label>
                            <label className="text-sm font-semibold text-gray-600">{item.ultimaRev}</label>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default EnfermedadesCronCard;