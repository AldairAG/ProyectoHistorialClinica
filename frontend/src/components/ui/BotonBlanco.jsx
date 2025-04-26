import { twMerge } from "tailwind-merge"

// eslint-disable-next-line react/prop-types
const BotonBlanco = ({className, children, ...props }) => {
    return (
        <button {...props} className={twMerge("bg-white px-3 text-sm py-1 "+
            "text-gray-500 rounded-2xl border-1 border-gray-300 font-semibold hover:bg-blue-50 "+ 
            "flex items-center gap-2"
        ,className)}>
            {children}
        </button>
    )
}

export default BotonBlanco