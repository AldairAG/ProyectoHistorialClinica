import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { usePaciente } from "../../hooks/usePaciente";
import { Calendar, User, FileText, Stethoscope, ExternalLink } from "lucide-react";
import { KEYS_DB } from "../../constants/keys";

// eslint-disable-next-line react/prop-types
const NotaMedicaItem = ({ notaMedica }) => {
    const { pacienteSelect } = usePaciente()
    return (
        <div className="shadow-lg rounded-sm">
            <div className="bg-gray-300 py-2 rounded-t-sm">
                <div className="flex items-center justify-center gap-2 text-primary text-lg">
                    <ClipboardDocumentListIcon className="h-6 w-6 text-gray-500" />
                    <span>Nota Médica</span>
                </div>
            </div>

            <div className="p-4 space-y-3">

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-lg">
                        <Calendar className="h-4 w-4 text-primary" />
                        <div>
                            <p className="text-xs text-gray-500">Fecha</p>
                            {/* eslint-disable-next-line react/prop-types*/}
                            <p className="text-base font-semibold">{notaMedica.fechaCreacion}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-lg">
                        <User className="h-4 w-4 text-primary" />
                        <div>
                            <p className="text-xs text-gray-500">Paciente</p>
                            <p className="text-base font-semibold">{`${pacienteSelect.nombre} ${pacienteSelect.apellidoPaterno} ${pacienteSelect.apellidoMaterno}`}</p>
                        </div>
                    </div>
                </div>
                <hr className="text-gray-300" />


                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-semibold">Padecimiento</h3>
                    </div>
                    <div className=" p-2 rounded-lg ml-4">
                        <p className="text-xs bg-gray-200 p-2 rounded-lg">
                            {/* eslint-disable-next-line react/prop-types*/}
                            {notaMedica.registroNotaMedicas.find((nota) => nota.nombre === KEYS_DB.PADECIMIENTO_ACTUAL)?.descripcion || "Sin información"}
                        </p>
                    </div>
                </div>
                <hr className="text-gray-300" />

                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <Stethoscope className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-semibold">Impresion diagnóstica</h3>
                    </div>
                    <div className="p-2 rounded-lg ml-4">
                        <p className="text-xs bg-gray-200 p-2 rounded-lg">
                            {/* eslint-disable-next-line react/prop-types*/}
                            {notaMedica.registroNotaMedicas.find((nota) => nota.nombre === KEYS_DB.IMPRESION_DIAGNOSTICA)?.descripcion || "Sin información"}
                        </p>
                    </div>
                </div>


                <div className="pt-2 flex justify-center">
                    <button className="w-full text-xs flex items-center justify-center gap-1 border border-gray-300 
                        py-2.5 rounded-md font-semibold text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition duration-200 ease-in-out">
                        <ExternalLink className="h-3 w-3" />
                        <span>Ver Nota Médica Completa</span>
                    </button>
                </div>


            </div>



        </div>
    )

}

export default NotaMedicaItem