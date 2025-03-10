import LabelXl from "../../components/ui/LabelXl"
import { usePaciente } from "../../hooks/usePaciente";

const AntecedentesPatCard = () => {
    const { pacienteSelect } = usePaciente()

    return (

        <div className="bg-gray-100 border border-gray-300 rounded-sm p-4 flex-col flex gap-2">
            <div className="flex gap-3 items-center">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lungs" viewBox="0 0 16 16">
                        <path d="M8.5 1.5a.5.5 0 1 0-1 0v5.243L7 7.1V4.72C7 3.77 6.23 3 5.28 3c-.524 0-1.023.27-1.443.592-.431.332-.847.773-1.216 1.229-.736.908-1.347 1.946-1.58 2.48-.176.405-.393 1.16-.556 2.011-.165.857-.283 1.857-.241 2.759.04.867.233 1.79.838 2.33.67.6 1.622.556 2.741-.004l1.795-.897A2.5 2.5 0 0 0 7 11.264V10.5a.5.5 0 0 0-1 0v.764a1.5 1.5 0 0 1-.83 1.342l-1.794.897c-.978.489-1.415.343-1.628.152-.28-.25-.467-.801-.505-1.63-.037-.795.068-1.71.224-2.525.157-.82.357-1.491.491-1.8.19-.438.75-1.4 1.44-2.25.342-.422.703-.799 1.049-1.065.358-.276.639-.385.833-.385a.72.72 0 0 1 .72.72v3.094l-1.79 1.28a.5.5 0 0 0 .58.813L8 7.614l3.21 2.293a.5.5 0 1 0 .58-.814L10 7.814V4.72a.72.72 0 0 1 .72-.72c.194 0 .475.11.833.385.346.266.706.643 1.05 1.066.688.85 1.248 1.811 1.439 2.249.134.309.334.98.491 1.8.156.814.26 1.73.224 2.525-.038.829-.224 1.38-.505 1.63-.213.19-.65.337-1.628-.152l-1.795-.897A1.5 1.5 0 0 1 10 11.264V10.5a.5.5 0 0 0-1 0v.764a2.5 2.5 0 0 0 1.382 2.236l1.795.897c1.12.56 2.07.603 2.741.004.605-.54.798-1.463.838-2.33.042-.902-.076-1.902-.24-2.759-.164-.852-.38-1.606-.558-2.012-.232-.533-.843-1.571-1.579-2.479-.37-.456-.785-.897-1.216-1.229C11.743 3.27 11.244 3 10.72 3 9.77 3 9 3.77 9 4.72V7.1l-.5-.357z" />
                    </svg>
                </i>
                <LabelXl>Antecedentes Patológicos</LabelXl>
            </div>

            <label className="text-sm font-semibold text-gray-500">Condiciones médicas previas</label>

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
    )
}

export default AntecedentesPatCard;


