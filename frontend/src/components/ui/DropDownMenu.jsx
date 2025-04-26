/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { EllipsisVerticalIcon, EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

// DropdownMenu (Componente base reutilizable)
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
            {isOpen && children}
        </div>
    );
};

// DropdownMenuContent (Estilizado)
const DropdownMenuContent = ({ children }) => (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg border-gray-200 z-10">
        {children}
    </div>
);

// DropdownMenuItem (Con soporte para íconos)
const DropdownMenuItem = ({ children, className, variant = 'default', ...props }) => {
    const variantClasses = {
        default: "hover:bg-gray-100 text-gray-900",
        titulo: "font-bold text-gray-900",
    };
    return (
        <button 
            className={twMerge(
                "w-full text-sm text-left px-4 py-2 flex items-center gap-2",
                variantClasses[variant], 
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
};

// Componente especializado ActionsDropdown
const ActionsDropdown = ({ onView, onEdit, onDelete }) => {
    return (
        <DropdownMenu>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={onView}>
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                    Ver detalles
                </DropdownMenuItem>
                
                <DropdownMenuItem onClick={onEdit}>
                    <PencilSquareIcon className="h-5 w-5 text-gray-500" />
                    Editar
                </DropdownMenuItem>
                
                <DropdownMenuItem onClick={onDelete}>
                    <TrashIcon className="h-5 w-5 text-gray-500" />
                    Eliminar
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, ActionsDropdown };