// eslint-disable-next-line react/prop-types
const EnfCronItem = ({enfermedad,fechaDiag,tratamiento,ultimarRev}) => {
    return (
        <div className="bg-gray-50 border border-gray-300 shadow-sm rounded-md flex flex-col p-4">
            <label className="text-gray-700 font-semibold mb-2">{enfermedad}</label>
            <label className="text-gray-600 text-sm">
                <span className="font-semibold text-gray-500">Fecha de diagnóstico:</span>{fechaDiag}</label>
            <label className="text-gray-600 text-sm mb-2">
                <span className="font-semibold text-gray-500">Tratamiento:</span>{tratamiento}</label>
            <label className="text-sm font-semibold text-gray-600">{ultimarRev}</label>
        </div>
    )
}
export default EnfCronItem