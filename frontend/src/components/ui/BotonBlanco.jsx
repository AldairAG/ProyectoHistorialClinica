// eslint-disable-next-line react/prop-types
const BotonBlanco = ({ label, ...props }) => {
    return (
        <button {...props} className="bg-gray-50 px-3 py-1 text-gray-700 rounded-md border-1
        hover:bg-blue-50 flex items-center gap-2">
            {label}
        </button>
    )
}

export default BotonBlanco