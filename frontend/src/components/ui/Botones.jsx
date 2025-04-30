import { twMerge } from "tailwind-merge";

/* eslint-disable react/prop-types */
const BotonSquare=({className, children,...props }) => {
    return (
        <button
        {...props}
            className={twMerge("bg-white border border-gray-300 rounded-lg shadow-md py-2 px-5"+
                " hover:bg-gray-100 transition duration-200",className)}
        >
            {children}
        </button>
    );
}

export {
    BotonSquare,
}