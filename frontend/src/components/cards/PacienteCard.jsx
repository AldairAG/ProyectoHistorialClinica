import img from '../../assets/usuario.png'
import { usePaciente } from "../../hooks/usePaciente";
import { useUser } from "../../hooks/useUser"
import { USER_ROUTES } from "../../constants/routes"

const PacienteCard = () => {
    const { navigateTo } = useUser()

    const { pacienteSelect } = usePaciente()

    return (
        <div className="bg-gray-50 p-5 rounded-md border border-gray-300 shadow-md flex items-center">
            <img src={img} alt="Foto del paciente" className="bg-gray-300 w-[100px] h-[90px] rounded-full me-7" />
            <div className="w-full">
                <label className="text-2xl font-bold text-sky-800">{pacienteSelect?.nombre} {pacienteSelect?.apellidoPaterno} {pacienteSelect?.apellidoMaterno}</label>
                <div className="flex flex-col gap-3">
                    <label className="text-sm text-gray-500">ID-{pacienteSelect?.idPaciente}
                        <span className="text-md font-bold"> ·</span> {pacienteSelect?.edad} años <span className="text-md font-bold"> · </span>
                        {pacienteSelect?.sexo} <span className="text-md font-bold"> · </span>
                        <span className="text-gray-800 border px-2 py-0.5 border-gray-400 bg-gray-100 rounded-xl font-bold">Grupo {pacienteSelect?.grupoSanguineo}</span>
                    </label>

                    <div className="flex gap-2">
                        <button className="text-sm bg-gray-100 flex items-center px-2 py-1 gap-1 font-bold rounded-sm border border-gray-300">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                                    <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                </svg>
                            </i>
                            Generar infrome
                        </button>
                        <button onClick={() => navigateTo(USER_ROUTES.EDIT_PACIENTE)} className="text-sm bg-gray-100 flex items-center px-2 py-1 gap-1 font-bold rounded-sm border border-gray-300">Editar informacion</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PacienteCard;