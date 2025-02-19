// eslint-disable-next-line react/prop-types
const Select = ({obligatorio, label, id, children, ...props }) => {
    return (
        <div className="">
            <label htmlFor={id} className="block mb-2 text-sm font-sans font-semibold text-gray-500">
                {label}
                {obligatorio &&
                    <span className=" text-red-400"> *</span>}
            </label>
            <select id={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                w-full"
                {...props}
            >
                <option selected>Selecciona una opcion</option>
                {children}
            </select>
        </div>
    )
}

export default Select