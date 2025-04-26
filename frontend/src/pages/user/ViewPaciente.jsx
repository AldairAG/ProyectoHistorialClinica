/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect } from "react"
import { usePaciente } from "../../hooks/usePaciente";
import PacienteCard from "../../components/cards/PacienteCard";
import HistoriaClinicaCard from "../../components/cards/HistoriaClinicaCard";
import BotonAzul from "../../components/ui/BotonAzul";
import BotonBlanco from "../../components/ui/BotonBlanco";
import RecetasTable from "../../components/tables/RecetasTable";
import LabelXl from "../../components/ui/LabelXl";
import NotaMedicaTable from "../../components/tables/NotaMedicaTable";
import MainDiv from "../../components/ui/MainDiv";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { Citas, Consultas, EstudiosClinicos, HistoriaClincia, Recetas } from "../../components/icons/Icons";
import LinkArrowBack from "../../components/navigation/LinkArrowBack";
import { USER_ROUTES } from "../../constants/routes";
import AntecedentesNoPatCard from '../../components/cards/AntecedentesNoPatCard'
import { UserIcon, DocumentTextIcon, CalendarIcon, DocumentPlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";


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
        <MainDiv className="flex w-full max-w-full gap-4 flex-col">

            <div className="flex justify-between items-center w-full flex-wrap">
                <div className="flex items-center gap-4 mb-5">
                    <LinkArrowBack to={USER_ROUTES.PACIENTES_LIST} />
                    <h1 className="text-2xl font-semibold">Historia Clínica del Paciente</h1>
                </div>

                <div className="flex gap-4 items-center">
                    <BotonBlanco className={'flex gap-1 items-center p-2'}>
                        <PencilSquareIcon className="h-4 w-4 text-white stroke-3" />
                        Nueva consulta
                    </BotonBlanco>

                    <BotonAzul className={'flex gap-1 items-center p-2 border-0'}>
                        <PencilSquareIcon className="h-4 w-4 text-white stroke-3" />
                        Editar paciente
                    </BotonAzul>
                </div>
            </div>

            <div className="flex gap-4">

                <Tabs defaultValue={"Informacion"} className="w-full overflow-hidden">
                    <TabsList
                        className="bg-blue-50/50 rounded-3xl flex justify-around p-1 
                        items-center border-0 space-x-3 overflow-auto">

                        <TabsTrigger value={"Informacion"}
                            className={'flex gap-2 rounded-full'}
                            activeClassName={"bg-white border-0 text-blue-500 font-bold stroke-3"}
                            inactiveClassName="text-gray-500 border-0 font-semibold"
                        >
                            <UserIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">Informacion</span>
                        </TabsTrigger>

                        <TabsTrigger value={"infomed"}
                            className={'flex gap-2 rounded-full'}
                            activeClassName={"bg-white border-0 text-blue-500 font-bold stroke-3"}
                            inactiveClassName="text-gray-500 border-0 font-semibold"
                        >
                            <DocumentTextIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">Antecedentes</span>
                        </TabsTrigger>

                        <TabsTrigger value={"nota"}
                            className={'flex gap-2 rounded-full'}
                            activeClassName={"bg-white border-0 text-blue-500 font-bold stroke-3"}
                            inactiveClassName="text-gray-500 border-0 font-semibold"
                        >
                            <DocumentTextIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">Historial</span>
                        </TabsTrigger>

                        <TabsTrigger value={"citas"}
                            className={'flex gap-2 rounded-full'}
                            activeClassName={"bg-white border-0 text-blue-500 font-bold stroke-3"}
                            inactiveClassName="text-gray-500 border-0 font-semibold"
                        >
                            <CalendarIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">Citas</span>
                        </TabsTrigger>

                        <TabsTrigger value={"recetas"}
                            className={'flex gap-2 rounded-full'}
                            activeClassName={"bg-white border-0 text-blue-500 font-bold stroke-3"}
                            inactiveClassName="text-gray-500 border-0 font-semibold"
                        >
                            <DocumentPlusIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">Recetas</span>
                        </TabsTrigger>

                        <TabsTrigger value={"analisis"}
                            className={'flex gap-2 rounded-full'}
                            activeClassName={"bg-white border-0 text-blue-500 font-bold stroke-3"}
                            inactiveClassName="text-gray-500 border-0 font-semibold"
                        >
                            <DocumentTextIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">Laboratorios</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value={"Informacion"}>
                        <PacienteCard />
                        <AntecedentesNoPatCard/>
                    </TabsContent>

                    <TabsContent value={"infomed"}>
                        <HistoriaClinicaCard />
                    </TabsContent>

                    <TabsContent value={"nota"}>
                        <PacienteCard />
                        <HistoriaClinicaCard />
                    </TabsContent>

                    <TabsContent value={"citas"}>
                        <PacienteCard />
                        <HistoriaClinicaCard />
                    </TabsContent>

                    <TabsContent value={"recetas"}>
                        <PacienteCard />
                        <HistoriaClinicaCard />
                    </TabsContent>

                </Tabs>

                <aside>
                    cita proxima
                    linea del tiempo
                </aside>

            </div>

        </MainDiv>
    )

}
export default ViewPaciente