// eslint-disable-next-line react/prop-types
const AntFamItem = ({ ant, fam }) => {
    return (
        <div className="grid grid-cols-2 border-b border-gray-300 py-2">
            <div className="flex items-center">
                <label className="text-lg text-gray-600 font-semibold">{ant}</label>
            </div>
            <div className="flex justify-end items-center">
                <label className="px-3 py border rounded-2xl border-gray-300 bg-gray-50">{fam}</label>
            </div>
        </div>
    )
}

export default AntFamItem