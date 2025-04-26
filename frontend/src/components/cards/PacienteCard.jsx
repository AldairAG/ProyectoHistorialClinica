import { usePaciente } from "../../hooks/usePaciente";
import { useUser } from "../../hooks/useUser"
import { USER_ROUTES } from "../../constants/routes"
import { Citas } from '../icons/Icons';
import { Card, CardContent, CardHead, CardHeader } from '../ui/Card';
import { useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";


const PacienteCard = () => {
    const { pacienteSelect } = usePaciente()

    return (
        <Card className={"p-0"}>
            <CardHead className={"p-4 bg-blue-50 w-full rounded-t-md"}>
                <CardHeader className={"text-2xl flex items-center gap-2 font-bold text-gray-900"}>
                    <UserIcon className="h-6 w-6 text-gray-500 stroke-2" />
                    Informacion personal
                </CardHeader>
            </CardHead>

            <CardContent className={"md:grid grid-cols-2 gap-5 p-4"}>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Nombre completo</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.nombre}
                        </span>
                    </div>
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Genero</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.sexo}
                        </span>
                    </div>
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Domicilio</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.domicilio}
                        </span>
                    </div>
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Ocupacion</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.ocupacion}
                        </span>
                    </div>
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Religion</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.religion}
                        </span>
                    </div>
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Escolaridad</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.escolaridad}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Fecha de nacimiento</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.fechaNacimiento} ({pacienteSelect?.edad} años)
                        </span>
                    </div>
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Id. de paciente</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.idPaciente}
                        </span>
                    </div>
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Telefono</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.telefono}
                        </span>
                    </div>
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Grupo sanguineo</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.grupoSanguineo}
                        </span>
                    </div>
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Estado civil</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.estadoCivil}
                        </span>
                    </div>
                    <div className="flex flex-col items-start text-sm">
                        <label className="text-gray-500 font-semibold">Lugar de nacimiento</label>
                        <span className="text-gray-900 font-semibold ">
                            {pacienteSelect?.lugarNacimiento}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

/*<div className="bg-gray-50 p-5 rounded-md border border-gray-300 shadow-md flex items-center">
    <img src={img} alt="Foto del paciente" className="bg-gray-300 w-[100px] h-[90px] rounded-full me-7" />
    <div className="w-full">

        <div className="flex flex-col gap-3">
            <label className="text-sm text-gray-500">ID-{pacienteSelect?.idPaciente}
                <span className="text-md font-bold"> ·</span> {pacienteSelect?.edad} años <span className="text-md font-bold"> · </span>
                {pacienteSelect?.sexo} <span className="text-md font-bold"> · </span>
                <span className="text-gray-800 border px-2 py-0.5 border-gray-400 bg-gray-100 rounded-xl font-bold">Grupo {pacienteSelect?.grupoSanguineo}</span>
            </label>

            <div className="flex gap-2">
                <button onClick={() => navigateTo(USER_ROUTES.CREATE_NOTA_MEDICA)}
                    className="text-sm bg-gray-100 flex items-center px-2 py-1 gap-1 font-bold rounded-sm border border-gray-300">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                            <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </i>
                    Generar nota medica
                </button>
                <button onClick={() => navigateTo(USER_ROUTES.EDIT_PACIENTE)} className="text-sm bg-gray-100 flex items-center px-2 py-1 gap-1 font-bold rounded-sm border border-gray-300">Editar informacion</button>

                <button
                    onClick={() => navigateTo(USER_ROUTES.CREAR_CITAS_MEDICAS)}
                    className='text-sm bg-gray-100 flex items-center px-2 py-1 gap-1 font-bold rounded-sm border border-gray-300'>
                    <Citas className={'w-4 h-4 text-gray-400'} />
                    Agendar cita
                </button>

            </div>
        </div>
    </div>
</div> */

export default PacienteCard;