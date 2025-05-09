/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge"

const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium " +
    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
    "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 " +
    "text-white border-none shadow-md transition-all duration-300";

const gradientStyles = "bg-gradient-to-r from-[#004581] to-[#018abd] hover:from-[#001b48] hover:to-[#004581]";

const botonAzulDegradadoVariantes = {
    default: `${baseStyles} h-10 px-4 py-2 ${gradientStyles}`,
    large: `${baseStyles} h-10 px-4 py-2 w-full mx-auto ${gradientStyles} [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
};

const BotonAzul = ({ label, className, children, ...props }) => {
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

export const BotonAzulDegradado = ({ variant = "default", children, className, ...props }) => {
    return (
        <div className="flex justify-between pt-4 w-full">
            <div>
            </div>
            <button
                className={twMerge(botonAzulDegradadoVariantes[variant], className)}
                {...props}
            >
                {children}
            </button>
        </div>
    )
}

export default BotonAzul