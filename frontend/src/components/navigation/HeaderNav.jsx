import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon, BellIcon } from "@heroicons/react/24/outline";
import BotonMenu from './BotonMenu';

const HeaderNav = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <header className='bg-blue-900 h-16 flex justify-between items-center px-6 print:hidden'>
            <div className="flex items-center gap-3">
                <BotonMenu />
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-md hover:bg-blue-800 transition-colors">
                    <BellIcon className="h-6 w-6 text-gray-100" />
                </button>
                <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-blue-800 transition-colors">
                    {darkMode ? (
                        <SunIcon className="h-6 w-6 text-yellow-400" />
                    ) : (
                        <MoonIcon className="h-6 w-6 text-gray-100" />
                    )}
                </button>
            </div>
        </header>
    )
}

export default HeaderNav;
