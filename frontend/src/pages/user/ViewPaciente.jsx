/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { usePaciente } from "../../hooks/usePaciente";
import PacienteCard from "../../components/cards/PacienteCard";
import HistoriaClinicaCard from "../../components/cards/HistoriaClinicaCard";
import RecetasTable from "../../components/tables/RecetasTable";
import LabelXl from "../../components/ui/LabelXl";
import NotaMedicaTable from "../../components/tables/NotaMedicaTable";

const ViewPaciente = () => {
    const { getPacienteById } = usePaciente()
    const [seccion, setSeccion] = useState(1)
    const { id } = useParams(); // Obtiene el "41" de la URL

    const handleChngueSeccion = (op) => {
        setSeccion(op)
    }

    useEffect(() => {
        fetchPaciente(id)
    }, [])

    const fetchPaciente = async (id) => {
        await getPacienteById(id)
    }

    return (
        <section className="px-3 py-4 flex w-full gap-4 ">

            <div className="w-full flex flex-col gap-4">
                <PacienteCard />

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

                {seccion === 1 && <HistoriaClinicaCard />}

                {seccion === 2 && <NotaMedicaTable />}

                {seccion == 4 && <RecetasTable />}


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



            {/*<aside className="bg-gray-50 rounded-md px-3 py-4 flex flex-col w-sm text-sm shadow-md border border-gray-300 max-h-[450px]">

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
            </aside>  */}

        </section>
    )

}
export default ViewPaciente