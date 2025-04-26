import { Card, CardContent, CardDescription, CardHead, CardHeader } from "../../components/ui/Card"
import { UserGroupIcon } from "@heroicons/react/24/outline";

const Home = () => {

    return (
        <div className="">

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

        </div>


    )
}

export default Home 