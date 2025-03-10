import LabelXl from "../../components/ui/LabelXl"
import { usePaciente } from "../../hooks/usePaciente"

const AntecedentesFamCard = () => {
    const { pacienteSelect } = usePaciente()

    return (
        <div className=" bg-gray-100 border border-gray-300 rounded-sm p-4">
            <div className="flex gap-3 items-center">
                <i >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                    </svg>
                </i>
                <LabelXl>Antecedente Familiares</LabelXl>
            </div>

            <label className="text-sm font-semibold text-gray-500">Historial médico de familiares</label>

            {pacienteSelect?.antecedentesFams?.map((item,index) => (
                <div key={index} className="grid grid-cols-2 border-b border-gray-300 py-2">
                    <div className="flex items-center">
                        <label className="text-lg text-gray-600 font-semibold">{item.antecedente}</label>
                    </div>
                    <div className="flex justify-end items-center">
                        <label className="px-3 py border rounded-2xl border-gray-300 bg-gray-50">{item.familiar}</label>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default AntecedentesFamCard;