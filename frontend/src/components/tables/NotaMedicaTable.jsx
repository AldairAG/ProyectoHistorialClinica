import { usePaciente } from "../../hooks/usePaciente";
import NotaMedicaItem from "../items/NotaMedicaItem";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import { Card, CardHead, CardHeader } from "../ui/Card";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import BotonAzul from "../ui/BotonAzul";

const NotaMedicaTable = () => {

    const { notaMedicaList, getNotaMedicaByPaciente } = usePaciente()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = async () => {
        await getNotaMedicaByPaciente();
        setLoading(false)
    }

    return (
        <Card className={'border-0 bg-transparent shadow-none'}>
            <CardHead className="flex gap-3 items-center justify-between">
                <CardHeader className={'text-2xl flex gap-2 items-center'}>
                    <DocumentTextIcon className="h-6 w-6 text-gray-500" />
                    Historial de Consultas
                </CardHeader>
                <BotonAzul className={'border-0 py-2'}>Nueva consulta</BotonAzul>
            </CardHead>

            {loading ? (
                <Loader />
            ) : (
                notaMedicaList.map((item, index) => (
                    <div key={index}>
                        <NotaMedicaItem notaMedica={item} />
                    </div>
                ))
            )}



        </Card >
    );
}

export default NotaMedicaTable;