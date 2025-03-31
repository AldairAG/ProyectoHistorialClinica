/* eslint-disable react/prop-types */
import { twMerge } from 'tailwind-merge'


const Card = ({ children, className }) => {
    return (
        <div className={twMerge("bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-300 space-x-2", className)}>
            {children}
        </div>
    )
}

const CardDescription = ({ children, className }) => {
    return (
        <p className={twMerge("text-sm text-gray-500", className)}>
            {children}
        </p>
    )
}
const CardHeader = ({ children, className }) => {
    return (
        <h3 className={twMerge("text-3xl font-semibold leading-none tracking-tight", className)}>
            {children}
        </h3>
    )
}

const Badge = ({ children, className }) => {
    return (
        <span className={twMerge("border border-gray-300 text-xs font-semibold px-2 py-1 rounded-full", className)}>
            {children}
        </span>
    )
}




export { Card, CardHeader, CardDescription,Badge };