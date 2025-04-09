// eslint-disable-next-line react/prop-types
const InputWhite = ({ obligatorio = false, id, label, classNameDiv, ...inputProps }) => {
    return (
        <div className={classNameDiv}>
            <label htmlFor={id}
                className="block mb-2 text-sm font-sans font-semibold text-gray-500">
                {label}
                {obligatorio &&
                    <span className=" text-red-400"> *</span>}
            </label>
            <input
                id={id}
                {...inputProps}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm
                px-3 py-1.5 focus:ring-blue-500 focus:border-blue-500 outline-none
                focus:shadow-lg w-full" />
        </div>
    )
}

export default InputWhite