// eslint-disable-next-line react/prop-types
const TextArea = ({label,...props}) => {
    return (
        <div>
            <label
                className="block mb-2 text-sm font-sans font-semibold text-gray-500">
                {label}
            </label>
            <textarea {...props}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
    )
}

export default TextArea