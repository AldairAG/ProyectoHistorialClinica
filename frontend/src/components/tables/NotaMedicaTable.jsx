import { usePaciente } from "../../hooks/usePaciente";
import LabelXl from "../ui/LabelXl";
import NotaMedicaItem from "../items/NotaMedicaItem";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";

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
        <div className=" bg-gray-100 border border-gray-300 rounded-sm p-4 flex flex-col gap-4">
            <header className="flex gap-3 items-center">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                    </svg>
                </i>
                <LabelXl>Notas medicas</LabelXl>
            </header>

            {loading ? (
                <Loader/>
            ) : (
                notaMedicaList.map((item, index) => (
                    <div key={index}>
                        <NotaMedicaItem notaMedica={item} />
                    </div>
                ))
            )}



        </div >
    );
}

export default NotaMedicaTable;