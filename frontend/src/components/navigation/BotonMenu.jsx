import { useUser } from "../../hooks/useUser";

const BotonMenu = () => {
    const { openCloseMenuBar } = useUser();
    return (
        <button onClick={openCloseMenuBar} className="h-9 w-9 bg-gray-50  me-3 rounded-md flex items-center justify-center">
            <svg className="size-6 text-blue-800 stroke-2" data-slot="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
        </button>
    )
}

export default BotonMenu