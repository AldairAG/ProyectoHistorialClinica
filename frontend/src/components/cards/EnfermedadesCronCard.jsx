import LabelXl from "../../components/ui/LabelXl"
import { usePaciente } from "../../hooks/usePaciente"
import { EnferCron } from "../icons/Icons"
import { Card, CardDescription, CardHead, CardHeader } from "../ui/Card"

const EnfermedadesCronCard = () => {
    const { pacienteSelect } = usePaciente()
    return (
        <Card className={'p-0'}>
            <CardHead className="flex flex-col p-4 bg-blue-50 w-full rounded-t-md">
                <CardHeader className={"flex items-center gap-2 text-2xl font-bold text-gray-900"}>
                    <EnferCron className='w-6 h-6 text-gray-500 ' />
                    Enfermedades Crónicas
                </CardHeader>
                <CardDescription className={'font-semibold'}>Condiciones médicas de larga duración</CardDescription>
            </CardHead>

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


        </Card>
    )
}

export default EnfermedadesCronCard;