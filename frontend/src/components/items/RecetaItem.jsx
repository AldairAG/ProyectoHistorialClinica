// eslint-disable-next-line react/prop-types
const RecetaItem = ({ receta }) => {
    return (
        <div className="bg-gray-50 rounded-md border border-gray-300 p-4 flex-col flex gap-2">
            {/* eslint-disable-next-line react/prop-types*/}
            <label className="text-lg text-gray-600 font-semibold">Receta del {receta.fechaCreacion}</label>

            {/* eslint-disable-next-line react/prop-types*/}
            {receta.tratamientos.map((item, index) => (
                <div className="border-s-2 px-3 py-2 flex flex-col" key={index}>
                    <label className="text-lg">{item.medicamento} {item.dosis}</label>
                    <label className="text-sm font-semibold text-gray-500">{item.frecuencia} <span className="font-extrabold">·</span> {item.duracion} dias <span className="font-extrabold">·</span> {item.viaDeAdministracion}</label>
                </div>
            ))}
            <div className="w-full flex justify-end gap-4">
                <button className="border border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                        <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>
                    <label>Ver nota medica</label>
                </button>
                <button className="border border-gray-300 py-1 px-3 rounded-md flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
                    </svg>
                    <label>Imprimir</label>
                </button>
            </div>
        </div>
    )
}

export default RecetaItem