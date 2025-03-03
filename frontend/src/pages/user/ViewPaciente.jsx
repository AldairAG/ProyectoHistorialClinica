
import { useState } from "react"
import LabelXl from "../../components/ui/LabelXl"
import { useUser } from "../../hooks/useUser"
import { USER_ROUTES } from "../../constants/routes"

const ViewPaciente = () => {
    const {navigateTo}=useUser()
    const [seccion, setSeccion] = useState(1)

    const handleChngueSeccion = (op) => {
        setSeccion(op)
    }

    return (
        <section className="px-3 py-4 flex w-full gap-4 ">

            <div className="w-full flex flex-col gap-4">
                <div className="bg-gray-50 p-5 rounded-md border border-gray-300 shadow-md flex items-center">
                    <img src="" alt="paciente_img" className="bg-gray-300 w-[100px] h-[90px] rounded-full me-7" />
                    <div className="w-full">
                        <label className="text-2xl font-bold text-sky-800">Maria Lopez</label>
                        <div className="flex flex-col gap-3">
                            <label className="text-sm text-gray-500">ID-1234
                                <span className="text-md font-bold"> ·</span> 42 años <span className="text-md font-bold"> · </span>
                                Femenino <span className="text-md font-bold"> · </span>
                                <span className="text-gray-800 border px-2 py-0.5 border-gray-400 bg-gray-100 rounded-xl font-bold">Grupo O+</span>
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
                                <button onClick={()=>navigateTo(USER_ROUTES.EDIT_PACIENTE)} className="text-sm bg-gray-100 flex items-center px-2 py-1 gap-1 font-bold rounded-sm border border-gray-300">Editar informacion</button>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="flex p-1 bg-gray-100 border border-gray-300 rounded-sm justify-around gap-2 h-10 shadow-md ">
                    <li onClick={() => handleChngueSeccion(1)} className="cursor-pointer hover:bg-sky-100 bg-white flex w-full rounded-md items-center justify-center text-gray-600 gap-2">
                        <i >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </i>
                        <a>Historia clinica</a>
                    </li>
                    <li onClick={() => handleChngueSeccion(2)} className="cursor-pointer hover:bg-sky-100 flex w-full text-gray-600 gap-2 items-center justify-center">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                            </svg>
                        </i>
                        <a>Consultas</a>
                    </li>
                    <li onClick={() => handleChngueSeccion(3)} className="cursor-pointer hover:bg-sky-100 flex w-full text-gray-600 gap-2 items-center justify-center">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                            </svg>
                        </i>
                        <a>Citas</a>
                    </li>
                    <li onClick={() => handleChngueSeccion(4)} className="cursor-pointer hover:bg-sky-100 flex w-full text-gray-600 gap-2 items-center justify-center">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                            </svg>
                        </i>
                        <a>Recetas</a>
                    </li>
                    <li onClick={() => handleChngueSeccion(5)} className="cursor-pointer hover:bg-sky-100 flex w-full text-gray-600 gap-2 items-center justify-center">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
                                <path d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2" />
                            </svg>
                        </i>
                        <a>Estudios clinicos</a>
                    </li>
                </ul>

                {/*Historia clinica */}
                {seccion == 1 && (
                    <div className="flex flex-col gap-4">
                        <div className=" bg-gray-100 border border-gray-300 rounded-sm p-4">
                            <div className="flex gap-3 items-center">
                                <i >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                    </svg>
                                </i>
                                <LabelXl>Antecedente Familiares</LabelXl>
                            </div>

                            <label className="text-sm font-semibold text-gray-500">Historial médico de familiares</label>

                            <div className="grid grid-cols-2 border-b border-gray-300 py-2">
                                <div className="flex items-center">
                                    <label className="text-lg text-gray-600 font-semibold">Diabetes tipo 2</label>
                                </div>
                                <div className="flex justify-end items-center">
                                    <label className="px-3 py border rounded-2xl border-gray-300 bg-gray-50">Padre</label>
                                </div>
                            </div>


                        </div>

                        <div className="bg-gray-100 border border-gray-300 rounded-sm p-4 flex-col flex gap-2">
                            <div className="flex gap-3 items-center">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-houses" viewBox="0 0 16 16">
                                        <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207z" />
                                    </svg>
                                </i>
                                <LabelXl>Antecedentes no patologicos</LabelXl>
                            </div>
                            <label className="text-sm font-semibold text-gray-500">Vivienda servicios y dieta</label>

                            <div className="flex flex-col">
                                <label className="text-gray-700 text-md font-semibold">Vivienda</label>
                                <label className="text-gray-500 text-sm">Casa propia, 3 habitaciones, zona urbana</label>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-700 text-md font-semibold">Servicios</label>
                                <label className="text-gray-500 text-sm">Agua potable, electricidad, drenaje</label>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-700 text-md font-semibold">Dieta</label>
                                <label className="text-gray-500 text-sm">Balanceada, baja en sodio</label>
                            </div>
                        </div>

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

                            <div>
                                <label className="text-md text-gray-600 font-semibold">Tabaquismo</label>
                                <p className="text-sm text-gray-500">El paciente lleva 2 años fumando, con un promedio de 5 cigarros diarios y tiene un indice tabaquico de 2.5</p>
                            </div>

                            <div>
                                <label className="text-md text-gray-600 font-semibold">Alcohlismo</label>
                                <p className="text-sm text-gray-500">El paciente no presenta sintomas de alcohlismo</p>
                            </div>

                            <div>
                                <label className="text-md text-gray-600 font-semibold">Otras adiccioens</label>
                                <p className="text-sm text-gray-500">El paciente no addiccion a sustancias nocivas</p>
                            </div>
                            <div>
                                <label className="text-md text-gray-600 font-semibold">Alergias</label>
                                <p className="text-sm text-gray-500">El pacinete es alergico a jamon</p>
                            </div>

                            <div>
                                <label className="text-md text-gray-600 font-semibold">Traumaticos</label>
                                <p className="text-sm text-gray-500">Fractura de brazo(2018)</p>
                            </div>

                            <div>
                                <label className="text-md text-gray-600 font-semibold">Cirugias</label>
                                <p className="text-sm text-gray-500">Aoendicitis</p>
                            </div>

                            <div>
                                <label className="text-md text-gray-600 font-semibold">Transfucioens</label>
                                <p className="text-sm text-gray-500">No</p>
                            </div>
                            <div>
                                <label className="text-md text-gray-600 font-semibold">Exposion a biomasa</label>
                                <p className="text-sm text-gray-500">No</p>
                            </div>
                        </div>

                        <div className="bg-gray-100 border border-gray-300 rounded-sm p-4 flex-col flex gap-2">
                            <div className="flex gap-3 items-center">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-hospital" viewBox="0 0 16 16">
                                        <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
                                        <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
                                    </svg>
                                </i>
                                <LabelXl>Hozpitalizaciones previas</LabelXl>
                            </div>
                            <label className="text-sm font-semibold text-gray-500">Historial de ingresos hospitalarios</label>

                            <div className="bg-gray-50 border border-s-4 border-gray-300 border-s-black rounded-md p-4">
                                <div className="grid grid-cols-2 pb-3">
                                    <div>
                                        <div className="text-sm text-gray-500 font-semibold">
                                            <div className="flex gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                                                </svg>
                                                <label>Motivo de internamiento</label>
                                            </div>
                                            <label className="ps-5 text-gray-700 text-base">Dolor abdominal agudo y fiebre persistente</label>
                                        </div>
                                        <div className="text-sm text-gray-500 font-semibold">
                                            <div className="flex gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hospital" viewBox="0 0 16 16">
                                                    <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
                                                    <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
                                                </svg>

                                                <label>Institucion</label>
                                            </div>
                                            <label className="ps-5 text-gray-700 text-base">Hospital angel</label>
                                        </div>
                                        <div className="text-sm text-gray-500 font-semibold">
                                            <div className="flex gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-pulse" viewBox="0 0 16 16">
                                                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128z" />
                                                </svg>
                                                <label>Diagnostico</label>
                                            </div>
                                            <label className="ps-5 text-gray-700 text-base">Apendicitis aguda</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 font-semibold">
                                            <div className="flex gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                                </svg>
                                                <label>Fecha de ingreso</label>
                                            </div>
                                            <label className="ps-5 text-gray-700 text-base">Marzo 2022</label>
                                        </div>
                                        <div className="text-sm text-gray-500 font-semibold">
                                            <div className="flex gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                                </svg>
                                                <label>Duracion</label>
                                            </div>
                                            <label className="ps-5 text-gray-700 text-base">3 dias</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500 font-semibold border-t border-gray-300 pt-2">
                                    <div className="flex gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-capsule" viewBox="0 0 16 16">
                                            <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
                                        </svg>
                                        <label>Tratamiento</label>
                                    </div>
                                    <label className="ps-5 text-gray-700 text-base">Apendicectomía laparoscópica + Antibióticos (Ceftriaxona 1g IV c/12h por 5 días)</label>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-5 rounded-md border border-gray-300 shadow-md flex flex-col">
                            <div className="flex gap-2 items-center mb-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-heart-pulse" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                                    <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                                </svg>
                                <LabelXl>Enfermedades Crónicas</LabelXl>
                            </div>
                            <label className="text-sm font-semibold text-gray-500 mb-3">Condiciones médicas de larga duración</label>

                            <div>
                                <div className="bg-gray-50 border border-gray-300 shadow-sm rounded-md flex flex-col p-4">
                                    <label className="text-gray-700 font-semibold mb-2">Diabetes tipo 2</label>
                                    <label className="text-gray-600 text-sm"><span className="font-semibold text-gray-500">Fecha de diagnóstico:</span> 2015</label>
                                    <label className="text-gray-600 text-sm mb-2"><span className="font-semibold text-gray-500">Tratamiento:</span>Metformina 850mg, dieta baja en carbohidratos</label>
                                    <label className="text-sm font-semibold text-gray-600">Presión arterial promedio: 130/85 mmHg. Monitoreo regular en casa.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {seccion == 4 && (
                    <div>
                        <div className=" bg-gray-100 border border-gray-300 rounded-sm p-4 flex flex-col gap-4">
                            <div className="flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                                    <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                </svg>
                                <LabelXl>Recetas medicas expedidas</LabelXl>
                            </div>

                            <div className="bg-gray-50 rounded-md border border-gray-300 p-4 flex-col flex gap-2">
                                <label className="text-lg text-gray-600 font-semibold">Receta del 10/02/2025</label>
                                <div className="border-s-2 px-3 py-2 flex flex-col">
                                    <label className="text-lg">Enapril 10 mg</label>
                                    <label className="text-sm font-semibold text-gray-500">1 vez al dia <span className="font-extrabold">·</span> 10 dias</label>
                                </div>
                                <div className="border-s-2 px-3 py-2 flex flex-col">
                                    <label className="text-lg">Paracetamol 50 mg</label>
                                    <label className="text-sm font-semibold text-gray-500">1 vez al dia <span className="font-extrabold">·</span> 10 dias</label>
                                </div>

                                <div className="w-full flex justify-end gap-4">
                                    <button className="border border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                                            <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                        <label>Ver receta</label>
                                    </button>
                                    <button className="border border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                                            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                                            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
                                        </svg>
                                        <label>Imprimir</label>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-md border border-gray-300 p-4 flex-col flex gap-2">
                                <label className="text-lg text-gray-600 font-semibold">Receta del 10/03/2025</label>
                                <div className="border-s-2 px-3 py-2 flex flex-col">
                                    <label className="text-lg">Naproxeno 50 mg</label>
                                    <label className="text-sm font-semibold text-gray-500">1 vez al dia <span className="font-extrabold">·</span> 10 dias</label>
                                </div>
                                <div className="w-full flex justify-end gap-4">
                                    <button className="border border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                                            <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                        <label>Ver receta</label>
                                    </button>
                                    <button className="border border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                                            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                                            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
                                        </svg>
                                        <label>Imprimir</label>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {seccion == 5 && (
                    <div>
                        <div className=" bg-gray-100 border border-gray-300 rounded-sm p-4 flex flex-col gap-4">
                            <div className="flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                                    <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                </svg>
                                <LabelXl>Resultados de estudios clinicos</LabelXl>
                            </div>

                            <div className="bg-gray-50 rounded-md border border-gray-300 p-4 flex-col flex gap-2">
                                <label className="text-lg text-gray-600 font-semibold">Ecografia abdominal</label>
                                <h1 className="text-sm">Resumen:</h1>
                                <p className="text-sm">Hígado de tamaño normal con ecogenicidad conservada. Vesícula biliar sin litiasis. Páncreas sin alteraciones. Bazo de tamaño normal. Riñones de tamaño y morfología normal.</p>

                                <div className="w-full flex justify-end gap-4">
                                    <button className="border border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                                            <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                        <label>Ver</label>
                                    </button>
                                    <button className="border border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                                            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                                            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
                                        </svg>
                                        <label>Imprimir</label>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-md border border-gray-300 p-4 flex-col flex gap-2">
                                <label className="text-lg text-gray-600 font-semibold">Ecografia Lumbar</label>
                                <h1 className="text-sm">Resumen:</h1>
                                <p className="text-sm">Hígado de tamaño normal con ecogenicidad conservada. Vesícula biliar sin litiasis. Páncreas sin alteraciones. Bazo de tamaño normal. Riñones de tamaño y morfología normal.</p>

                                <div className="w-full flex justify-end gap-4">
                                    <button className="border border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                                            <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                        <label>Ver</label>
                                    </button>
                                    <button className="border border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                                            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                                            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
                                        </svg>
                                        <label>Imprimir</label>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


            </div>

            <aside className="bg-gray-50 rounded-md px-3 py-4 flex flex-col w-sm text-sm shadow-md border border-gray-300 max-h-[450px]">

                <LabelXl>
                    Informacion personal
                </LabelXl>

                <div className="grid grid-cols-2 text-gray-400 font-bold border-b border-gray-300 text-sm py-2">
                    <label>Nombre:</label><label> Maria Lopez</label>
                </div>
                <div className="grid grid-cols-2 text-gray-400 font-bold border-b border-gray-300 text-sm py-2">
                    <label>Fecha nac.:</label><label> 15/02/2011</label>
                </div>
                <div className="grid grid-cols-2 text-gray-400 font-bold border-b border-gray-300 text-sm py-2">
                    <label>Lugar nac.:</label><label> Martinez de la torre,veracruz</label>
                </div>
                <div className="grid grid-cols-2 text-gray-400 font-bold border-b border-gray-300 text-sm py-2">
                    <label>Edad:</label><label> 42 años</label>
                </div>
                <div className="grid grid-cols-2 text-gray-400 font-bold border-b border-gray-300 text-sm py-2">
                    <label>Genero:</label><label> Femenino</label>
                </div>
                <div className="grid grid-cols-2 text-gray-400 font-bold border-b border-gray-300 text-sm py-2">
                    <label>Grupo sang.:</label><label> O+</label>
                </div>
                <div className="grid grid-cols-2 text-gray-400 font-bold border-b border-gray-300 text-sm py-2">
                    <label>Escolaridad:</label><label> Preparatoria</label>
                </div>
                <div className="grid grid-cols-2 text-gray-400 font-bold border-b border-gray-300 text-sm py-2">
                    <label>Ocupacion:</label><label> Av.Principal 123,Martinez de la torre</label>
                </div>
                <div className="grid grid-cols-2 text-gray-400 font-bold py-2">
                    <label>Religion:</label> <label>Catolica</label>
                </div>
            </aside>

        </section>
    )

}
export default ViewPaciente