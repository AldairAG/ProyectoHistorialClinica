/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect } from "react"
import { usePaciente } from "../../hooks/usePaciente";
import PacienteCard from "../../components/cards/PacienteCard";
import HistoriaClinicaCard from "../../components/cards/HistoriaClinicaCard";
import RecetasTable from "../../components/tables/RecetasTable";
import LabelXl from "../../components/ui/LabelXl";
import NotaMedicaTable from "../../components/tables/NotaMedicaTable";
import MainDiv from "../../components/ui/MainDiv";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { Citas, Consultas, EstudiosClinicos, HistoriaClincia, Recetas } from "../../components/icons/Icons";

const ViewPaciente = () => {
    const { getPacienteById } = usePaciente()
    const { id } = useParams(); // Obtiene el "41" de la URL

    useEffect(() => {
        fetchPaciente(id)
    }, [])

    const fetchPaciente = async (id) => {
        await getPacienteById(id)
    }

    return (
        <MainDiv className="flex w-full gap-4 ">

            <div className="w-full flex flex-col gap-4">
                <PacienteCard />

                <Tabs defaultValue={"historiaClinica"} >
                    <TabsList className={"bg-gray-50 border border-gray-300 rounded-sm flex justify-between p-1 items-center"}>

                        <TabsTrigger className={'border-0 flex w-full items-center justify-center gap-2'} activeClassName={"bg-gray-200"} value={"historiaClinica"}>
                            <HistoriaClincia className={'w-5 h-5 text-gray-400'}/>
                            <a>Historia clinica</a>
                        </TabsTrigger>
                        <TabsTrigger className={'border-0 flex w-full items-center justify-center gap-2'} activeClassName={"bg-gray-200"} value={"consultas"}>
                            <Consultas className={'w-4 h-4 text-gray-400'}/>
                            <a>Consultas</a>
                        </TabsTrigger>
                        <TabsTrigger className={'border-0 flex w-full items-center justify-center gap-2'} activeClassName={"bg-gray-200"} value={"citas"}>
                            <Citas className={'w-4 h-4 text-gray-400'}/>
                            <a>Citas</a>
                        </TabsTrigger>
                        <TabsTrigger className={'border-0 flex w-full items-center justify-center gap-2'} activeClassName={"bg-gray-200"} value={"recetas"}>
                            <Recetas className={'w-4 h-4 text-gray-400'}/>
                            <a>Recetas</a>
                        </TabsTrigger>
                        <TabsTrigger className={'border-0 flex w-full items-center justify-center gap-2'} activeClassName={"bg-gray-200"} value={'estudios'}>
                            <EstudiosClinicos className={'w-4 h-4 text-gray-400'}/>
                            <a>Estudios clinicos</a>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value={"historiaClinica"}>
                        <HistoriaClinicaCard />
                    </TabsContent>

                    <TabsContent value={"consultas"}>
                        <NotaMedicaTable />
                    </TabsContent>

                    <TabsContent value={"recetas"}>
                        <RecetasTable />
                    </TabsContent>

                    <TabsContent value={"estudios"}>
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
                    </TabsContent>

                    <TabsContent value={"citas"}>

                    </TabsContent>
                </Tabs>

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

        </MainDiv>
    )

}
export default ViewPaciente