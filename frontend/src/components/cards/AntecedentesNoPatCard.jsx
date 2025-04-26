import { usePaciente } from "../../hooks/usePaciente"
import { Card, CardContent, CardDescription, CardHead, CardHeader } from "../ui/Card"
import { AnpIcon } from "../icons/Icons"

const AntecedentesNoPatCard = () => {
    const { pacienteSelect } = usePaciente()
    return (
        <Card className={"p-0"}>
            <CardHead className={"p-4 bg-blue-50 w-full rounded-t-md"}>
                <CardHeader className={"text-2xl flex items-center gap-2 font-bold text-gray-900"}>
                    <AnpIcon className={'w-6 h-6 text-gray-700'} />
                    Antecedentes no patologicos
                </CardHeader>
                <CardDescription className="text-sm font-semibold text-gray-500">Vivienda, servicios y dieta</CardDescription>
            </CardHead>

            <CardContent className={'p-4'}>
                <div className="flex flex-col">
                    <label className="text-gray-700 text-md font-semibold">Vivienda</label>
                    <p className="text-gray-500 text-sm">
                        {[
                            pacienteSelect?.antecedentesNoPatologicos?.vivienda && `Casa ${pacienteSelect.antecedentesNoPatologicos.vivienda}`,
                            pacienteSelect?.antecedentesNoPatologicos?.habitaciones && `${pacienteSelect.antecedentesNoPatologicos.habitaciones} habitaciones`,
                            pacienteSelect?.antecedentesNoPatologicos?.habitantes && `${pacienteSelect.antecedentesNoPatologicos.habitantes} habitantes`,
                            pacienteSelect?.antecedentesNoPatologicos?.materialTecho && `techo de ${pacienteSelect.antecedentesNoPatologicos.materialTecho}`,
                            pacienteSelect?.antecedentesNoPatologicos?.materialPiso && `piso de ${pacienteSelect.antecedentesNoPatologicos.materialPiso}`,
                            pacienteSelect?.antecedentesNoPatologicos?.materialPared && `paredes de ${pacienteSelect.antecedentesNoPatologicos.materialPared}`
                        ]
                            .filter(Boolean) // Filtra valores falsy (null, undefined, "", 0 si no es válido)
                            .join(", ")}
                    </p>

                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 text-md font-semibold">Servicios</label>
                    <p className="text-gray-500 text-sm">
                        {[
                            pacienteSelect?.antecedentesNoPatologicos?.aguaPotable && "Agua potable",
                            pacienteSelect?.antecedentesNoPatologicos?.electricidad && "Electricidad",
                            pacienteSelect?.antecedentesNoPatologicos?.drenaje && "Drenaje",
                            pacienteSelect?.antecedentesNoPatologicos?.gas && "Gas",
                            pacienteSelect?.antecedentesNoPatologicos?.sanitario && "Sanitario"
                        ]
                            .filter(Boolean) // Filtra los valores `false` o `undefined`
                            .join(", ")}
                    </p>
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 text-md font-semibold">Dieta</label>
                    <p className="text-gray-500 text-sm">

                        <p className="text-gray-500 text-sm">
                            {[
                                pacienteSelect?.antecedentesNoPatologicos?.dieta && `Dieta: ${pacienteSelect.antecedentesNoPatologicos.dieta}`,
                                pacienteSelect?.antecedentesNoPatologicos?.higieneBucal && `Higiene bucal: ${pacienteSelect.antecedentesNoPatologicos.higieneBucal}`,
                                pacienteSelect?.antecedentesNoPatologicos?.comidasDiarias && `Comidas diarias: ${pacienteSelect.antecedentesNoPatologicos.comidasDiarias}`,
                                pacienteSelect?.antecedentesNoPatologicos?.evacuacionesDiarias && `Evacuaciones diarias: ${pacienteSelect.antecedentesNoPatologicos.evacuacionesDiarias}`,
                                pacienteSelect?.antecedentesNoPatologicos?.ingestaCarneBlanca && `Consume carne blanca: ${pacienteSelect.antecedentesNoPatologicos.ingestaCarneBlanca} veces por semana`,
                                pacienteSelect?.antecedentesNoPatologicos?.ingestaCarnePuerco && `Consume carne de puerco: ${pacienteSelect.antecedentesNoPatologicos.ingestaCarnePuerco} veces por semana`,
                                pacienteSelect?.antecedentesNoPatologicos?.ingestaCarneRoja && `Consume carne roja: ${pacienteSelect.antecedentesNoPatologicos.ingestaCarneRoja} veces por semana`,
                                pacienteSelect?.antecedentesNoPatologicos?.ingestaCereales && `Consume cereales: ${pacienteSelect.antecedentesNoPatologicos.ingestaCereales} veces por semana`,
                                pacienteSelect?.antecedentesNoPatologicos?.ingestaDulces && `Consume dulces: ${pacienteSelect.antecedentesNoPatologicos.ingestaDulces} veces por semana`,
                                pacienteSelect?.antecedentesNoPatologicos?.ingestaFrutas && `Consume frutas: ${pacienteSelect.antecedentesNoPatologicos.ingestaFrutas} veces por semana`,
                                pacienteSelect?.antecedentesNoPatologicos?.ingestaLeguminosas && `Consume leguminosas: ${pacienteSelect.antecedentesNoPatologicos.ingestaLeguminosas} veces por semana`,
                                pacienteSelect?.antecedentesNoPatologicos?.ingestaMariscos && `Consume mariscos: ${pacienteSelect.antecedentesNoPatologicos.ingestaMariscos} veces por semana`,
                                pacienteSelect?.antecedentesNoPatologicos?.ingestaPescado && `Consume pescado: ${pacienteSelect.antecedentesNoPatologicos.ingestaPescado} veces por semana`,
                                pacienteSelect?.antecedentesNoPatologicos?.ingestaVerduras && `Consume verduras: ${pacienteSelect.antecedentesNoPatologicos.ingestaVerduras} veces por semana`
                            ]
                                .filter(Boolean) // Filtra valores null, undefined, "" o 0 si no son válidos
                                .join(", ")}
                        </p>
                    </p>
                </div>
            </CardContent>

        </Card>
    )
}

export default AntecedentesNoPatCard

