import LabelXl from "../../components/ui/LabelXl"
import { usePaciente } from "../../hooks/usePaciente"

const AntecedentesNoPatCard = () => {
    const { pacienteSelect } = usePaciente()
    return (
        <div className="bg-gray-100 border border-gray-300 rounded-sm p-4 flex-col flex gap-2">
            <div className="flex gap-3 items-center">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-houses" viewBox="0 0 16 16">
                        <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207z" />
                    </svg>
                </i>
                <LabelXl>Antecedentes no patologicos</LabelXl>
            </div>
            <label className="text-sm font-semibold text-gray-500">Vivienda, servicios y dieta</label>

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
        </div>
    )
}

export default AntecedentesNoPatCard

