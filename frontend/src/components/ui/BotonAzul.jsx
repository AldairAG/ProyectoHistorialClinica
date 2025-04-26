import { twMerge } from "tailwind-merge"

// eslint-disable-next-line react/prop-types
const BotonAzul = ({ label,className, children, ...props }) => {
    return (
        <button {...props}
            className={twMerge("bg-blue-600 px-3 text-sm py-1 text-sky-100 rounded-2xl border-1 font-semibold hover:bg-blue-700 flex items-center gap-2",
                className
            )}>
            {label}
            {children}
        </button>
    )
}

export default BotonAzul