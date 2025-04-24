import { Card, CardContent, CardDescription, CardHead, CardHeader } from "../../components/ui/Card"
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import BotonAzul from "../../components/ui/BotonAzul";


const Home = () => {

    return (
        <div className="">
            <BotonAzul>
                pacien
            </BotonAzul>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <Card>
                    <CardHeader className="flex flex-col gap-2">
                        <CardHead className="text-base font-normal flex gap-2">
                            Total Paciente
                            <UserGroupIcon className="h-5 w-5 text-gray-500" />
                        </CardHead>
                        <CardHead className="text-3xl font-bold">245</CardHead>
                        <CardDescription>+12 este mes</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="flex flex-col gap-2">
                        <CardHead className="text-base font-normal flex gap-2">
                            Total Paciente
                            <UserGroupIcon className="h-5 w-5 text-gray-500" />
                        </CardHead>
                        <CardHead className="text-3xl font-bold">245</CardHead>
                        <CardDescription>+12 este mes</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="flex flex-col gap-2">
                        <CardHead className="text-base font-normal flex gap-2">
                            Total Paciente
                            <UserGroupIcon className="h-5 w-5 text-gray-500" />
                        </CardHead>
                        <CardHead className="text-3xl font-bold">245</CardHead>
                        <CardDescription>+12 este mes</CardDescription>
                    </CardHeader>
                </Card>
            </div>

            <Tabs defaultValue="doctores" className="w-full mb-4">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <TabsTrigger value="doctores" className="justify-start">Doctores</TabsTrigger>
                    <TabsTrigger value="pacientes" className="justify-start">Pacientes</TabsTrigger>
                    <TabsTrigger value="citas" className="justify-start">Citas</TabsTrigger>
                    <TabsTrigger value="notas" className="justify-start">Notas Medicas</TabsTrigger>
                </TabsList>

                <TabsContent value="doctores">
                    doctor
                </TabsContent>

                <TabsContent value="pacientes">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        pacientes
                    </div>
                </TabsContent>
            </Tabs>

        </div>


    )
}

export default Home 