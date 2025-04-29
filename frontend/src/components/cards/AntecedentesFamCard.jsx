import { usePaciente } from "../../hooks/usePaciente"
import { AntFam } from "../icons/Icons"
import { Card, CardDescription, CardHead, CardHeader } from "../ui/Card"

const AntecedentesFamCard = () => {
    const { pacienteSelect } = usePaciente()

    return (
        <Card className={"p-0"}>
            <CardHead className="flex flex-col p-4 bg-blue-50 w-full rounded-t-md">
                <CardHeader className={"flex items-center gap-2 text-2xl font-bold text-gray-900"}>
                    <AntFam className='w-6 h-6 text-gray-500 stroke-2' />
                    Antecedente Familiares
                </CardHeader>
                <CardDescription className={'font-semibold'}>Historial médico de familiares</CardDescription>
            </CardHead>


            {pacienteSelect?.antecedentesFams?.map((item, index) => (
                <div key={index} className="grid grid-cols-2 border-b border-gray-300 py-2">
                    <div className="flex items-center">
                        <label className="text-lg text-gray-600 font-semibold">{item.antecedente}</label>
                    </div>
                    <div className="flex justify-end items-center">
                        <label className="px-3 py border rounded-2xl border-gray-300 bg-gray-50">{item.familiar}</label>
                    </div>
                </div>
            ))}


        </Card>
    )
}

export default AntecedentesFamCard;