import { useEffect,useState } from "react"
import { usePaciente } from "../../hooks/usePaciente"
import LabelXl from "../ui/LabelXl"
import RecetaItem from "../items/RecetaItem"
import Loader from "../ui/Loader";

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
        <main className=" bg-gray-100 border border-gray-300 rounded-sm p-4 flex flex-col gap-4">
            <header className="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                    <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
                <LabelXl>Recetas medicas expedidas</LabelXl>
            </header>

            {loading ? (
                <Loader />
            ) : (
                recetasList.map((item, index) => (
                    <div key={index}>
                        <RecetaItem receta={item} />
                    </div>
                ))
            )}

        </main>
    )
}

export default RecetasTable