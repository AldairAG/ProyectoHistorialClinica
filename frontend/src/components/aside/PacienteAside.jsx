import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline"
import { Card, CardContent, CardDescription, CardHead, CardHeader } from "../ui/Card"
import BotonAzul from "../ui/BotonAzul"

const PacienteAside = () => {
    return (
        <div>
            <Card className={"p-0"}>
                <CardHeader className={"p-4 bg-blue-50 w-full rounded-t-md"}>
                    <CardHead className={"text-2xl flex items-center gap-2 font-bold text-gray-900"}>
                        Proxima cita
                    </CardHead>
                    <CardDescription>Información de la próxima consulta</CardDescription>
                </CardHeader>

                <CardContent className={'space-y-2 p-4'}>
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5 text-blue-500" />
                        <span>15 de Marzo, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ClockIcon className="h-5 w-5 text-blue-500" />
                        <span>10:30 AM</span>
                    </div>
                    <BotonAzul className="w-full mt-4 rounded-full py-3 flex justify-center">Reprogramar</BotonAzul>
                </CardContent>
            </Card>

            <Card className={"p-0"}>
                <CardHeader className={"p-4 bg-blue-50 w-full rounded-t-md"}>
                    <CardHead className={"text-2xl flex items-center gap-2 font-bold text-gray-900"}>
                        Alertas medicas
                    </CardHead>
                    <CardDescription>Información importante</CardDescription>
                </CardHeader>

                <CardContent>

                </CardContent>
            </Card>

            <Card className={"p-0"}>
                <CardHeader className={"p-4 bg-blue-50 w-full rounded-t-md"}>
                    <CardHead className={"text-2xl flex items-center gap-2 font-bold text-gray-900"}>
                        Línea de Tiempo
                    </CardHead>
                    <CardDescription>Actividad reciente</CardDescription>
                </CardHeader>

                <CardContent>

                </CardContent>
            </Card>
        </div>
    )
}
export default PacienteAside
