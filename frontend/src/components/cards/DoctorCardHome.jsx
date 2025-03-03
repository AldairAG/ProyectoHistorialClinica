import { useUser } from "../../hooks/useUser"

const DoctorCardHome = () => {
    const { user } = useUser()
    return (
        <div className="border rounded-md h-64 bg-blue-700 px-8 py-7 text-white shadow-md">
            <div className="flex flex-col gap-2 mb-7">
                <label className="text-sm font-semibold">Buenos dias.</label>
                <label className="text-3xl">Dr. {user.nombre} {user.apellidoPaterno}</label>
                <label className="font-semibold">Estado de la clinica hoy</label>
            </div>
            <div className="flex gap-6">
                <div className="flex gap-3">
                    <div className=" border border-dotted border-sky-400 bg-sky-400 w-14 h-14 rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard2-pulse-fill" viewBox="0 0 16 16">
                            <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                            <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M9.98 5.356 11.372 10h.128a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.479-.356l-.94-3.135-1.092 5.096a.5.5 0 0 1-.968.039L6.383 8.85l-.936 1.873A.5.5 0 0 1 5 11h-.5a.5.5 0 0 1 0-1h.191l1.362-2.724a.5.5 0 0 1 .926.08l.94 3.135 1.092-5.096a.5.5 0 0 1 .968-.039Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-3xl">9</label>
                        <label className="text-sm">Citas</label>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="bg-green-400 w-14 h-14 rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-3xl">1578</label>
                        <label className="text-sm">Pacientes totales</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorCardHome