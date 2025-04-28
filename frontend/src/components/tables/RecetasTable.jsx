import { useEffect, useState } from "react"
import { usePaciente } from "../../hooks/usePaciente"
import RecetaItem from "../items/RecetaItem"
import Loader from "../ui/Loader";
import { Card, CardHead, CardHeader } from "../ui/Card";
import BotonAzul from "../ui/BotonAzul";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";

const RecetasTable = () => {
    const { getRecetaByPaciente, recetasList } = usePaciente()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = async () => {
        await getRecetaByPaciente()
        setLoading(false)
    }

    return (
        <Card className={'border-0 bg-transparent shadow-none'}>
            <CardHead className="flex gap-3 items-center justify-between">
                <CardHeader className={'text-2xl flex gap-2 items-center'}>
                    <DocumentPlusIcon className="h-6 w-6 text-gray-500" />
                    Historial de Recetas medicas expedidas
                </CardHeader>
                <BotonAzul className={'border-0 py-2'}>Nueva receta</BotonAzul>
            </CardHead>

            {loading ? (
                <Loader />
            ) : (
                recetasList.map((item, index) => (
                    <div key={index}>
                        <RecetaItem receta={item} />
                    </div>
                ))
            )}

        </Card>
    )
}

export default RecetasTable