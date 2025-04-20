/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

/**
 * Componente DropdownMenu
 *
 * Este componente representa un menú desplegable que se puede abrir y cerrar al hacer clic en un botón.
 * También detecta clics fuera del menú para cerrarlo automáticamente.
 *
 * @param {React.ReactNode} children - Los elementos secundarios que se mostrarán dentro del menú desplegable.
 *
 * @example
 * // Ejemplo de uso:
 * import DropdownMenu from './DropDownMenu';
 * 
 * const App = () => {
 *   return (
 *     <DropdownMenu>
 *       <DropdownMenuContent>
    *       <DropdownMenuItem variant="titulo">Opciones</DropdownMenuItem>
    *       <DropdownMenuItem variant="titulo">Opciones</DropdownMenuItem>
    *       <DropdownMenuItem variant="titulo">Opciones</DropdownMenuItem>
 *       </DropdownMenuContent>
 *     </DropdownMenu>
 *   );
 * };
 */
const DropdownMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    return (
    <div className="relative inline-block" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md z-10">
                    {children}
                </div>
            )}
        </div>
    );
};

const DropdownMenuContent = ({ children }) => (
    <div className="absolute right-0 mt-2 w-48 bg-white border-1 rounded-lg shadow-lg border-gray-200">
        {children}
    </div>
);

const DropdownMenuItem = ({ children, className, variant = 'default' }) => {
    const variantClasses = {
        default: "hover:bg-gray-100 text-gray-900",
        titulo: "font-bold text-gray-900",
    };
    return (

        <button className={twMerge(`w-full text-sm text-left px-4 py-2 ${variantClasses[variant]}`, className)}>
            {children}
        </button>
    )
};


export { DropdownMenu, DropdownMenuContent, DropdownMenuItem };