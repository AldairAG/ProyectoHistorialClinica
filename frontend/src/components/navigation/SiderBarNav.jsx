import { USER_ROUTES } from '../../constants/routes'
import Avatar from './Avatar'
import { useUser } from '../../hooks/useUser'

const opciones = [
    {
        label: "Home",
        ic: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
        ruta: USER_ROUTES.HOME
    },
    {
        label: "Pacientes",
        ic: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
        ruta: USER_ROUTES.PACIENTES_LIST
    }

]

const SiderBarNav = () => {
    const { navigateTo, menuBar } = useUser();

    const isCurrentRoute = (route) => {
        return window.location.pathname === route;
    };

    const handleChangeNavigation =(e,ruta) => {
        navigateTo(ruta)
    };

    return (
        <div className={(menuBar ? "w-64 " : "w-20 ") + "relative flex flex-col justify-between h-full overflow-hidden " +
            "bg-gray-50 z-50 transition-[width,left,background-color] duration-500 ease-in-out "}>

            <div className='relative h-25 flex items-center justify-center mb-4 border-gray-200 border-b-1
                            after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-50 after:opacity-20'>
                <Avatar />
            </div>

            <nav className="h-full overflow-x-hidden overflow-y-auto ">
                <ul>
                    {opciones.map((item, index) => (
                        <li key={index} onClick={(e) => handleChangeNavigation(e, item.ruta)} className={"group " + (isCurrentRoute(item.ruta) && " bg-blue-100 ") + " flex mb-0.5 h-12 py-1.5 pe-6 ps-3.5 items-center border-s-4 border-transparent hover:border-s-blue-700 hover:bg-blue-100"}>
                            <div className="w-full h-full flex items-center">
                                <i className={("w-9 h-9 items-center flex justify-center rounded-md ")
                                    + (isCurrentRoute(item.ruta) ? "bg-blue-600 " : "bg-blue-100 ")
                                    + (isCurrentRoute(item.ruta) ? "group-hover:bg-blue-600 " : "group-hover:bg-gray-50 ")
                                    + (menuBar && ' me-4')}
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        className={(isCurrentRoute(item.ruta) ? "text-amber-50 " : "text-gray-950 ") + "size-6  stroke-2"}>
                                        <path d={item.ic} />
                                    </svg>
                                </i>
                                <label
                                    className={("text-base font-light ")
                                        + (isCurrentRoute(item.ruta) ? "text-blue-600 " : "text-gray-950 ")
                                        + (!menuBar && "hidden ")
                                    }>{item.label}</label>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}


export default SiderBarNav