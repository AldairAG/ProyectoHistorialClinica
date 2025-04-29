import { usePaciente } from "../../hooks/usePaciente";
import { AntPat } from "../icons/Icons";
import { Card, CardDescription, CardHead, CardHeader } from "../ui/Card";

const AntecedentesPatCard = () => {
    const { pacienteSelect } = usePaciente()

    return (

        <Card className={'p-0'}>
            <CardHead className="flex flex-col p-4 bg-blue-50 w-full rounded-t-md">
                <CardHeader className={"flex items-center gap-2 text-2xl font-bold text-gray-900"}>
                    <AntPat className='w-6 h-6 text-gray-500 ' />
                    Antecedentes Patológicos
                </CardHeader>
                <CardDescription className={'font-semibold'}>Condiciones médicas previas</CardDescription>
            </CardHead>

            <div className="p-4">
                {pacienteSelect?.antecedentesPatologicos?.tabaquismo != 'NO' && (
                    <div>
                        <label className="text-md text-gray-600 font-semibold">Tabaquismo</label>
                        <p className="text-sm text-gray-500">
                            {[
                                pacienteSelect?.antecedentesPatologicos?.cigarrillosDia && `El paciente lleva ${pacienteSelect.antecedentesPatologicos.tiempoFumando} años fumando, `,
                                pacienteSelect?.antecedentesPatologicos?.tiempoFumando && ` un promedio de ${pacienteSelect.antecedentesPatologicos.cigarrillosDia} cigarros diarios`,
                                pacienteSelect?.antecedentesPatologicos?.indiceTabaquico && ` con un indice tabaquico de  ${pacienteSelect.antecedentesPatologicos.indiceTabaquico}`
                            ].filter(Boolean)}
                        </p>
                    </div>
                )}

                {pacienteSelect?.antecedentesPatologicos?.alcoholismo != 'NO' && (
                    <div>
                        <label className="text-md text-gray-600 font-semibold">Alcohlismo</label>
                        <p className="text-sm text-gray-500">
                            {[
                                pacienteSelect?.antecedentesPatologicos?.tiempoTomando && `El paciente lleva ${pacienteSelect.antecedentesPatologicos.vivienda} años tomando, `,
                                pacienteSelect?.antecedentesPatologicos?.copasSemanales && ` un promedio de ${pacienteSelect.antecedentesPatologicos.vivienda} copas semanales`,

                            ].filter(Boolean)}
                        </p>
                    </div>
                )}

                <div>
                    <label className="text-md text-gray-600 font-semibold">Otras adiccioens</label>
                    <p className="text-sm text-gray-500">
                        {pacienteSelect?.antecedentesPatologicos?.otrasToxinas ?
                            `${pacienteSelect.antecedentesPatologicos.otrasToxinas} ` :
                            "El paciente no presenta addiccion a sustancias nocivas"}
                    </p>
                </div>

                <div>
                    <label className="text-md text-gray-600 font-semibold">Alergias</label>
                    <p className="text-sm text-gray-500">
                        <p className="text-sm text-gray-500">
                            {pacienteSelect?.antecedentesPatologicos?.alergias ?
                                `El paciente tiene alergias a: ${pacienteSelect.antecedentesPatologicos.alergias} ` :
                                "El paciente alergias"}
                        </p>
                    </p>
                </div>

                <div>
                    <label className="text-md text-gray-600 font-semibold">Traumaticos</label>
                    <p className="text-sm text-gray-500">
                        {pacienteSelect?.antecedentesPatologicos?.traumaticos ?
                            `${pacienteSelect.antecedentesPatologicos.traumaticos} ` :
                            "El paciente no tiene historial de traumaticos"}
                    </p>
                </div>

                <div>
                    <label className="text-md text-gray-600 font-semibold">Cirugias</label>
                    <p className="text-sm text-gray-500">
                        {pacienteSelect?.antecedentesPatologicos?.cirugias ?
                            `${pacienteSelect.antecedentesPatologicos.cirugias} ` :
                            "El paciente no tiene historial de cirugias"}
                    </p>
                </div>

                <div>
                    <label className="text-md text-gray-600 font-semibold">Transfuciones</label>
                    <p className="text-sm text-gray-500">
                        {pacienteSelect?.antecedentesPatologicos?.transfusiones ?
                            `${pacienteSelect.antecedentesPatologicos.transfusiones} ` :
                            "El paciente no tiene historial de transfuciones"}
                    </p>
                </div>

                <div>
                    <label className="text-md text-gray-600 font-semibold">Exposion a biomasa</label>
                    <p className="text-sm text-gray-500">
                        {pacienteSelect?.antecedentesPatologicos?.exposicionBiomasa ?
                            `${pacienteSelect.antecedentesPatologicos.exposicionBiomasa} ` :
                            "El paciente no tiene historial de exposiciones a biomasa"}
                    </p>
                </div>
            </div>
        </Card>
    )
}

export default AntecedentesPatCard;


