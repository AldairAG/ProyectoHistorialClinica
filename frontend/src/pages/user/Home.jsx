import { useUser } from "../../hooks/useUser"

import { Card, CardDescription, CardHead, CardHeader } from "../../components/ui/Card"
import { UserGroupIcon } from "@heroicons/react/24/outline"

import PacientesTable from "../../components/tables/PacientesTable"

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const { navigateTo } = useUser()


    

    return (
        <div className="flex flex-col gap-8">

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Sus Pacientes</h2>
                <PacientesTable variant="home" />
            </div>
        </div>
    )
}

export default Home
