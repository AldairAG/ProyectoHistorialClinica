// eslint-disable-next-line react/prop-types
const BotonAzul = ({ label, ...props }) => {
    return (
        <button {...props} className="bg-blue-600 px-3 py-1 text-sky-100 rounded-md border-1
        hover:bg-blue-700 flex items-center gap-2">
            {label}
        </button>
    )
}

export default BotonAzul