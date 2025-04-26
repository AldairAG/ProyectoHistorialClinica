import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react/prop-types
const LinkArrowBack = ({ className, ...props }) => {
    return (
        <div
            className={twMerge("border border-gray-300 p-2 rounded-full", className)}
        >
            <Link
                {...props}
            >
                <ArrowLeftIcon className="h-4 w-4 text-gray-4 stroke-2" />
            </Link>
        </div>
    );
}

export default LinkArrowBack;