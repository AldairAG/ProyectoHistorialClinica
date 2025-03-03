
import LabelXl from "../../components/ui/LabelXl"

const ViewPaciente = () => {
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
                                <button className="text-sm bg-gray-100 flex items-center px-2 py-1 gap-1 font-bold rounded-sm border border-gray-300">Editar informacion</button>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="flex p-1 bg-gray-100 border border-gray-300 rounded-sm justify-around gap-2 h-10 shadow-md ">
                    <li className="bg-white flex w-full rounded-md items-center justify-center text-gray-600 gap-2">
                        <i >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </i>
                        <a>Historia clinica</a>
                    </li>
                    <li className="flex w-full text-gray-600 gap-2 items-center justify-center">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                            </svg>
                        </i>
                        <a>Consultas</a>
                    </li>
                    <li className="flex w-full text-gray-600 gap-2 items-center justify-center">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                            </svg>
                        </i>
                        <a>Citas</a>
                    </li>
                    <li className="flex w-full text-gray-600 gap-2 items-center justify-center">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                            </svg>
                        </i>
                        <a>Recetas</a>
                    </li>
                    <li className="flex w-full text-gray-600 gap-2 items-center justify-center">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
                                <path d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2" />
                            </svg>
                        </i>
                        <a>Estudios clinicos</a>
                    </li>
                </ul>

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

                <div>
                    <LabelXl>Antecedentes Patológicos</LabelXl>
                    <label>Tabaquismo</label>
                    <label>Alcohlismo</label>
                    <label>Otras adiccioens</label>
                    <label >Alergias</label>
                    <label >Traumaticos</label>
                    <label >Cirugias</label>
                    <label >Transfucioens</label>
                    <label >Exposion a biomasa</label>
                </div>

                <div>
                    <LabelXl>Hozpitalizaciones previas</LabelXl>
                    <label>Historial de ingresos hospitalarios</label>

                    <div>

                        <div>
                            <div>


                                <div>
                                    <label>Motivo de internamiento</label>
                                    <label>Dolor abdominal agudo y fiebre persistente</label>
                                </div>

                            </div>

                            <div>
                                <label>Tratamiento</label>
                                <label>Apendicectomía laparoscópica + Antibióticos (Ceftriaxona 1g IV c/12h por 5 días)</label>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <label >Enfermedades Crónicas</label>
                    <label>Condiciones médicas de larga duración</label>

                    <div>
                        <div>
                            <div>
                                <label>Diabetes tipo 2</label>
                                <label>Controlada</label>
                            </div>
                            <div>
                                <label>Diagnóstico: 2015</label>
                                <label>Tratamiento: Metformina 850mg, dieta baja en carbohidratos</label>
                            </div>
                            <div>
                                <label>Presión arterial promedio: 130/85 mmHg. Monitoreo regular en casa.</label>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <div className="bg-gray-50 rounded-md px-3 py-4 flex flex-col w-sm text-sm shadow-md border border-gray-300 max-h-[450px]">

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
            </div>

        </section>
    )

}
export default ViewPaciente