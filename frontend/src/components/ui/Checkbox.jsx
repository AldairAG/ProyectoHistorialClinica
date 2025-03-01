// eslint-disable-next-line react/prop-types
const Checkbox = ({label,...props}) => {
    return (
        <div className="flex items-center ">
            <input type="checkbox" {...props}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm 
                    focus:ring-blue-500 "/>
            <label
                className="ms-2 block text-sm font-sans font-semibold text-gray-500 text-center">{label}</label>
        </div>
    )
}

export default Checkbox