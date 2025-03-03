// eslint-disable-next-line react/prop-types
export const Input = ({ label, id, ...inputProps }) => {
    return (
        <div>
            <label htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 ">
                {label}
            </label>
            <input
                id={id}
                {...inputProps}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
        </div>
    )
}